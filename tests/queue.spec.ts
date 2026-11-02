import { test, expect } from '@playwright/test';

test.describe('內用排隊取號與唱號狀態 API 測試 (Queue Ticket & State)', () => {
  let token = '';

  test.beforeAll(async ({ request }) => {
    let loginRes = await request.post('/api/auth/login', {
      data: { username: 'admin', password: 'password123' },
    });
    let loginData = await loginRes.json();
    if (!loginData.success) {
      loginRes = await request.post('/api/auth/login', {
        data: { username: 'admin', password: '123456' },
      });
      loginData = await loginRes.json();
    }
    token = loginData.data.token;
  });

  test('【負向】手機號碼與人數格式錯誤應回傳 400', async ({ request }) => {
    const invalidPhone = await request.post('/api/queue', {
      data: { customerPhone: '0812345678', partySize: 2 },
    });
    expect(invalidPhone.status()).toBe(400);

    const invalidParty = await request.post('/api/queue', {
      data: { customerPhone: '0911223344', partySize: 25 },
    });
    expect(invalidParty.status()).toBe(400);
  });

  test('【正向】顧客取號、重複取號提示與放棄排隊', async ({ request }) => {
    const testPhone = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
    const createRes = await request.post('/api/queue', {
      data: { customerPhone: testPhone, partySize: 4 },
    });
    expect(createRes.status()).toBe(200);
    const created = await createRes.json();
    expect(created.data.status).toBe('WAITING');
    const ticketId = created.data.id;

    // 重複取號應返回既有號碼
    const dupRes = await request.post('/api/queue', {
      data: { customerPhone: testPhone, partySize: 4 },
    });
    const dupData = await dupRes.json();
    expect(dupData.data.id).toBe(ticketId);
    expect(dupData.data.isExisting).toBe(true);

    // 放棄排隊
    const cancelRes = await request.post(`/api/queue/${ticketId}/cancel`);
    expect(cancelRes.status()).toBe(200);
    const cancelData = await cancelRes.json();
    expect(cancelData.data.status).toBe('CANCELLED');
  });

  test('【正向】唱號累積 (1->2->3) 與超過 3 次自動 EXPIRED', async ({ request }) => {
    const testPhone = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
    const createRes = await request.post('/api/queue', {
      data: { customerPhone: testPhone, partySize: 2 },
    });
    const ticketId = (await createRes.json()).data.id;

    // 叫號 1, 2, 3 次
    for (let i = 1; i <= 3; i++) {
      const callRes = await request.put(`/api/admin/queue/${ticketId}/call`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      expect(callRes.status()).toBe(200);
      const callData = await callRes.json();
      expect(callData.data.callCount).toBe(i);
      expect(callData.data.status).toBe('CALLING');
    }

    // 達到 3 次後再次叫號，應自動轉 EXPIRED
    const expireRes = await request.put(`/api/admin/queue/${ticketId}/call`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(expireRes.status()).toBe(200);
    const expireData = await expireRes.json();
    expect(expireData.data.status).toBe('EXPIRED');
  });

  test('【正向】後台安排入座流程', async ({ request }) => {
    const testPhone = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
    const createRes = await request.post('/api/queue', {
      data: { customerPhone: testPhone, partySize: 3 },
    });
    const ticketId = (await createRes.json()).data.id;

    const seatRes = await request.put(`/api/admin/queue/${ticketId}/seat`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(seatRes.status()).toBe(200);
    const seatData = await seatRes.json();
    expect(seatData.data.status).toBe('SEATED');
    expect(seatData.data.seatedAt).toBeTruthy();
  });
});
