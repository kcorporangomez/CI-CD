const { test, expect } = require('@playwright/test');

test('la página de Playwright tiene el título correcto', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
