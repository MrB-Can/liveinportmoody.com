#!/usr/bin/env node
/**
 * capture-visual-review.mjs
 * Full-page screenshots of LiveInPortMoody.com for visual review.
 *
 * Usage:
 *   node scripts/capture-visual-review.mjs
 *
 * Output:
 *   visual-review-screenshots/desktop/*.png
 *   visual-review-screenshots/mobile/*.png
 *   visual-review-screenshots/public-gate/*.png
 *   visual-review-screenshots.zip
 *
 * Requires: puppeteer-core (npm install --no-save puppeteer-core)
 * Uses the local Google Chrome installation.
 */

import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dir  = dirname(fileURLToPath(import.meta.url));
const ROOT   = join(__dir, "..");
const OUT    = join(ROOT, "visual-review-screenshots");

const BASE        = "https://www.liveinportmoody.com";
const PREVIEW_KEY = "lgis2026";
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const DESKTOP = { width: 1440, height: 1200, label: "desktop" };
const MOBILE  = { width: 390,  height: 844,  label: "mobile",
  isMobile: true, hasTouch: true, deviceScaleFactor: 3 };

// ─── Route list ──────────────────────────────────────────────────────────────

const PREVIEW_ROUTES = [
  // Core pages
  { path: "/",                                  file: "home" },
  { path: "/coming-soon",                       file: "coming-soon" },
  { path: "/contact",                           file: "contact" },
  { path: "/resources",                         file: "resources" },
  { path: "/explore",                           file: "explore" },
  { path: "/buy",                               file: "buy" },
  { path: "/sell",                              file: "sell" },
  { path: "/listings",                          file: "listings" },
  { path: "/market",                            file: "market" },
  { path: "/move-to-port-moody",                file: "move-to-port-moody" },
  // Lead pages
  { path: "/buyer-guide",                       file: "buyer-guide" },
  { path: "/seller-guide",                      file: "seller-guide" },
  { path: "/first-time-home-buyers",            file: "first-time-home-buyers" },
  { path: "/generational-wealth-real-estate",   file: "generational-wealth-real-estate" },
  { path: "/request-recent-sales",              file: "request-recent-sales" },
  { path: "/faq",                               file: "faq" },
  // Community / trust
  { path: "/presales",                          file: "presales" },
  { path: "/local-businesses",                  file: "local-businesses" },
  { path: "/events",                            file: "events" },
  { path: "/testimonials",                      file: "testimonials" },
  { path: "/accolades",                         file: "accolades" },
  // Research hubs
  { path: "/neighbourhoods",                    file: "neighbourhoods" },
  { path: "/buildings",                         file: "buildings" },
  { path: "/complexes",                         file: "complexes" },
  // Representative guides
  { path: "/neighbourhoods/heritage-mountain",  file: "neighbourhood-heritage-mountain" },
  { path: "/neighbourhoods/heritage-woods",     file: "neighbourhood-heritage-woods" },
  { path: "/neighbourhoods/college-park",       file: "neighbourhood-college-park" },
  { path: "/neighbourhoods/suter-brook",        file: "neighbourhood-suter-brook" },
  { path: "/neighbourhoods/anmore",             file: "neighbourhood-anmore" },
  { path: "/buildings/the-grande",              file: "building-the-grande" },
  { path: "/buildings/50-electronic-ave",       file: "building-50-electronic-ave" },
  { path: "/buildings/klahanie-buildings",      file: "building-klahanie" },
  { path: "/complexes/treetops-101-parkside-drive", file: "complex-treetops" },
  { path: "/complexes/discovery-ridge",         file: "complex-discovery-ridge" },
  { path: "/complexes/aria-townhomes",          file: "complex-aria-townhomes" },
];

const PUBLIC_GATE_ROUTES = [
  { path: "/coming-soon",  file: "coming-soon" },
  { path: "/",             file: "home-gated" },
  { path: "/contact",      file: "contact" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ensureDir(...parts) {
  const p = join(...parts);
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
  return p;
}

async function waitForSettle(page) {
  try {
    await page.waitForNetworkIdle({ idleTime: 1500, timeout: 12000 });
  } catch {
    // Fallback: fixed delay if network never fully idles (e.g. map tiles, analytics)
    await new Promise(r => setTimeout(r, 3000));
  }
}

async function applyViewport(page, vp) {
  if (vp.isMobile) {
    await page.emulate({
      viewport: { width: vp.width, height: vp.height, isMobile: true,
        hasTouch: true, deviceScaleFactor: vp.deviceScaleFactor },
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    });
  } else {
    await page.setViewport({ width: vp.width, height: vp.height });
  }
}

async function screenshot(page, outPath) {
  await page.screenshot({ path: outPath, fullPage: true });
}

// ─── Main ────────────────────────────────────────────────────────────────────

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--window-size=1440,1200",
  ],
});

const stats = { desktop: 0, mobile: 0, gate: 0, failed: [] };

try {
  // ── Phase 1: Unlock preview (set cookie) ──────────────────────────────────
  console.log("Phase 1: Unlocking preview cookie…");
  const unlockPage = await browser.newPage();
  await unlockPage.setViewport({ width: 1440, height: 1200 });
  await unlockPage.goto(`${BASE}/preview?key=${PREVIEW_KEY}`, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  const cookies = await unlockPage.cookies();
  const previewCookie = cookies.find(c => c.name === "__lipm_preview");
  if (!previewCookie) {
    console.error("  ❌ Preview cookie not set — check PREVIEW_KEY");
    process.exit(1);
  }
  console.log(`  ✅ Cookie set: ${previewCookie.name}=${previewCookie.value}`);
  await unlockPage.close();

  // ── Phase 2: Desktop screenshots (with preview cookie) ───────────────────
  console.log(`\nPhase 2: Desktop screenshots (${PREVIEW_ROUTES.length} routes)…`);
  const desktopDir = ensureDir(OUT, "desktop");

  for (const { path, file } of PREVIEW_ROUTES) {
    const url = `${BASE}${path}`;
    const outPath = join(desktopDir, `${file}.png`);
    try {
      const page = await browser.newPage();
      await applyViewport(page, DESKTOP);
      await page.setCookie({ ...previewCookie, url: BASE });
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await waitForSettle(page);

      // Check if page was unexpectedly gated
      const title = await page.title();
      const isCaughtByGate = title.toLowerCase().includes("coming soon") && path !== "/coming-soon";
      if (isCaughtByGate) {
        console.log(`  ⚠️  ${path} — showed coming-soon (gated unexpectedly)`);
        stats.failed.push({ path, reason: "unexpectedly gated (coming-soon)" });
      } else {
        console.log(`  ✅ ${path} → ${file}.png`);
      }

      await screenshot(page, outPath);
      stats.desktop++;
      await page.close();
    } catch (err) {
      console.log(`  ❌ ${path} — ${err.message.split("\n")[0]}`);
      stats.failed.push({ path, reason: err.message.split("\n")[0] });
    }
  }

  // ── Phase 3: Mobile screenshots (with preview cookie) ────────────────────
  console.log(`\nPhase 3: Mobile screenshots (${PREVIEW_ROUTES.length} routes)…`);
  const mobileDir = ensureDir(OUT, "mobile");

  for (const { path, file } of PREVIEW_ROUTES) {
    const url = `${BASE}${path}`;
    const outPath = join(mobileDir, `${file}.png`);
    try {
      const page = await browser.newPage();
      await applyViewport(page, MOBILE);
      await page.setCookie({ ...previewCookie, url: BASE });
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await waitForSettle(page);
      await screenshot(page, outPath);
      console.log(`  ✅ ${path} → ${file}.png`);
      stats.mobile++;
      await page.close();
    } catch (err) {
      console.log(`  ❌ ${path} — ${err.message.split("\n")[0]}`);
      stats.failed.push({ path: `${path} (mobile)`, reason: err.message.split("\n")[0] });
    }
  }

  // ── Phase 4: Public gate screenshots (no cookie) ──────────────────────────
  console.log(`\nPhase 4: Public gate screenshots (no cookie)…`);
  const gateDir = ensureDir(OUT, "public-gate");

  for (const { path, file } of PUBLIC_GATE_ROUTES) {
    const url = `${BASE}${path}`;
    const outPath = join(gateDir, `${file}.png`);
    try {
      const page = await browser.newPage();
      await applyViewport(page, DESKTOP);
      // No cookie — should hit gate
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await waitForSettle(page);
      await screenshot(page, outPath);
      console.log(`  ✅ ${path} → ${file}.png`);
      stats.gate++;
      await page.close();
    } catch (err) {
      console.log(`  ❌ ${path} — ${err.message.split("\n")[0]}`);
      stats.failed.push({ path: `${path} (gate)`, reason: err.message.split("\n")[0] });
    }
  }

} finally {
  await browser.close();
}

// ── Phase 5: Zip ─────────────────────────────────────────────────────────────
console.log("\nPhase 5: Creating zip…");
const zipPath = join(ROOT, "visual-review-screenshots.zip");
try {
  execSync(`cd "${ROOT}" && zip -r visual-review-screenshots.zip visual-review-screenshots/`, {
    stdio: "pipe",
  });
  console.log(`  ✅ ${zipPath}`);
} catch (err) {
  console.log(`  ⚠️  zip failed: ${err.message}`);
}

// ── Summary ───────────────────────────────────────────────────────────────────
const total = stats.desktop + stats.mobile + stats.gate;
console.log(`
══════════════════════════════════════════════════
  CAPTURE COMPLETE
══════════════════════════════════════════════════
  Total screenshots : ${total}
  Desktop           : ${stats.desktop}
  Mobile            : ${stats.mobile}
  Public gate       : ${stats.gate}
  Failed            : ${stats.failed.length}
  Zip               : ${zipPath}
══════════════════════════════════════════════════`);

if (stats.failed.length) {
  console.log("\n  FAILURES:");
  stats.failed.forEach(f => console.log(`    ❌ ${f.path} — ${f.reason}`));
}
