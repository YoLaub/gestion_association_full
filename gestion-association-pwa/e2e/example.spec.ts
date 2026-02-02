import { expect, test } from "@playwright/test";

test("homepage has title", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle(/Gestion Association/i);
});

test("homepage loads successfully", async ({ page }) => {
	const response = await page.goto("/");
	expect(response?.status()).toBe(200);
});
