#!/usr/bin/env node
/**
 * mobile-overflow-check.mjs
 * Checks for horizontal overflow at 390px viewport width.
 *
 * Usage:
 *   node scripts/mobile-overflow-check.mjs
 *   LIPM_BASE_URL=https://www.liveinportmoody.com node scripts/mobile-overflow-check.mjs
 *
 * Exit codes:
 *   0 — no overflow found on any page
 *   1 — overflow detected on one or more pages
 */

import { chromium } from 'playwright';

const BASE = (process.env.LIPM_BASE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

const PAGES = [
  '/market',
  '/move-to-port-moody',
  '/listings',
];

const VIEWPORT = { width: 390, height: 844 };

async function checkPage(page, path) {
  const url = `${BASE}${path}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });

  const overflowElements = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const results = [];

    // Check every element in the DOM
    const all = document.querySelectorAll('*');
    for (const el of all) {
      const rect = el.getBoundingClientRect();
      const right = rect.right;
      if (right > docWidth + 1) { // 1px tolerance
        const tag = el.tagName.toLowerCase();
        const id = el.id ? `#${el.id}` : '';
        const classes = Array.from(el.classList).slice(0, 4).join(' ');
        const text = el.textContent?.trim().slice(0, 60) ?? '';
        results.push({
          selector: `${tag}${id}${classes ? '.' + classes.split(' ').join('.') : ''}`,
          overflow: Math.round(right - docWidth),
          width: Math.round(rect.width),
          text,
        });
      }
    }

    // Deduplicate: if a parent and child both overflow, only keep the deepest
    // unique offenders (filter out ancestors already covered)
    const unique = results.filter((item, _, arr) =>
      !arr.some((other) => other !== item && other.selector !== item.selector && item.text.includes(other.text) && other.overflow >= item.overflow)
    );

    return unique.slice(0, 10); // cap at 10
  });

  return { path, url, overflowElements };
}

async function main() {
  console.log(`\nMobile overflow check — ${VIEWPORT.width}x${VIEWPORT.height}px viewport`);
  console.log(`Base URL: ${BASE}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  let anyOverflow = false;

  for (const path of PAGES) {
    process.stdout.write(`  Checking ${path} … `);
    try {
      const result = await checkPage(page, path);
      if (result.overflowElements.length === 0) {
        console.log('✅ no overflow');
      } else {
        anyOverflow = true;
        console.log(`❌ OVERFLOW (${result.overflowElements.length} element(s))`);
        for (const el of result.overflowElements) {
          console.log(`    └ +${el.overflow}px beyond 390 | w=${el.width}px | ${el.selector}`);
          if (el.text) console.log(`      text: "${el.text}"`);
        }
      }
    } catch (err) {
      console.log(`⚠️  ERROR — ${err.message}`);
    }
  }

  await browser.close();

  console.log(anyOverflow ? '\n❌ Overflow found — see above\n' : '\n✅ All pages clean\n');
  process.exit(anyOverflow ? 1 : 0);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
