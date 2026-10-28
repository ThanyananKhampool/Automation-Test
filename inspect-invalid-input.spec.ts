
import { test, expect } from '@playwright/test';

test('REG-003: Show error messages for invalid email and phone', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  await page.getByPlaceholder('อีเมล*').fill('invalid-email');
  await page.locator('#phone').fill('123');

  await page
    .getByPlaceholder('กรอกเลขประจำตัวผู้เสียภาษี หรือ ชื่อบริษัท')
    .fill('บริษัททดสอบ');

  await page.getByPlaceholder('ชื่อ*').fill('ทดสอบ');
  await page.getByPlaceholder('นามสกุล*').fill('ระบบ');

  await page.locator('input[type="checkbox"]').check();

  await page.getByRole('button', { name: 'ทดลองใช้ฟรี' }).click();

  // ตรวจสอบข้อความแจ้งเตือนจากหน้าเว็บจริง
  await expect(
    page.getByText('กรุณาใส่อีเมลที่ถูกต้อง', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง', { exact: true })
  ).toBeVisible();

  // ตรวจสอบว่ายังอยู่หน้าเดิม
  await expect(page).toHaveURL(/Register\/empeo/i);
});
