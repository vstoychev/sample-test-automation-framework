import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://telepoint.wtbills.eu/login');
});

test('Test wtbills', async ({ page }) => {
  await page.getByLabel('Email Address').fill('maya.m14@gmail.com');
  await page.getByLabel('Password').fill('OTpW1Rjcxi');
  await page.getByRole('button', { name: 'Вписване' }).click();
  
  // await expect(page.getByTestId('todo-item')).toHaveCount(1);
  await expect(page.locator(".card-body h3")).toHaveText("Добре дошли, Мая")
  // await page.getByRole('heading', { name: 'Добре дошли, Мая' }).click();
  
  await page.getByRole('link', { name: ' Клиенти' }).click();
  await page.getByPlaceholder('Име, МОЛ, номер....').click();
  await page.getByPlaceholder('Име, МОЛ, номер....').fill('Уеб Трейд');
  await page.getByRole('button', { name: ' Намери' }).click();
  await page.getByRole('row', { name: 'Client Logo2 Уеб Трейд ЕООД Web Trade EOOD elena.radoeva@webtrade.bg 359889531579 активен' }).getByRole('img', { name: 'Client Logo2' }).click();
  await page.getByRole('cell', { name: ' Елена Радоева Elena Radoeva' }).click();
  await page.getByRole('cell', { name: ' 359889531579' }).click();
  await page.getByRole('tab', { name: ' Документи' }).click();
  await page.getByRole('tab', { name: ' Финансови документи' }).click();
  await page.getByRole('tab', { name: ' Акаунт мениджъри 1' }).click();
  await page.getByRole('link', { name: ' Договори' }).click();
  await page.getByText('232332').click();
  await page.getByRole('link', { name: 'Toggle navigation' }).filter({ hasText: 'Фактури' }).click();
  await page.getByRole('link', { name: 'Издаване' }).click();
  await page.getByRole('link', { name: 'Toggle navigation' }).filter({ hasText: 'Продукти' }).click();
  await page.getByRole('link', { name: 'Категории' }).click();
  await page.getByText('Kорсконект').click();
  await page.getByRole('link', { name: 'Toggle navigation' }).filter({ hasText: 'Справки' }).click();
  await page.getByRole('link', { name: 'Фин. документи' }).click();
  await page.getByRole('link', { name: 'Toggle navigation' }).filter({ hasText: 'Настройки' }).click();
  await page.getByRole('link', { name: 'Данни за фактури' }).click();
});