import { test, type Page } from "@playwright/test";
import path from "path";

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/checkout", name: "checkout" },
];

const THEMES: Array<"light" | "dark"> = ["light", "dark"];

const BASELINE_DIR = path.join(process.cwd(), "design", "baseline");

test.use({ reducedMotion: "reduce" });

async function settleScrollTriggeredAnimations(page: Page) {
  const viewportHeight = page.viewportSize()?.height ?? 800;

  let previousHeight = 0;
  for (let guard = 0; guard < 50; guard++) {
    const height = await page.evaluate(() => document.body.scrollHeight);
    const y = Math.min(previousHeight, height);
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(250);

    if (y + viewportHeight >= height) break;
    previousHeight = y + viewportHeight;
  }

  // One extra pass at the very bottom in case lazy content grew the page.
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(400);
}

for (const route of ROUTES) {
  for (const theme of THEMES) {
    test(`baseline: ${route.name} - ${theme}`, async ({ page }) => {
      await page.goto(route.path);
      await page.evaluate((t) => {
        document.documentElement.classList.toggle("dark", t === "dark");
        localStorage.setItem("theme", t);
      }, theme);
      await page.waitForTimeout(300);

      await settleScrollTriggeredAnimations(page);

      const fileName = `${route.name}-${theme}-${test.info().project.name}.png`;
      await page.screenshot({
        path: path.join(BASELINE_DIR, fileName),
        fullPage: true,
      });
    });
  }
}
