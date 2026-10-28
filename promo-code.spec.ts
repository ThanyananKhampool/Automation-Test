
import { test, expect } from '@playwright/test';

test('PROMO-001: Promo code field accepts the supplied code', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  await page.getByText('ใช้โค้ดส่วนลด', { exact: true }).click();

  const promoInput = page.getByPlaceholder('รหัสส่วนลด');

  await expect(promoInput).toBeVisible();

  await promoInput.fill('FREE15DAY');

  await expect(promoInput).toHaveValue('FREE15DAY');
});

test('PROMO-002: Promo code field accepts an invalid-looking code', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  await page.getByText('ใช้โค้ดส่วนลด', { exact: true }).click();

  const promoInput = page.getByPlaceholder('รหัสส่วนลด');

  await expect(promoInput).toBeVisible();

  await promoInput.fill('INVALIDCODE123');

  await expect(promoInput).toHaveValue('INVALIDCODE123');
});
