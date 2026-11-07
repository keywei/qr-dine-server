import { Buffer } from 'node:buffer';
import { test, expect } from './fixtures/test';
import { getMinimalPngBuffer } from './helpers/factories';

test.describe('圖片上傳 API 測試 (Upload Image)', () => {
  test('【負向】未授權時請求上傳應回傳 401', async ({ request }) => {
    const res = await request.post('/api/upload', {
      multipart: {
        image: { name: 'test.png', mimeType: 'image/png', buffer: Buffer.from('fake-bytes') },
      },
    });
    expect(res.status()).toBe(401);
  });

  test('【負向】未附帶檔案應回傳 400 錯誤', async ({ authRequest }) => {
    const res = await authRequest.post('/api/upload');
    expect(res.status()).toBe(400);
  });

  test('【負向】附帶非法格式檔案應回傳 400', async ({ authRequest }) => {
    const res = await authRequest.post('/api/upload', {
      multipart: {
        image: {
          name: 'invalid.txt',
          mimeType: 'text/plain',
          buffer: Buffer.from('plain text'),
        },
      },
    });
    expect(res.status()).toBe(400);
  });

  test('【正向】附帶合法圖片應回傳圖片 URL 並可存取', async ({ request, authRequest }) => {
    // 1. Arrange & Act: 上傳合法 1x1 PNG
    const res = await authRequest.post('/api/upload', {
      multipart: {
        image: {
          name: 'test-dish.png',
          mimeType: 'image/png',
          buffer: getMinimalPngBuffer(),
        },
      },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.data.url).toContain('/uploads/');

    // 2. Assert: 上傳圖片靜態端點可正常讀取
    const fileRes = await request.get(body.data.url);
    expect(fileRes.status()).toBe(200);
    expect(fileRes.headers()['content-type']).toContain('image/png');
  });
});
