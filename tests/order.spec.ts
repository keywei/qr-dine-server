import { test, expect } from './fixtures/test';
import { createOrderPayload } from './helpers/factories';

test.describe('訂單與付款狀態切換 API 測試 (Order & Payment State)', () => {
  test('【正向/負向】現金收款確認流程與防止重複收款', async ({ request, authRequest }) => {
    // 1. Arrange: 建立測試外帶待付款訂單
    const createRes = await request.post('/api/orders', {
      data: createOrderPayload(),
    });
    expect(createRes.status()).toBe(200);
    const { id: orderId, status, paymentStatus } = (await createRes.json()).data;
    expect(status).toBe('PENDING_PAYMENT');
    expect(paymentStatus).toBe('UNPAID');

    // 2. Act: 管理員確認收款
    const confirmRes = await authRequest.put(`/api/orders/${orderId}/confirm-payment`);
    expect(confirmRes.status()).toBe(200);
    const confirmData = (await confirmRes.json()).data;

    // Assert: 狀態推進至烹調中與已付款
    expect(confirmData.status).toBe('COOKING');
    expect(confirmData.paymentStatus).toBe('PAID');

    // 3. Negative Assert: 重複確認收款應被阻擋 (400)
    const duplicateRes = await authRequest.put(`/api/orders/${orderId}/confirm-payment`);
    expect(duplicateRes.status()).toBe(400);
    const duplicateBody = await duplicateRes.json();
    expect(duplicateBody.success).toBe(false);
  });
});
