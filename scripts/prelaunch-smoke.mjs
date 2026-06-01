#!/usr/bin/env node
/**
 * prelaunch-smoke.mjs
 * Pre-launch smoke test for liveinportmoody.com
 *
 * Usage:
 *   node scripts/prelaunch-smoke.mjs
 *   npm run smoke:prelaunch
 *
 * Overrides:
 *   LIPM_BASE_URL=https://... node scripts/prelaunch-smoke.mjs
 *   LIPM_PREVIEW_KEY=... node scripts/prelaunch-smoke.mjs
 *
 * Exit codes:
 *   0 — all critical checks passed (warnings allowed)
 *   1 — one or more critical checks failed
 */

const BASE = (process.env.LIPM_BASE_URL ?? 'https://www.liveinportmoody.com').replace(/\/$/, '');
const PREVIEW_KEY = process.env.LIPM_PREVIEW_KEY ?? 'lgis2026';
const PREVIEW_COOKIE_NAME = '__lipm_preview';
const TIMEOUT_MS = 15_000;

// Detection strings
const COMING_SOON_SIGNAL = 'city guide is on its way';
const COMING_SOON_TITLE  = 'Coming Soon';

// ─── Output helpers ────────────────────────────────────────────────────────────

let pass = 0, fail = 0, warn = 0;
const findings = [];

const ok  = (label, detail = '') => { console.log(`  ✅ ${label}${detail ? ` — ${detail}` : ''}`); pass++; };
const bad = (label, detail = '') => { console.log(`  ❌ ${label}${detail ? ` — ${detail}` : ''}`); fail++; findings.push({ type: 'FAIL', label, detail }); };
const wn  = (label, detail = '') => { console.log(`  ⚠️  ${label}${detail ? ` — ${detail}` : ''}`); warn++; findings.push({ type: 'WARN', label, detail }); };
const inf = (label)               => console.log(`  🔍 ${label}`);
const sec = (title)               => console.log(`\n${'═'.repeat(62)}\n  ${title}\n${'═'.repeat(62)}`);

// ─── Fetch helper ──────────────────────────────────────────────────────────────

async function get(path, { cookie, manual = false } = {}) {
  const url = `${BASE}${path}`;
  const headers = { 'User-Agent': 'LIPM-Smoke/1.0', Accept: 'text/html,application/xhtml+xml,*/*' };
  if (cookie) headers['Cookie'] = cookie;

  try {
    const res = await fetch(url, {
      headers,
      redirect: manual ? 'manual' : 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    let html = '';
    try { html = await res.text(); } catch (_) {}
    return { ok: true, status: res.status, headers: res.headers, html, url };
  } catch (e) {
    return { ok: false, status: 0, error: e.message, headers: new Headers(), html: '', url };
  }
}

// ─── Parsing helpers ───────────────────────────────────────────────────────────

const isGated    = r => r.html.includes(COMING_SOON_SIGNAL) || extractTitle(r.html).includes(COMING_SOON_TITLE);
const extractTitle = html => html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
const extractH1    = html => html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() ?? '';
const hasNoindex   = html => /name=["']robots["'][^>]*noindex/i.test(html) || /noindex[^"']*["'][^>]*name=["']robots["']/i.test(html);
const extractLocs  = xml  => [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());

// ─── Section 1: Public gate — no cookie ────────────────────────────────────────

sec('1 — PUBLIC GATE (no cookie — should be gated)');

const gatedRoutes = [
  '/', '/explore', '/neighbourhoods', '/buildings', '/complexes',
  '/buy', '/sell', '/presales', '/local-businesses', '/events',
  '/testimonials', '/accolades',
];

for (const path of gatedRoutes) {
  const r = await get(path);
  if (!r.ok) { bad(`${path} — request failed`, r.error); continue; }
  if (isGated(r)) ok(`${path} → gated`);
  else bad(`${path} → NOT gated`, `title: ${extractTitle(r.html).slice(0, 60)}`);
}

// ─── Section 2: Always-allowed — no cookie ────────────────────────────────────

sec('2 — ALWAYS-ALLOWED ROUTES (no cookie — should be accessible)');

const alwaysAllowed = [
  { path: '/coming-soon', expectGated: true  },  // coming-soon shows gated page by design
  { path: '/contact',    expectGated: false },
  { path: '/privacy',    expectGated: false },
  { path: '/terms',      expectGated: false },
  { path: '/robots.txt', expectGated: false },
  { path: '/sitemap.xml', expectGated: false },
];

for (const { path, expectGated } of alwaysAllowed) {
  const r = await get(path);
  if (!r.ok) { bad(`${path} — request failed`, r.error); continue; }
  if (r.status >= 400) { bad(`${path} — HTTP ${r.status}`); continue; }

  const gated = isGated(r);
  if (expectGated && gated) ok(`${path} → coming-soon (expected)`);
  else if (!expectGated && !gated) ok(`${path} → accessible (${r.status})`);
  else if (!expectGated && gated) bad(`${path} → blocked by gate, should be public`);
  else bad(`${path} → unexpected state (status ${r.status})`);
}

// ─── Section 3: Preview unlock ─────────────────────────────────────────────────

sec('3 — PREVIEW UNLOCK');

let previewCookie = '';

// 3a: Wrong key should not set cookie
{
  const r = await get('/preview?key=WRONG_KEY_SMOKE_TEST', { manual: true });
  const setCookie = r.headers.get('set-cookie') ?? '';
  if (setCookie.includes(PREVIEW_COOKIE_NAME)) {
    bad('Wrong key — cookie set (should NOT be set with wrong key)', setCookie.slice(0, 80));
  } else {
    ok('Wrong key → no cookie set');
  }
}

// 3b: Correct key should set cookie and redirect to /
{
  const r = await get(`/preview?key=${PREVIEW_KEY}`, { manual: true });
  const setCookie = r.headers.get('set-cookie') ?? '';
  const location  = r.headers.get('location') ?? '';

  inf(`Status: ${r.status} | Location: ${location} | Set-Cookie present: ${setCookie.includes(PREVIEW_COOKIE_NAME)}`);

  if (r.status >= 300 && r.status < 400) ok(`Preview redirect — status ${r.status}`);
  else wn(`Preview redirect — unexpected status ${r.status}`, 'expected 3xx');

  if (setCookie.includes(PREVIEW_COOKIE_NAME)) {
    ok(`Cookie set — ${PREVIEW_COOKIE_NAME} present in Set-Cookie`);
    // Extract value; value equals the preview key per middleware implementation
    const match = setCookie.match(new RegExp(`${PREVIEW_COOKIE_NAME}=([^;]+)`));
    const cookieValue = match?.[1] ?? PREVIEW_KEY;
    previewCookie = `${PREVIEW_COOKIE_NAME}=${cookieValue}`;
    inf(`Cookie to use: ${previewCookie.slice(0, 40)}`);
  } else {
    bad('Cookie NOT set with correct key', setCookie.slice(0, 80) || '(empty set-cookie)');
    // Fall back to constructing cookie from known key so other sections can run
    previewCookie = `${PREVIEW_COOKIE_NAME}=${PREVIEW_KEY}`;
    wn('Falling back to constructed cookie for remaining sections');
  }

  if (location === '/' || location === `${BASE}/`) ok(`Redirect location → / (correct)`);
  else wn(`Redirect location → ${location}`, 'expected /');
}

// ─── Section 4: Preview route health ──────────────────────────────────────────

sec('4 — PREVIEW ROUTE HEALTH (with cookie)');

const corePreviewRoutes = [
  '/', '/neighbourhoods', '/buildings', '/complexes', '/listings',
  '/buyer-guide', '/seller-guide', '/first-time-home-buyers',
  '/generational-wealth-real-estate', '/request-recent-sales',
  '/presales', '/local-businesses', '/events', '/testimonials', '/accolades',
];

for (const path of corePreviewRoutes) {
  const r = await get(path, { cookie: previewCookie });
  if (!r.ok) { bad(`${path} — request failed`, r.error); continue; }
  if (r.status >= 400) { bad(`${path} — HTTP ${r.status}`); continue; }

  if (isGated(r)) {
    bad(`${path} → still gated with cookie`, extractTitle(r.html).slice(0, 60));
  } else {
    const h1 = extractH1(r.html);
    ok(`${path} → accessible`, h1.slice(0, 50) || extractTitle(r.html).slice(0, 50));
  }
}

// ─── Section 5: Representative guide routes ────────────────────────────────────

sec('5 — GUIDE ROUTES (with cookie)');

const guideRoutes = [
  '/neighbourhoods/heritage-mountain',   // published
  '/neighbourhoods/heritage-woods',      // preview
  '/neighbourhoods/college-park',        // preview
  '/neighbourhoods/suter-brook',         // preview
  '/neighbourhoods/anmore',              // preview
  '/complexes/treetops-101-parkside-drive', // guide-live
  '/complexes/discovery-ridge',          // preview
  '/complexes/aria-townhomes',           // preview
  '/buildings/the-grande',               // preview
  '/buildings/50-electronic-ave',        // preview
  '/buildings/klahanie-buildings',       // preview
];

for (const path of guideRoutes) {
  const r = await get(path, { cookie: previewCookie });
  if (!r.ok) { bad(`${path} — request failed`, r.error); continue; }
  if (r.status >= 400) { bad(`${path} — HTTP ${r.status}`); continue; }

  if (isGated(r)) bad(`${path} → gated (should show guide)`);
  else {
    const h1 = extractH1(r.html).slice(0, 60);
    ok(`${path} → accessible`, h1 || '(no h1)');
  }
}

// ─── Section 6: Sitemap safety ────────────────────────────────────────────────

sec('6 — SITEMAP SAFETY');

{
  const r = await get('/sitemap.xml');
  if (!r.ok || r.status !== 200) {
    bad('sitemap.xml — could not fetch', `status: ${r.status}`);
  } else {
    const urls = extractLocs(r.html);
    inf(`Sitemap contains ${urls.length} URL(s)`);

    // Must include heritage-mountain (only published neighbourhood)
    if (urls.some(u => u.includes('/neighbourhoods/heritage-mountain'))) {
      ok('Sitemap includes /neighbourhoods/heritage-mountain');
    } else {
      bad('Sitemap missing /neighbourhoods/heritage-mountain');
    }

    // Must NOT include any /buildings/ URLs (all are preview)
    const buildingUrls = urls.filter(u => u.includes('/buildings/'));
    if (buildingUrls.length === 0) ok('Sitemap has no /buildings/ URLs');
    else bad(`Sitemap has ${buildingUrls.length} /buildings/ URL(s)`, buildingUrls.slice(0, 2).join(', '));

    // Must NOT include preview neighbourhood slugs (only heritage-mountain is published)
    const previewNeighbourhoods = [
      'heritage-woods', 'mountain-meadows', 'moody-centre', 'glenayre', 'college-park',
      'suter-brook', 'newport-village', 'klahanie', 'ioco', 'barber-street',
      'seaview', 'north-shore', 'anmore', 'belcarra',
    ];
    const leakedPreviews = urls.filter(u =>
      u.includes('/neighbourhoods/') && previewNeighbourhoods.some(slug => u.includes(slug))
    );
    if (leakedPreviews.length === 0) ok('Sitemap has no preview neighbourhood URLs');
    else bad(`Sitemap leaks preview neighbourhood URL(s)`, leakedPreviews.slice(0, 2).join(', '));

    // Must NOT include preview complex slugs (only treetops is guide-live and may be included)
    const previewComplexSlugs = ['discovery-ridge', 'aria-townhomes', 'college-park-townhomes', 'klahanie-townhomes'];
    const leakedComplexes = urls.filter(u =>
      u.includes('/complexes/') && previewComplexSlugs.some(slug => u.includes(slug))
    );
    if (leakedComplexes.length === 0) ok('Sitemap has no preview complex URLs');
    else bad(`Sitemap leaks preview complex URL(s)`, leakedComplexes.slice(0, 2).join(', '));

    // All URLs must use www
    const nonWww = urls.filter(u => !u.startsWith('https://www.'));
    if (nonWww.length === 0) ok('All sitemap URLs use https://www.');
    else bad(`${nonWww.length} non-www URL(s) in sitemap`, nonWww.slice(0, 2).join(', '));
  }
}

// ─── Section 7: Noindex spot checks ───────────────────────────────────────────

sec('7 — NOINDEX SPOT CHECKS (with cookie)');

const noindexChecks = [
  // Preview pages — expect noindex
  { path: '/neighbourhoods/heritage-woods',          expectNoindex: true,  label: 'Heritage Woods (preview)' },
  { path: '/neighbourhoods/college-park',            expectNoindex: true,  label: 'College Park (preview)' },
  { path: '/complexes/discovery-ridge',              expectNoindex: true,  label: 'Discovery Ridge (preview)' },
  { path: '/buildings/the-grande',                   expectNoindex: true,  label: 'The Grande (preview)' },
  // Published / lead pages — expect indexable
  { path: '/neighbourhoods/heritage-mountain',       expectNoindex: false, label: 'Heritage Mountain (published)' },
  { path: '/complexes/treetops-101-parkside-drive',  expectNoindex: false, label: 'Treetops (guide-live)' },
  { path: '/buyer-guide',                            expectNoindex: false, label: 'Buyer Guide (lead page)' },
  { path: '/seller-guide',                           expectNoindex: false, label: 'Seller Guide (lead page)' },
];

for (const { path, expectNoindex, label } of noindexChecks) {
  const r = await get(path, { cookie: previewCookie });
  if (!r.ok || r.status >= 400) { bad(`${label} — could not fetch (${r.status})`); continue; }

  const indexed = !hasNoindex(r.html);
  if (expectNoindex && !indexed) ok(`${label} → noindex,follow (correct)`);
  else if (!expectNoindex && indexed) ok(`${label} → indexable (correct)`);
  else if (expectNoindex && indexed) bad(`${label} → should be noindex but is indexable`);
  else bad(`${label} → should be indexable but has noindex`);
}

// ─── Section 8: Safety keyword checks ─────────────────────────────────────────

sec('8 — SAFETY KEYWORD CHECKS (with cookie)');

// Pages to check for fake listing / sold data / IDX
const safetyPages = [
  { path: '/',                label: 'Homepage' },
  { path: '/listings',        label: 'Listings' },
  { path: '/neighbourhoods',  label: 'Neighbourhoods index' },
  { path: '/buildings',       label: 'Buildings index' },
  { path: '/complexes',       label: 'Complexes index' },
  { path: '/buyer-guide',     label: 'Buyer Guide' },
  { path: '/seller-guide',    label: 'Seller Guide' },
  { path: '/neighbourhoods/heritage-mountain', label: 'Heritage Mountain guide' },
  { path: '/neighbourhoods/heritage-woods',    label: 'Heritage Woods guide (preview)' },
  { path: '/buildings/the-grande',             label: 'The Grande guide (preview)' },
];

for (const { path, label } of safetyPages) {
  const r = await get(path, { cookie: previewCookie });
  if (!r.ok || r.status >= 400) { wn(`${label} — skipping safety check (${r.status})`); continue; }

  const html = r.html;
  const isPreview = path.includes('heritage-woods') || path.includes('the-grande') ||
                    path.includes('college-park') || path.includes('suter-brook') ||
                    path.includes('anmore') || path.includes('discovery-ridge') ||
                    path.includes('aria-townhomes');

  let clean = true;

  // FAIL: IDX script tags
  if (/src=["'][^"']*(?:idx|rets|mls-import)[^"']*["']/i.test(html)) {
    bad(`${label} — IDX script tag found`); clean = false;
  }

  // FAIL: listing cards (data attribute)
  if (/data-listing-card|class=["'][^"']*listing-card/i.test(html)) {
    bad(`${label} — listing card element found`); clean = false;
  }

  // FAIL: sold price data patterns (genuine sold price amounts)
  if (/sold for \$[\d,]+|\$[\d,]+ sold|\bsold price[:\s]+\$[\d,]+/i.test(html)) {
    bad(`${label} — sold price data found`); clean = false;
  }

  // WARN: "full guide" or "complete guide" on preview pages only
  if (isPreview && /\b(?:full|complete) guide\b/i.test(html)) {
    wn(`${label} — "full/complete guide" copy on preview page`); clean = false;
  }

  // WARN: "download now" (no downloadable files exist)
  if (/\bdownload now\b/i.test(html)) {
    wn(`${label} — "download now" text found (no file available)`); clean = false;
  }

  if (clean) ok(`${label} → no unsafe patterns`);
}

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log(`\n${'═'.repeat(62)}`);
console.log(`  SMOKE TEST RESULT`);
console.log(`${'═'.repeat(62)}`);
console.log(`  BASE: ${BASE}`);
console.log(`  ${fail === 0 ? '✅ PASS' : '❌ FAIL'}  —  ${pass} passed | ${warn} warning(s) | ${fail} failed`);

if (findings.length > 0) {
  const fails = findings.filter(f => f.type === 'FAIL');
  const warns = findings.filter(f => f.type === 'WARN');
  if (fails.length) {
    console.log('\n  FAILURES:');
    fails.forEach(f => console.log(`    ❌ ${f.label}${f.detail ? ` — ${f.detail}` : ''}`));
  }
  if (warns.length) {
    console.log('\n  WARNINGS:');
    warns.forEach(w => console.log(`    ⚠️  ${w.label}${w.detail ? ` — ${w.detail}` : ''}`));
  }
}

console.log(`${'═'.repeat(62)}\n`);

process.exit(fail > 0 ? 1 : 0);
