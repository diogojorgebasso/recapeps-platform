import { test, expect } from "@playwright/test";

test.describe("Quiz Access Tests", () => {
  test.describe("Student user", () => {
    test.use({ storageState: "playwright/.auth/student.json" });

    test("should show free quiz content", async ({ page }) => {
      await page.goto("/quiz/1");
      await expect(page.getByTestId("quiz-content")).toBeVisible();
    });

    test("should show premium quiz locked message", async ({ page }) => {
      await page.goto("/quiz/2"); // Assuming quiz 2 is premium
      await expect(page.getByText("Premium Content")).toBeVisible();
      await expect(page.getByText("Upgrade to Premium")).toBeVisible();
    });

    test("should limit number of daily quizzes", async ({ page }) => {
      await page.goto("/quiz");
      // Test daily quiz limit for free users
      await expect(page.getByTestId("quiz-limit-counter")).toBeVisible();
    });
  });

  test.describe("Premium user", () => {
    test.use({ storageState: "playwright/.auth/premium.json" });

    test("should access all quiz content", async ({ page }) => {
      await page.goto("/quiz/2"); // Premium quiz
      await expect(page.getByTestId("quiz-content")).toBeVisible();
      await expect(page.getByText("Premium Content")).toBeVisible();
    });

    test("should not show quiz limits", async ({ page }) => {
      await page.goto("/quiz");
      await expect(page.getByTestId("quiz-limit-counter")).not.toBeVisible();
    });

    test("should show premium features", async ({ page }) => {
      await page.goto("/quiz/1");
      await expect(page.getByTestId("detailed-explanation")).toBeVisible();
      await expect(page.getByTestId("save-progress")).toBeVisible();
    });
  });

  test.describe("Quiz Functionality", () => {
    test.use({ storageState: "playwright/.auth/student.json" });

    test("should track correct answers", async ({ page }) => {
      await page.goto("/quiz/1");
      await page.getByTestId("answer-option-1").click();
      await expect(page.getByTestId("score-counter")).toContainText("1");
    });

    test("should show results at end", async ({ page }) => {
      await page.goto("/quiz/1");
      // Complete quiz
      for (let i = 1; i <= 5; i++) {
        await page.getByTestId(`answer-option-${i}`).click();
        await page.getByRole("button", { name: "Next" }).click();
      }
      await expect(page.getByTestId("quiz-results")).toBeVisible();
    });

    test("should save progress for premium users", async ({ page }) => {
      test.use({ storageState: "playwright/.auth/premium.json" });

      await page.goto("/quiz/1");
      await page.getByTestId("answer-option-1").click();
      await page.getByTestId("save-progress").click();

      // Reload and verify progress
      await page.reload();
      await expect(page.getByTestId("progress-indicator")).toContainText("1/5");
    });
  });

  // Test for viewing a quiz
  test("View a quiz", async ({ page }) => {
    await page.goto("/quiz");
    await page.click("text=Sample Quiz");
    await expect(page.locator("h1")).toContainText("Sample Quiz");
  });

});
