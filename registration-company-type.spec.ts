
import { test, expect } from '@playwright/test';

test('REG-006: Select company registration type', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  const registeredCompany = page.locator(
    'input[type="radio"][value="true"]'
  );

  const otherCompany = page.locator(
    'input[type="radio"][value="false"]'
  );

  // ตรวจสอบว่าค่าเริ่มต้นเป็นบริษัทจดทะเบียนในไทย
  await expect(registeredCompany).toBeChecked();

  // เลือกประเภทอื่นๆ
  await otherCompany.check();
  await expect(otherCompany).toBeChecked();

  // กลับมาเลือกบริษัทจดทะเบียนในไทย
  await registeredCompany.check();
  await expect(registeredCompany).toBeChecked();
});
