import { test, expect } from '@playwright/test';

test.describe('餐點管理與上架狀態 API 測試 (Menu Item & Availability)', () => {
  let token = '';
  let categoryId = 1;
  let testItemId = 0;

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

    const catRes = await request.get('/api/categories');
    const catData = await catRes.json();
    if (catData.data && catData.data.length > 0) {
      categoryId = catData.data[0].id;
    }
  });

  test('【負向】建立餐點缺漏必填項應被阻擋', async ({ request }) => {
    const res = await request.post('/api/menu-items', {
      headers: { Authorization: `Bearer ${token}` },
      data: { name: '', categoryId, price: 100 },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
    expect(body.code).toBe(2008);
  });

  test('【負向】未授權時更新餐點應回傳 401', async ({ request }) => {
    const res = await request.put('/api/menu-items/1', {
      data: { price: 999 },
    });
    expect(res.status()).toBe(401);
  });

  test('【負向】切換不存在餐點狀態應回傳 404', async ({ request }) => {
    const res = await request.patch('/api/menu-items/999999/availability', {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(404);
  });

  test('【正向】完整流程：建立 -> 更新 -> 切換上架 -> 刪除', async ({ request }) => {
    const createRes = await request.post('/api/menu-items', {
      headers: { Authorization: `Bearer ${token}` },
      data: { name: 'E2E自動化特選餐', categoryId, price: 120, isAvailable: true },
    });
    expect(createRes.status()).toBe(201);
    const createData = await createRes.json();
    expect(createData.success).toBe(true);
    testItemId = createData.data.id;

    const updateRes = await request.put(`/api/menu-items/${testItemId}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { name: 'E2E自動化特選餐(修訂版)', price: 150 },
    });
    expect(updateRes.status()).toBe(200);
    const updateData = await updateRes.json();
    expect(updateData.success).toBe(true);
    expect(updateData.data.price).toBe(150);

    const toggleRes = await request.patch(`/api/menu-items/${testItemId}/availability`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(toggleRes.status()).toBe(200);
    const toggleData = await toggleRes.json();
    expect(toggleData.data.isAvailable).toBe(false);

    const delRes = await request.delete(`/api/menu-items/${testItemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(delRes.status()).toBe(200);
  });
});
