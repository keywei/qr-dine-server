import { test, expect } from './fixtures/test';

test.describe('餐點管理與上架狀態 API 測試 (Menu Item & Availability)', () => {
  let categoryId = 1;

  test.beforeAll(async ({ request }) => {
    const catRes = await request.get('/api/categories');
    const catData = await catRes.json();
    if (catData.data?.length > 0) categoryId = catData.data[0].id;
  });

  test('【負向】建立餐點缺漏必填項應被阻擋', async ({ authRequest }) => {
    // Arrange & Act: 缺少必填名稱
    const res = await authRequest.post('/api/menu-items', {
      data: { name: '', categoryId, price: 100 },
    });

    // Assert
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.code).toBe(2008);
  });

  test('【負向】未授權時更新餐點應回傳 401', async ({ request }) => {
    // Act: 未攜帶 Token 請求
    const res = await request.put('/api/menu-items/1', {
      data: { price: 999 },
    });
    // Assert
    expect(res.status()).toBe(401);
  });

  test('【負向】切換不存在餐點狀態應回傳 404', async ({ authRequest }) => {
    const res = await authRequest.patch('/api/menu-items/999999/availability');
    expect(res.status()).toBe(404);
  });

  test('【正向】完整流程：建立 -> 更新 -> 切換上架 -> 刪除', async ({ authRequest }) => {
    // 1. Arrange & Act: 建立餐點
    const createRes = await authRequest.post('/api/menu-items', {
      data: { name: 'E2E自動化特選餐', categoryId, price: 120, isAvailable: true },
    });
    expect(createRes.status()).toBe(201);
    const createdItem = (await createRes.json()).data;
    const itemId = createdItem.id;
    expect(createdItem.name).toBe('E2E自動化特選餐');

    // 2. Act & Assert: 更新資訊
    const updateRes = await authRequest.put(`/api/menu-items/${itemId}`, {
      data: { name: 'E2E自動化特選餐-改', price: 135 },
    });
    expect(updateRes.status()).toBe(200);
    expect((await updateRes.json()).data.price).toBe(135);

    // 3. Act & Assert: 切換上下架
    const toggleRes = await authRequest.patch(`/api/menu-items/${itemId}/availability`);
    expect(toggleRes.status()).toBe(200);
    expect((await toggleRes.json()).data.isAvailable).toBe(false);

    // 4. Act & Assert: 刪除清理
    const delRes = await authRequest.delete(`/api/menu-items/${itemId}`);
    expect(delRes.status()).toBe(200);
  });
});
