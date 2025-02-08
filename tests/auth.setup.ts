import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate as student", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByLabel("Email").fill("student@example.com");
  await page.getByLabel("Password").fill("student123");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Dashboard")).toBeVisible();

  await page.context().storageState({ path: "playwright/.auth/student.json" });
});

setup("authenticate as premium", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByLabel("Email").fill("premium@example.com");
  await page.getByLabel("Password").fill("premium123");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Dashboard")).toBeVisible();

  await page.context().storageState({ path: "playwright/.auth/premium.json" });
});
