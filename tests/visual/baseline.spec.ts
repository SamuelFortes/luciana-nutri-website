import { test } from "@playwright/test";
import path from "path";

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/checkout", name: "checkout" },
];

const THEMES: Array<"light" | "dark"> = ["light", "dark"];

const BASELINE_DIR = path.join(process.cwd(), "design", "baseline");

for (const route of ROUTES) {
  for (const theme of THEMES) {
    test(`baseline: ${route.name} - ${theme}`, async ({ page }) => {
      await page.goto(route.path);
      await page.evaluate((t) => {
        document.documentElement.classList.toggle("dark", t === "dark");
        localStorage.setItem("theme", t);
      }, theme);
      await page.waitForTimeout(300);

      const fileName = `${route.name}-${theme}-${test.info().project.name}.png`;
      await page.screenshot({
        path: path.join(BASELINE_DIR, fileName),
        fullPage: true,
      });
    });
  }
}
