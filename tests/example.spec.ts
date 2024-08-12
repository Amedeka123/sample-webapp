// tests/test-title.spec.js
const { test, expect } = require('@playwright/test');

test('should display correct title', async ({ page }) => {
    await page.goto('http://localhost:8000');
    await expect(page).toHaveTitle('Sample Web App');
});
