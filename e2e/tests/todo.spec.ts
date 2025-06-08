import { test, expect } from "@playwright/test";

test("todo list pagination", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("checkbox", { name: /delectus aut autem/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "2" }).click();

  await expect(
    page.getByRole("checkbox", {
      name: /suscipit repellat esse quibusdam voluptatem incidunt/i,
    })
  ).toBeVisible();
});

test("shows toast notification when toggling todo", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("checkbox", { name: /delectus aut autem/i })
  ).toBeVisible();

  await page.getByRole("checkbox", { name: /delectus aut autem/i }).click();

  await expect(page.getByText("Todo updated")).toBeVisible();
});
