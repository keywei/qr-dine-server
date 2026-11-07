import { Buffer } from 'node:buffer';

export const createRandomPhone = (): string => {
  return `09${Math.floor(10000000 + Math.random() * 90000000)}`;
};

export const createOrderPayload = (overrides = {}) => ({
  diningType: 'TAKEOUT',
  customerPhone: '0912345678',
  paymentMethod: 'CASH',
  items: [{ name: '測試炒飯', price: 90, quantity: 1 }],
  ...overrides,
});

export const getMinimalPngBuffer = (): Buffer => {
  return Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64',
  );
};

