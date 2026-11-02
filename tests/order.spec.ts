import { test, expect } from '@playwright/test';

test.describe('訂單與付款狀態切換 API 測試 (Order & Payment State)', () => {
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

  test('【正向/負向】現金收款確認流程與防止重複收款', async ({ request }) => {
    // 1. 建立測試外帶訂單
    const createRes = await request.post('/api/orders', {
      data: {
        diningType: 'TAKEOUT',
        customerPhone: '0912345678',
        paymentMethod: 'CASH',
        items: [{ name: '測試炒飯', price: 90, quantity: 1 }],
      },
    });
    expect(createRes.status()).toBe(200);
    const createData = await createRes.json();
    expect(createData.code).toBe(0);
    const orderId = createData.data.id;
    expect(createData.data.status).toBe('PENDING_PAYMENT');
    expect(createData.data.paymentStatus).toBe('UNPAID');

    // 2. 現場付款：確認收款
    const confirmRes = await request.put(`/api/orders/${orderId}/confirm-payment`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(confirmRes.status()).toBe(200);
    const confirmData = await confirmRes.json();
    expect(confirmData.code).toBe(0);
    expect(confirmData.data.status).toBe('COOKING');
    expect(confirmData.data.paymentStatus).toBe('PAID');

    // 3. 【負向】重複確認收款應被阻擋
    const duplicateRes = await request.put(`/api/orders/${orderId}/confirm-payment`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(duplicateRes.status()).toBe(400);
    const duplicateData = await duplicateRes.json();
    expect(duplicateData.success).toBe(false);
  });
});
