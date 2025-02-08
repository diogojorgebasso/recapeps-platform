import { test, expect } from "@playwright/test";

// Adjust baseURL if needed, or uncomment baseURL in playwright.config.ts
const baseURL = "http://localhost:3000";

test.describe("Page accessibility tests", () => {
  // List of pages to check. For dynamic pages, use sample parameters.
  const pages = [
    "/",
    "/contact",
    "/a-propos",
    "/termes-et-condition",
    "/login",
    "/register",
    "/forgot-password",
    "/dashboard", // Requires authentication? Ensure test setup if needed.
    "/team",
    "/quiz",
    "/quiz/1", // Sample subject id for quiz.
    "/chatbot",
    "/notes",
    "/notes/sample", // Sample dynamic page.
    "/profil",
    "/flashcards",
    "/flashcards/1", // Sample subject id for flashcards.
    "/checkout",
    "/payment",
    "/create-note",
  ];

  for (const path of pages) {
    test(`should load page at ${path}`, async ({ page }) => {
      await page.goto(`${baseURL}${path}`);
      // Check that the page doesn't include '404' indicating a missing page.
      await expect(page.locator("body")).not.toContainText("404");
    });
  }
});

// Test for Home page
test('Home page should have the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Home/);
});

// Test for Quiz page
test('Quiz page should load correctly', async ({ page }) => {
  await page.goto('/quiz');
  await expect(page).toHaveURL(/.*quiz/);
  await expect(page.locator('h1')).toContainText('Quiz');
});

// Test for Notes page
test('Notes page should load correctly', async ({ page }) => {
  await page.goto('/notes');
  await expect(page).toHaveURL(/.*notes/);
  await expect(page.locator('h1')).toContainText('Notes');
});

// Test for Login page
test('Login page should load correctly', async ({ page }) => {
  await page.goto('/auth/login');
  await expect(page).toHaveURL(/.*auth\/login/);
  await expect(page.locator('h1')).toContainText('Login');
});

// Test for SignUp page
test('SignUp page should load correctly', async ({ page }) => {
  await page.goto('/auth/signup');
  await expect(page).toHaveURL(/.*auth\/signup/);
  await expect(page.locator('h1')).toContainText('Sign Up');
});
