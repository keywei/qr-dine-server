import { test, expect } from '@playwright/test';

test.describe('內用排隊取號與唱號狀態 API 測試 (Queue Ticket & State)', () => {
  let token = '';

  test.beforeAll(async ({ request }) => {
    let res = await request.post('/api/auth/login', { data: { username: 'admin', password: 'password123' } });
    let body = await res.json();
    if (!body.success) {
      res = await request.post('/api/auth/login', { data: { username: 'admin', password: '123456' } });
      body = await res.json();
    }
    token = body.data.token;
  });

  test('【負向】手機號碼/人數格式錯誤與非法 ID 應回傳 400', async ({ request }) => {
    const p1 = await request.post('/api/queue', { data: { customerPhone: '0812345678', partySize: 2 } });
    expect(p1.status()).toBe(400);

    const p2 = await request.post('/api/queue', { data: { customerPhone: '0911223344', partySize: 25 } });
    expect(p2.status()).toBe(400);

    const p3 = await request.get('/api/queue/invalid_id');
    expect(p3.status()).toBe(400);
  });

  test('【正向】公共隊列狀態查詢 (GET /api/queue/status)', async ({ request }) => {
    const res = await request.get('/api/queue/status');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(typeof body.data.waitingCount).toBe('number');
  });

  test('【正向】後台隊列統計查詢 (GET /api/admin/queue/stats)', async ({ request }) => {
    const res = await request.get('/api/admin/queue/stats', {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data).toHaveProperty('waitingCount');
    expect(body.data).toHaveProperty('callingCount');
    expect(body.data).toHaveProperty('seatedCount');
  });

  test('【正向】顧客取號、重複取號提示與放棄排隊', async ({ request }) => {
    const phone = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
    const res = await request.post('/api/queue', { data: { customerPhone: phone, partySize: 4 } });
    expect(res.status()).toBe(200);
    const { id } = (await res.json()).data;

    const dup = await request.post('/api/queue', { data: { customerPhone: phone, partySize: 4 } });
    expect((await dup.json()).data.isExisting).toBe(true);

    const cancel = await request.post(`/api/queue/${id}/cancel`);
    expect((await cancel.json()).data.status).toBe('CANCELLED');
  });

  test('【正向】唱號累積 (1->2->3)、逾期 EXPIRED 與安排入座', async ({ request }) => {
    const phone = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
    const create = await request.post('/api/queue', { data: { customerPhone: phone, partySize: 2 } });
    const { id } = (await create.json()).data;

    for (let i = 1; i <= 3; i++) {
      const call = await request.put(`/api/admin/queue/${id}/call`, { headers: { Authorization: `Bearer ${token}` } });
      const data = (await call.json()).data;
      expect(data.callCount).toBe(i);
      expect(data.status).toBe('CALLING');
    }

    const expire = await request.put(`/api/admin/queue/${id}/call`, { headers: { Authorization: `Bearer ${token}` } });
    expect((await expire.json()).data.status).toBe('EXPIRED');

    const phone2 = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
    const create2 = await request.post('/api/queue', { data: { customerPhone: phone2, partySize: 3 } });
    const id2 = (await create2.json()).data.id;
    const seat = await request.put(`/api/admin/queue/${id2}/seat`, { headers: { Authorization: `Bearer ${token}` } });
    expect((await seat.json()).data.status).toBe('SEATED');
  });
});
