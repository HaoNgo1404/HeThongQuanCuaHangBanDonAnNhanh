import { test, expect } from '@playwright/test';

test.describe('Checkout Process', () => {
  test('should complete the checkout successfully', async ({ page }) => {
    // Navigate to the home page
    await page.goto('http://localhost:3000');

    // Add a product to the cart
    await page.click('text=Add to Cart'); // Adjust selector as needed

    // Navigate to the checkout page
    await page.click('text=Checkout'); // Adjust selector as needed

    // Fill in the checkout form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="address"]', '123 Main St');
    await page.fill('input[name="payment"]', '4111111111111111'); // Example card number

    // Submit the checkout form
    await page.click('text=Submit Order'); // Adjust selector as needed

    // Verify the success message
    const successMessage = await page.locator('text=Order placed successfully').isVisible();
    expect(successMessage).toBe(true);
  });
});