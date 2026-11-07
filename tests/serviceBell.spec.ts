import { test, expect } from './fixtures/test';

test.describe('服務鈴 API 測試 (Service Bell & Multi-tier Switches)', () => {
  let tableId = 0;
  const tableCode = 'A1';

  test.beforeAll(async ({ authRequest }) => {
    const tablesRes = await authRequest.get('/api/tables');
    const { data: tables } = await tablesRes.json();
    const tableA1 = tables.find((t: { code: string }) => t.code === tableCode);
    tableId = tableA1 ? tableA1.id : tables[0].id;

    // 確保所有桌號預設開啟
    await authRequest.patch('/api/service-bell/global', { data: { enabled: true } });
    await authRequest.patch(`/api/service-bell/tables/${tableId}`, { data: { enabled: true } });
  });

  test.beforeEach(async ({ authRequest }) => {
    // 測試前復原開關設定，隔離測試狀態
    if (tableId > 0) {
      await authRequest.patch('/api/service-bell/global', { data: { enabled: true } });
      await authRequest.patch(`/api/service-bell/tables/${tableId}`, { data: { enabled: true } });
    }
  });

  test('【正向】顧客查詢服務鈴狀態 (GET /api/service-bell/status)', async ({ request }) => {
    const res = await request.get(`/api/service-bell/status?table=${tableCode}`);
    expect(res.status()).toBe(200);
    const { data } = await res.json();
    expect(data.globalEnabled).toBe(true);
    expect(data.tableEnabled).toBe(true);
  });

  test('【負向/阻擋】全店總開關關閉時，呼叫服務鈴應回傳 400 阻擋', async ({ request, authRequest }) => {
    await authRequest.patch('/api/service-bell/global', { data: { enabled: false } });

    const callRes = await request.post('/api/service-bell/call', {
      data: { tableCode, type: 'WATER', note: '加冰水' },
    });
    expect(callRes.status()).toBe(400);

    await authRequest.patch('/api/service-bell/global', { data: { enabled: true } });
  });

  test('【負向/阻擋】單桌開關關閉時，該桌呼叫應回傳 400 阻擋', async ({ request, authRequest }) => {
    await authRequest.patch(`/api/service-bell/tables/${tableId}`, { data: { enabled: false } });

    const callRes = await request.post('/api/service-bell/call', {
      data: { tableCode, type: 'UTENSILS' },
    });
    expect(callRes.status()).toBe(400);

    await authRequest.patch(`/api/service-bell/tables/${tableId}`, { data: { enabled: true } });
  });

  test('【正向】正常呼叫服務鈴、查詢待處理與店家完成服務', async ({ request, authRequest }) => {
    // 使用獨立桌號以避開單桌 60 秒頻率限制 (Test Isolation)
    const targetCode = 'B1';

    // 1. Arrange & Act: 呼叫服務鈴
    const callRes = await request.post('/api/service-bell/call', {
      data: { tableCode: targetCode, type: 'WATER', note: '請加溫水' },
    });
    expect(callRes.status()).toBe(200);
    const callId = (await callRes.json()).data.id;
    expect(callId).toBeGreaterThan(0);

    // 2. Act & Assert: 後台查詢待處理清單
    const activeRes = await authRequest.get('/api/service-bell/active');
    expect(activeRes.status()).toBe(200);
    const activeList = (await activeRes.json()).data;
    expect(activeList.some((c: { id: number }) => c.id === callId)).toBe(true);

    // 3. Act & Assert: 店家點擊完成
    const completeRes = await authRequest.put(`/api/service-bell/${callId}/complete`);
    expect(completeRes.status()).toBe(200);
    expect((await completeRes.json()).data.status).toBe('COMPLETED');
  });
});
