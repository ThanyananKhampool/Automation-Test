
import { test, expect } from '@playwright/test';

test('REG-007: Toggle privacy policy checkbox', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  const checkbox = page.locator('input[type="checkbox"]');

  // ตรวจสอบว่าตอนแรกยังไม่ได้เลือก
  await expect(checkbox).not.toBeChecked();

  // เลือก Checkbox
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  // ยกเลิกการเลือก
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});
