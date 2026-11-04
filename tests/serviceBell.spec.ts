import { test, expect } from '@playwright/test';

test.describe('服務鈴 API 測試 (Service Bell & Multi-tier Switches)', () => {
  const API_URL = 'http://localhost:3000/api';
  let token = '';
  let tableId = 0;
  const tableCode = 'A1';

  test.beforeAll(async ({ request }) => {
    // 1. 取得 Admin JWT
    const loginRes = await request.post(`${API_URL}/auth/login`, {
      data: { username: 'admin', password: '123456' },
    });
    const loginJson = await loginRes.json();
    token = loginJson.data.token;

    // 2. 獲取桌號列表找到 A1
    const tablesRes = await request.get(`${API_URL}/tables`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const tablesJson = await tablesRes.json();
    const tableA1 = tablesJson.data.find((t: any) => t.code === tableCode);
    tableId = tableA1 ? tableA1.id : tablesJson.data[0].id;

    // 3. 確保預設開關全開啟
    await request.patch(`${API_URL}/service-bell/global`, {
      data: { enabled: true },
      headers: { Authorization: `Bearer ${token}` },
    });
    await request.patch(`${API_URL}/service-bell/tables/${tableId}`, {
      data: { enabled: true },
      headers: { Authorization: `Bearer ${token}` },
    });
  });

  test('【正向】顧客查詢服務鈴狀態 (GET /api/service-bell/status)', async ({ request }) => {
    const res = await request.get(`${API_URL}/service-bell/status?table=${tableCode}`);
    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json.code).toBe(0);
    expect(json.data.globalEnabled).toBe(true);
    expect(json.data.tableEnabled).toBe(true);
  });

  test('【負向/阻擋】全店總開關關閉時，呼叫服務鈴應回傳 400 阻擋', async ({ request }) => {
    // 關閉總開關
    await request.patch(`${API_URL}/service-bell/global`, {
      data: { enabled: false },
      headers: { Authorization: `Bearer ${token}` },
    });

    const callRes = await request.post(`${API_URL}/service-bell/call`, {
      data: { tableCode, type: 'WATER', note: '加冰水' },
    });
    expect(callRes.status()).toBe(400);

    // 復原開關
    await request.patch(`${API_URL}/service-bell/global`, {
      data: { enabled: true },
      headers: { Authorization: `Bearer ${token}` },
    });
  });

  test('【負向/阻擋】單桌開關關閉時，該桌呼叫應回傳 400 阻擋', async ({ request }) => {
    // 關閉單桌開關
    await request.patch(`${API_URL}/service-bell/tables/${tableId}`, {
      data: { enabled: false },
      headers: { Authorization: `Bearer ${token}` },
    });

    const callRes = await request.post(`${API_URL}/service-bell/call`, {
      data: { tableCode, type: 'UTENSILS' },
    });
    expect(callRes.status()).toBe(400);

    // 復原開關
    await request.patch(`${API_URL}/service-bell/tables/${tableId}`, {
      data: { enabled: true },
      headers: { Authorization: `Bearer ${token}` },
    });
  });

  test('【正向】正常呼叫服務鈴、查詢待處理與店家完成服務', async ({ request }) => {
    // 1. 顧客呼叫服務鈴
    const callRes = await request.post(`${API_URL}/service-bell/call`, {
      data: { tableCode, type: 'WATER', note: '請加溫水' },
    });
    expect(callRes.status()).toBe(200);
    const callJson = await callRes.json();
    const callId = callJson.data.id;
    expect(callId).toBeGreaterThan(0);
    expect(callJson.data.type).toBe('WATER');

    // 2. 後台查詢待處理清單
    const activeRes = await request.get(`${API_URL}/service-bell/active`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(activeRes.status()).toBe(200);
    const activeJson = await activeRes.json();
    const found = activeJson.data.find((c: any) => c.id === callId);
    expect(found).toBeDefined();

    // 3. 店家點擊完成
    const completeRes = await request.put(`${API_URL}/service-bell/${callId}/complete`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(completeRes.status()).toBe(200);
    const completeJson = await completeRes.json();
    expect(completeJson.data.status).toBe('COMPLETED');
  });
});
