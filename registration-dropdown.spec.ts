
import { test, expect } from '@playwright/test';

test('REG-005: Select business type and user count', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  // เลือกประเภทธุรกิจ
  await page.getByText('ประเภทธุรกิจ*', { exact: true }).click();

  await page.getByText('เทคโนโลยี', { exact: true }).click();

  await expect(
    page.locator('.go5-dropdown-element')
      .filter({ hasText: 'เทคโนโลยี' })
      .first()
  ).toBeVisible();

  // เลือกจำนวนผู้ใช้งาน
  await page.getByText('ผู้ใช้งาน*', { exact: true }).click();

  await page.getByText('21-50', { exact: true }).click();

  await expect(
    page.locator('.go5-dropdown-element')
      .filter({ hasText: '21-50' })
      .first()
  ).toBeVisible();
});
