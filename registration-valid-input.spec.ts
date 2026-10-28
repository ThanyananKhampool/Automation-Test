
import { test, expect } from '@playwright/test';

test('REG-004: Accept valid email and phone formats', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  const emailInput = page.getByPlaceholder('อีเมล*');
  const phoneInput = page.locator('#phone');

  await emailInput.fill('test@example.com');
  await phoneInput.fill('0812345678');

  // ตรวจว่าค่าที่กรอกอยู่ในช่องถูกต้อง
  await expect(emailInput).toHaveValue('test@example.com');
  await expect(phoneInput).toHaveValue('0812345678');

  // ตรวจว่าไม่แสดงข้อความแจ้งรูปแบบข้อมูลผิด
  await expect(
    page.getByText('กรุณาใส่อีเมลที่ถูกต้อง', { exact: true })
  ).toHaveCount(0);

  await expect(
    page.getByText('รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง', { exact: true })
  ).toHaveCount(0);
});
