import { test, expect } from './fixtures/test';
import { createRandomPhone } from './helpers/factories';

test.describe('內用排隊取號與唱號狀態 API 測試 (Queue Ticket & State)', () => {
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

  test('【正向】後台隊列統計查詢 (GET /api/admin/queue/stats)', async ({ authRequest }) => {
    const res = await authRequest.get('/api/admin/queue/stats');
    expect(res.status()).toBe(200);
    const { data } = await res.json();
    expect(data).toHaveProperty('waitingCount');
    expect(data).toHaveProperty('callingCount');
    expect(data).toHaveProperty('seatedCount');
  });

  test('【正向】顧客取號、重複取號提示與放棄排隊', async ({ request }) => {
    const phone = createRandomPhone();
    // 1. 取號
    const res = await request.post('/api/queue', { data: { customerPhone: phone, partySize: 4 } });
    expect(res.status()).toBe(200);
    const { id } = (await res.json()).data;

    // 2. 同手機重複取號
    const dup = await request.post('/api/queue', { data: { customerPhone: phone, partySize: 4 } });
    expect((await dup.json()).data.isExisting).toBe(true);

    // 3. 放棄排隊
    const cancel = await request.post(`/api/queue/${id}/cancel`);
    expect((await cancel.json()).data.status).toBe('CANCELLED');
  });

  test('【正向】唱號累積 (1->2->3)、逾期 EXPIRED 與安排入座', async ({ request, authRequest }) => {
    const phone = createRandomPhone();
    const create = await request.post('/api/queue', { data: { customerPhone: phone, partySize: 2 } });
    const { id } = (await create.json()).data;

    // 唱號累積 1 -> 2 -> 3
    for (let i = 1; i <= 3; i++) {
      const call = await authRequest.put(`/api/admin/queue/${id}/call`);
      const data = (await call.json()).data;
      expect(data.callCount).toBe(i);
      expect(data.status).toBe('CALLING');
    }

    // 第 4 次唱號轉為逾期 EXPIRED
    const expire = await authRequest.put(`/api/admin/queue/${id}/call`);
    expect((await expire.json()).data.status).toBe('EXPIRED');

    // 另一位顧客取號並安排入座 SEATED
    const phone2 = createRandomPhone();
    const create2 = await request.post('/api/queue', { data: { customerPhone: phone2, partySize: 3 } });
    const id2 = (await create2.json()).data.id;
    const seat = await authRequest.put(`/api/admin/queue/${id2}/seat`);
    expect((await seat.json()).data.status).toBe('SEATED');
  });
});
