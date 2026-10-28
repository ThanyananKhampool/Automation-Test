
import { test, expect } from '@playwright/test';

test('REG-002: Show validation messages when submitting an empty form', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo');

  // กดทดลองใช้ฟรีโดยไม่กรอกข้อมูล
  await page.getByRole('button', { name: 'ทดลองใช้ฟรี' }).click();

  // ตรวจสอบว่าระบบแจ้งเตือนช่องที่จำเป็น
  await expect(
    page.getByText('กรุณากรอกเลขประจำตัวผู้เสียภาษีหรือชื่อบริษัท', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('กรุณากรอกอีเมล', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('กรุณากรอกชื่อ', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('กรุณากรอกนามสกุล', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('กรุณากรอกเบอร์โทรศัพท์มือถือ', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText(
      'กรุณารับทราบนโยบายความเป็นส่วนตัว และข้อกำหนดและเงื่อนไขการใช้งาน',
      { exact: true }
    )
  ).toBeVisible();

  // ต้องยังอยู่หน้าเดิมหลังส่งฟอร์มว่าง
  await expect(page).toHaveURL(/Register\/empeo/i);
});
