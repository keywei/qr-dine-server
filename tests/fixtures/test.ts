import { test as base, expect, type APIRequestContext } from '@playwright/test';

type TestFixtures = {
  adminToken: string;
  authRequest: APIRequestContext;
};

export const test = base.extend<TestFixtures>({
  adminToken: async ({ request }, use) => {
    const res = await request.post('/api/auth/login', {
      data: { username: 'admin', password: '123456' },
    });
    const data = await res.json();
    await use(data.data?.token);
  },

  authRequest: async ({ playwright, adminToken }, use) => {
    const ctx = await playwright.request.newContext({
      baseURL: 'http://localhost:3000',
      extraHTTPHeaders: {
        Authorization: `Bearer ${adminToken}`,
      },
    });
    await use(ctx);
    await ctx.dispose();
  },
});

export { expect };

