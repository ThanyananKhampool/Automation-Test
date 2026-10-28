
import { test, expect } from '@playwright/test';

test.describe('empeo Registration', () => {
  test('REG-001: Registration page should load', async ({ page }) => {
    await page.goto(
      'https://portal.uat.gofive.co.th/Register/empeo'
    );

    await expect(page).toHaveURL(/Register\/empeo/i);

    await expect(page.locator('body')).toBeVisible();
  });
});
