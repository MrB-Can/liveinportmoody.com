const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PROD_URL = 'https://www.liveinportmoody.com';
const OUTPUT_DIR = './visual-review-screenshots/s41-final-visual-recapture';

const viewports = {
  desktop: { width: 1440, height: 1200, name: '1440x1200-desktop' },
  mobile: { width: 390, height: 844, name: '390x844-mobile' }
};

const desktopRoutes = [
  '/',
  '/buy',
  '/sell',
  '/listings',
  '/presales',
  '/neighbourhoods',
  '/buildings',
  '/complexes',
  '/complexes/treetops-101-parkside-drive',
  '/resources',
  '/contact',
  '/meet-us',
  '/about',
  '/raving-fans',
  '/featured-businesses',
  '/events',
  '/local-life',
  '/local-insights'
];

const mobileRoutes = [
  '/',
  '/buy',
  '/sell',
  '/listings',
  '/presales',
  '/neighbourhoods',
  '/buildings',
  '/complexes',
  '/complexes/treetops-101-parkside-drive',
  '/resources',
  '/contact',
  '/meet-us',
  '/raving-fans',
  '/featured-businesses',
  '/events'
];

async function captureScreenshots() {
  const browser = await chromium.launch();
  const results = {
    captured: [],
    failed: [],
    timestamp: new Date().toISOString(),
    baseUrl: PROD_URL
  };

  try {
    // Desktop screenshots
    for (const route of desktopRoutes) {
      const page = await browser.newPage();
      page.setViewportSize(viewports.desktop);
      try {
        await page.goto(PROD_URL + route, { waitUntil: 'networkidle', timeout: 30000 });
        const filename = `${viewports.desktop.name}_${route === '/' ? 'home' : route.replace(/\//g, '_').substring(1)}.png`;
        await page.screenshot({ path: path.join(OUTPUT_DIR, filename), fullPage: false });
        results.captured.push({ viewport: 'desktop', route, filename });
        console.log(`✓ ${route} (desktop)`);
      } catch (err) {
        results.failed.push({ viewport: 'desktop', route, error: err.message });
        console.log(`✗ ${route} (desktop): ${err.message}`);
      }
      await page.close();
    }

    // Mobile screenshots
    for (const route of mobileRoutes) {
      const page = await browser.newPage();
      page.setViewportSize(viewports.mobile);
      try {
        await page.goto(PROD_URL + route, { waitUntil: 'networkidle', timeout: 30000 });
        const filename = `${viewports.mobile.name}_${route === '/' ? 'home' : route.replace(/\//g, '_').substring(1)}.png`;
        await page.screenshot({ path: path.join(OUTPUT_DIR, filename), fullPage: false });
        results.captured.push({ viewport: 'mobile', route, filename });
        console.log(`✓ ${route} (mobile)`);
      } catch (err) {
        results.failed.push({ viewport: 'mobile', route, error: err.message });
        console.log(`✗ ${route} (mobile): ${err.message}`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }

  // Write manifest
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(results, null, 2)
  );

  console.log(`\nCapture complete: ${results.captured.length} screenshots, ${results.failed.length} failed`);
  return results;
}

captureScreenshots().catch(console.error);
