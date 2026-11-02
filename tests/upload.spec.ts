import { test, expect } from '@playwright/test';

test.describe('圖片上傳 API 測試 (Upload Image)', () => {
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

  test('【負向】未授權時請求上傳應回傳 401', async ({ request }) => {
    const res = await request.post('/api/upload', {
      multipart: {
        image: {
          name: 'test.png',
          mimeType: 'image/png',
          buffer: Buffer.from('fake-image-bytes'),
        },
      },
    });
    expect(res.status()).toBe(401);
  });

  test('【負向】未附帶檔案應回傳 400 錯誤', async ({ request }) => {
    const res = await request.post('/api/upload', {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(400);
  });

  test('【負向】附帶非法格式檔案應回傳 400', async ({ request }) => {
    const res = await request.post('/api/upload', {
      headers: { Authorization: `Bearer ${token}` },
      multipart: {
        image: {
          name: 'invalid.txt',
          mimeType: 'text/plain',
          buffer: Buffer.from('hello plain text'),
        },
      },
    });
    expect(res.status()).toBe(400);
  });

  test('【正向】附帶合法圖片應回傳圖片 URL 並可存取', async ({ request }) => {
    // 最小合法 1x1 PNG 位元組
    const pngBuffer = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      'base64'
    );
    const res = await request.post('/api/upload', {
      headers: { Authorization: `Bearer ${token}` },
      multipart: {
        image: {
          name: 'test-dish.png',
          mimeType: 'image/png',
          buffer: pngBuffer,
        },
      },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.code).toBe(0);
    expect(body.data.url).toContain('/uploads/dish-');

    // 驗證回傳的靜態資源 URL 是否可成功 GET 存取
    const imageRes = await request.get(body.data.url);
    expect(imageRes.status()).toBe(200);
  });
});
