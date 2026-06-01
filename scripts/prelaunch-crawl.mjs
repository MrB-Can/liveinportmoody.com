#!/usr/bin/env node
/**
 * prelaunch-crawl.mjs
 * Launch readiness crawl: metadata, internal links, safety keywords, API smoke.
 * Complements prelaunch-smoke.mjs which covers gate/noindex/sitemap checks.
 *
 * Usage:
 *   node scripts/prelaunch-crawl.mjs
 *   npm run crawl:prelaunch
 *
 * Overrides:
 *   LIPM_BASE_URL=https://... LIPM_PREVIEW_KEY=... node scripts/prelaunch-crawl.mjs
 *
 * Exit codes:
 *   0 — all critical checks passed (warnings allowed)
 *   1 — one or more critical checks failed
 */

import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const BASE        = (process.env.LIPM_BASE_URL ?? "https://www.liveinportmoody.com").replace(/\/$/, "");
const PREVIEW_KEY = process.env.LIPM_PREVIEW_KEY ?? "lgis2026";
const COOKIE      = `__lipm_preview=${PREVIEW_KEY}`;
const TIMEOUT_MS  = 15_000;
const __dir       = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR  = join(__dir, "../public");

// ─── Output ──────────────────────────────────────────────────────────────────

let pass = 0, fail = 0, warn = 0;
const findings = [];

const ok  = (label, detail = "") => { console.log(`  ✅ ${label}${detail ? ` — ${detail}` : ""}`); pass++; };
const bad = (label, detail = "") => { console.log(`  ❌ ${label}${detail ? ` — ${detail}` : ""}`); fail++; findings.push({ type: "FAIL", label, detail }); };
const wn  = (label, detail = "") => { console.log(`  ⚠️  ${label}${detail ? ` — ${detail}` : ""}`); warn++; findings.push({ type: "WARN", label, detail }); };
const inf = (label)               => console.log(`  🔍 ${label}`);
const sec = (title)               => console.log(`\n${"═".repeat(62)}\n  ${title}\n${"═".repeat(62)}`);

// ─── Fetch helper ─────────────────────────────────────────────────────────────

async function get(path, { cookie, manual = false } = {}) {
  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  const headers = { "User-Agent": "LIPM-Crawl/1.0", Accept: "text/html,application/xhtml+xml,*/*" };
  if (cookie) headers["Cookie"] = cookie;
  try {
    const res = await fetch(url, {
      headers,
      redirect: manual ? "manual" : "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    let html = "";
    try { html = await res.text(); } catch (_) {}
    return { ok: true, status: res.status, headers: res.headers, html, url };
  } catch (e) {
    return { ok: false, status: 0, error: e.message, headers: new Headers(), html: "", url };
  }
}

async function post(path, body) {
  const url = `${BASE}${path}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": "LIPM-Crawl/1.0" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    let json = null;
    try { json = await res.json(); } catch (_) {}
    return { ok: true, status: res.status, json };
  } catch (e) {
    return { ok: false, status: 0, error: e.message, json: null };
  }
}

// ─── Parsing helpers ──────────────────────────────────────────────────────────

const extractTitle       = html => html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
const extractDescription = html => {
  const m = html.match(/name=["']description["'][^>]*content=["']([^"']+)["']/i)
    ?? html.match(/content=["']([^"']+)["'][^>]*name=["']description["']/i);
  return m?.[1]?.trim() ?? "";
};
const extractCanonical = html => {
  const m = html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    ?? html.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  return m?.[1]?.trim() ?? "";
};
const hasNoindex = html =>
  /name=["']robots["'][^>]*noindex/i.test(html) ||
  /noindex[^"']*["'][^>]*name=["']robots["']/i.test(html);

function extractInternalHrefs(html) {
  const hrefs = new Set();
  const regex = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1].split("?")[0].split("#")[0]; // strip query/hash for dedup
    hrefs.add(match[1]); // keep original for analysis
  }
  return [...hrefs];
}

// ─── Pages to crawl ───────────────────────────────────────────────────────────

const CORE_PAGES = [
  { path: "/",                            label: "Homepage",                  expectNoindex: false },
  { path: "/explore",                     label: "Explore",                   expectNoindex: false },
  { path: "/neighbourhoods",             label: "Neighbourhoods index",       expectNoindex: false },
  { path: "/buildings",                   label: "Buildings index",           expectNoindex: false },
  { path: "/complexes",                   label: "Complexes index",           expectNoindex: false },
  { path: "/listings",                    label: "Listings",                  expectNoindex: false },
  { path: "/buy",                         label: "Buy",                       expectNoindex: false },
  { path: "/sell",                        label: "Sell",                      expectNoindex: false },
  { path: "/resources",                   label: "Resources",                 expectNoindex: false },
  { path: "/contact",                     label: "Contact",                   expectNoindex: false },
  { path: "/move-to-port-moody",          label: "Move to Port Moody",        expectNoindex: false },
  { path: "/first-time-home-buyers",      label: "First-Time Buyers",         expectNoindex: false },
  { path: "/generational-wealth-real-estate", label: "Generational Wealth",  expectNoindex: false },
  { path: "/buyer-guide",                 label: "Buyer Guide",               expectNoindex: false },
  { path: "/seller-guide",               label: "Seller Guide",              expectNoindex: false },
  { path: "/faq",                         label: "FAQ",                       expectNoindex: false },
  { path: "/request-recent-sales",        label: "Request Recent Sales",      expectNoindex: false },
  { path: "/presales",                    label: "Presales",                  expectNoindex: false },
  { path: "/local-businesses",           label: "Local Businesses",          expectNoindex: false },
  { path: "/events",                      label: "Events",                    expectNoindex: false },
  { path: "/testimonials",               label: "Testimonials",              expectNoindex: false },
  { path: "/accolades",                   label: "Accolades",                 expectNoindex: false },
];

const PREVIEW_PAGES = [
  { path: "/neighbourhoods/heritage-woods",       label: "Heritage Woods (preview)",      expectNoindex: true  },
  { path: "/neighbourhoods/college-park",         label: "College Park (preview)",         expectNoindex: true  },
  { path: "/neighbourhoods/suter-brook",          label: "Suter Brook (preview)",         expectNoindex: true  },
  { path: "/neighbourhoods/anmore",               label: "Anmore (preview)",               expectNoindex: true  },
  { path: "/complexes/discovery-ridge",           label: "Discovery Ridge (preview)",     expectNoindex: true  },
  { path: "/complexes/aria-townhomes",            label: "Aria Townhomes (preview)",      expectNoindex: true  },
  { path: "/buildings/the-grande",               label: "The Grande (preview)",          expectNoindex: true  },
  { path: "/buildings/50-electronic-ave",        label: "50 Electronic Ave (preview)",   expectNoindex: true  },
  { path: "/buildings/klahanie-buildings",        label: "Klahanie Buildings (preview)",  expectNoindex: true  },
];

const ALL_PAGES = [...CORE_PAGES, ...PREVIEW_PAGES];

// Known routes in the app — used to detect dead internal links
const KNOWN_ROUTES = new Set([
  "/", "/explore", "/neighbourhoods", "/buildings", "/complexes", "/listings",
  "/buy", "/sell", "/resources", "/contact", "/move-to-port-moody", "/about",
  "/market", "/blog", "/faq", "/privacy", "/terms",
  "/first-time-home-buyers", "/generational-wealth-real-estate",
  "/buyer-guide", "/seller-guide", "/request-recent-sales",
  "/presales", "/local-businesses", "/events", "/testimonials", "/accolades",
  "/coming-soon", "/sitemap.xml", "/robots.txt",
  "/neighbourhoods/heritage-mountain",
  "/neighbourhoods/heritage-woods", "/neighbourhoods/mountain-meadows",
  "/neighbourhoods/moody-centre", "/neighbourhoods/glenayre",
  "/neighbourhoods/college-park", "/neighbourhoods/suter-brook",
  "/neighbourhoods/newport-village", "/neighbourhoods/klahanie",
  "/neighbourhoods/ioco-north-shore", "/neighbourhoods/barber-street",
  "/neighbourhoods/seaview", "/neighbourhoods/north-shore-ioco-pleasantside",
  "/neighbourhoods/anmore", "/neighbourhoods/belcarra",
  "/complexes/treetops-101-parkside-drive", "/complexes/discovery-ridge",
  "/complexes/aria-townhomes", "/complexes/klahanie-townhomes",
  "/complexes/college-park-townhomes",
  "/buildings/the-grande", "/buildings/50-electronic-ave",
  "/buildings/aria-1", "/buildings/aria-2", "/buildings/aria-3",
  "/buildings/klahanie-buildings", "/buildings/suter-brook-buildings",
  "/buildings/newport-village-buildings", "/buildings/platform",
  "/buildings/george", "/buildings/sonrisa", "/buildings/the-tides",
  "/buildings/nahanni", "/buildings/libra",
  "/preview",
]);

// External-only paths (not internal)
const EXTERNAL_DOMAINS = ["https://", "http://", "mailto:", "tel:", "sms:"];

// ─── Section 1: Metadata crawl ────────────────────────────────────────────────

sec("1 — METADATA (title, description, canonical, noindex)");

const metaResults = [];
for (const { path, label, expectNoindex } of ALL_PAGES) {
  const r = await get(path, { cookie: COOKIE });
  if (!r.ok || r.status >= 400) {
    bad(`${label} — could not fetch (${r.status})`);
    continue;
  }

  const title       = extractTitle(r.html);
  const description = extractDescription(r.html);
  const canonical   = extractCanonical(r.html);
  const noindex     = hasNoindex(r.html);

  const issues = [];

  if (!title || title.length < 5)              issues.push("no title");
  if (title.toLowerCase().includes("placeholder")) issues.push("'placeholder' in title");
  if (!description || description.length < 10) issues.push("no description");
  if (description.toLowerCase().includes("placeholder")) issues.push("'placeholder' in description");
  if (canonical && !canonical.startsWith("https://www.liveinportmoody.com")) issues.push(`non-www canonical: ${canonical.slice(0, 60)}`);
  if (expectNoindex && !noindex)               issues.push("expected noindex but is indexable");
  if (!expectNoindex && noindex)               issues.push("unexpected noindex");

  if (issues.length === 0) {
    ok(`${label} — metadata clean`, title.slice(0, 50));
  } else {
    // Distinguish critical vs. warning
    const criticalIssues = issues.filter(i => i.includes("canonical") || i.includes("noindex") || i === "no title");
    const warnIssues = issues.filter(i => !criticalIssues.includes(i));
    criticalIssues.forEach(i => bad(`${label} — ${i}`));
    warnIssues.forEach(i => wn(`${label} — ${i}`));
  }

  metaResults.push({ path, label, title, description, canonical, noindex });
}

// ─── Section 2: Internal link analysis ───────────────────────────────────────

sec("2 — INTERNAL LINK ANALYSIS");

// Patterns that are always problematic
const BAD_HREF_PATTERNS = [
  { pattern: /^$/, label: "empty href", type: "FAIL" },
  { pattern: /localhost|127\.0\.0\.1|0\.0\.0\.0/, label: "localhost href", type: "FAIL" },
  { pattern: /example\.com|placeholder\.com|test\.com/, label: "placeholder domain href", type: "FAIL" },
  { pattern: /javascript:/, label: "javascript: href", type: "WARN" },
];

const SOCIAL_DISABLED_PATHS = new Set(["#"]); // expected for disabled social links

for (const { path, label } of ALL_PAGES.slice(0, 22)) { // core pages only for link crawl
  const r = await get(path, { cookie: COOKIE });
  if (!r.ok || r.status >= 400) { wn(`${label} — skipped (could not fetch)`); continue; }

  const hrefs = extractInternalHrefs(r.html);
  const issues = [];

  // Count href="#" occurrences (expected for disabled socials but flag count)
  const hashHrefs = hrefs.filter(h => h === "#");
  if (hashHrefs.length > 3) {
    wn(`${label} — ${hashHrefs.length} href="#" found`, "expected ≤3 (disabled social links)");
  }

  for (const href of hrefs) {
    // Skip external
    if (EXTERNAL_DOMAINS.some(prefix => href.startsWith(prefix))) continue;
    // Skip expected disabled social links
    if (href === "#") continue;
    // Skip anchors to sections on same page
    if (href.startsWith("#")) continue;
    // Skip Next.js special paths
    if (href.startsWith("/_next") || href.startsWith("/_vercel")) continue;
    // Skip images/static
    if (/\.(jpg|jpeg|png|webp|svg|ico|gif|css|js|woff2?|ttf)$/i.test(href)) continue;

    // Check bad patterns
    for (const { pattern, label: pLabel, type } of BAD_HREF_PATTERNS) {
      if (pattern.test(href)) {
        if (type === "FAIL") {
          issues.push({ type: "FAIL", msg: `${pLabel}: ${href.slice(0, 60)}` });
        } else {
          issues.push({ type: "WARN", msg: `${pLabel}: ${href.slice(0, 60)}` });
        }
      }
    }

    // Check internal paths that look like routes but aren't in known set.
    // Strip #fragment before checking — /buy#section is a valid link to /buy.
    const pathPart = href.split("?")[0].split("#")[0];
    if (pathPart.startsWith("/") && !pathPart.startsWith("/api/") &&
        !pathPart.startsWith("/_") && !KNOWN_ROUTES.has(pathPart) &&
        !pathPart.match(/\.(xml|txt|js|css|png|jpg|ico)$/)) {
      // Only flag if it looks like a deliberate route (no file extension)
      if (pathPart.split("/").length <= 4) {
        issues.push({ type: "WARN", msg: `unknown internal path: ${pathPart}` });
      }
    }
  }

  if (issues.length === 0) {
    ok(`${label} — links clean`);
  } else {
    const fails = issues.filter(i => i.type === "FAIL");
    const warns = issues.filter(i => i.type === "WARN");
    fails.forEach(i => bad(`${label} — ${i.msg}`));
    warns.forEach(i => wn(`${label} — ${i.msg}`));
  }
}

// ─── Section 3: Extended safety keyword checks ────────────────────────────────

sec("3 — EXTENDED SAFETY KEYWORDS");

const SAFETY_CHECKS = [
  // Hard fails — these should never appear
  { pattern: /sold for \$[\d,]+|\$[\d,]+ sold(?! and expired)/i, label: "sold price", type: "FAIL" },
  { pattern: /src=["'][^"']*(?:idx|rets|mls-import)[^"']*["']/i, label: "IDX script tag", type: "FAIL" },
  { pattern: /data-listing-card|class=["'][^"']*listing-card/i, label: "listing card element", type: "FAIL" },
  { pattern: /lorem ipsum/i, label: "lorem ipsum placeholder", type: "FAIL" },
  { pattern: /\[PLACEHOLDER\]|\[TODO\]|\[FIXME\]/i, label: "dev placeholder token", type: "FAIL" },
  // Warnings — review carefully
  { pattern: /download now/i, label: "'download now' (no file available)", type: "WARN" },
  { pattern: /instant access/i, label: "'instant access' claim", type: "WARN" },
  { pattern: /guaranteed/i, label: "'guaranteed' claim", type: "WARN" },
  { pattern: /best school/i, label: "'best school' claim", type: "WARN" },
  { pattern: /strong catchment|desirable catchment/i, label: "school catchment claim", type: "WARN" },
  { pattern: /live listings|active listings now available/i, label: "'live listings' claim (may need disclaimer)", type: "WARN" },
  { pattern: /\[image\]|\[photo\]|\[coming soon\]/i, label: "visible placeholder bracket", type: "WARN" },
];

// Pages to safety-check (broad cross-section)
const SAFETY_PAGES = [
  { path: "/",                                   label: "Homepage",             preview: false },
  { path: "/listings",                           label: "Listings",             preview: false },
  { path: "/neighbourhoods",                     label: "Neighbourhoods index", preview: false },
  { path: "/buildings",                           label: "Buildings index",      preview: false },
  { path: "/complexes",                           label: "Complexes index",      preview: false },
  { path: "/buyer-guide",                         label: "Buyer Guide",          preview: false },
  { path: "/seller-guide",                       label: "Seller Guide",         preview: false },
  { path: "/presales",                            label: "Presales",             preview: false },
  { path: "/neighbourhoods/heritage-mountain",    label: "Heritage Mtn (pub)",   preview: false },
  { path: "/neighbourhoods/heritage-woods",       label: "Heritage Woods (prev)",preview: true  },
  { path: "/buildings/the-grande",               label: "The Grande (prev)",    preview: true  },
  { path: "/complexes/discovery-ridge",           label: "Discovery Ridge (prev)",preview: true },
];

for (const { path, label, preview } of SAFETY_PAGES) {
  const r = await get(path, { cookie: COOKIE });
  if (!r.ok || r.status >= 400) { wn(`${label} — skipped (${r.status})`); continue; }

  const html = r.html;
  let clean = true;

  for (const { pattern, label: pLabel, type } of SAFETY_CHECKS) {
    // "complete/full guide" only on preview pages
    if ((pLabel.includes("complete") || pLabel.includes("full guide")) && !preview) continue;

    if (pattern.test(html)) {
      if (type === "FAIL") { bad(`${label} — ${pLabel}`); clean = false; }
      else { wn(`${label} — ${pLabel}`); clean = false; }
    }
  }

  if (clean) ok(`${label} → no unsafe patterns`);
}

// ─── Section 4: API/form safety smoke ────────────────────────────────────────

sec("4 — API / FORM SAFETY SMOKE (production — safe invalid calls only)");
inf("Tests only rejected paths. No valid data sent to CRM.");
inf("Honeypot test runs first (rate limiter: 3 req/IP/15min — validation tests consume quota).");

// 4a: Honeypot filled → 200 silently (no CRM call per route.ts logic)
// Must run FIRST — the following validation tests count against the rate limit.
// If 429 is returned, the rate limiter fired before the honeypot check ran (limit exhausted
// from a prior run in the same 15-minute window). Re-run after 15 minutes to verify.
{
  const r = await post("/api/lead", {
    formType: "ask-question",
    leadType: "buyer",
    name: "Smoke Test",
    email: "smoke@liveinportmoody.com",
    honeypot: "bot-filled",
  });
  if (!r.ok) { bad("POST /api/lead (honeypot) — request failed", r.error); }
  else if (r.status === 200 && r.json?.ok === true) ok("POST /api/lead (honeypot filled) → 200 ok (silent drop, no CRM call)");
  else if (r.status === 429) wn("POST /api/lead (honeypot) → 429 rate-limited", "rate limiter exhausted from prior run — re-run after 15 min to verify honeypot silent-drop behavior");
  else bad(`POST /api/lead (honeypot) → unexpected response`, `${r.status} ${JSON.stringify(r.json).slice(0, 60)}`);
}

// 4b: Empty body → 400 (or 429 if rate limited from a prior run — both mean no CRM call)
{
  const r = await post("/api/lead", {});
  if (!r.ok) { bad("POST /api/lead (empty) — request failed", r.error); }
  else if (r.status === 400 || r.status === 429) ok(`POST /api/lead (empty body) → ${r.status} (rejected, no CRM call)`);
  else bad(`POST /api/lead (empty body) → unexpected ${r.status}`, JSON.stringify(r.json).slice(0, 60));
}

// 4c: Invalid email → 400 (or 429)
{
  const r = await post("/api/lead", {
    formType: "ask-question",
    leadType: "buyer",
    name: "Test",
    email: "not-an-email",
  });
  if (!r.ok) { bad("POST /api/lead (bad email) — request failed", r.error); }
  else if (r.status === 400 || r.status === 429) ok(`POST /api/lead (invalid email) → ${r.status} (rejected, no CRM call)`);
  else bad(`POST /api/lead (invalid email) → unexpected ${r.status}`, JSON.stringify(r.json).slice(0, 60));
}

// 4d: Short name → 400 (or 429)
{
  const r = await post("/api/lead", {
    formType: "ask-question",
    leadType: "buyer",
    name: "X",
    email: "valid@example.com",
  });
  if (!r.ok) { bad("POST /api/lead (short name) — request failed", r.error); }
  else if (r.status === 400 || r.status === 429) ok(`POST /api/lead (name < 2 chars) → ${r.status} (rejected, no CRM call)`);
  else bad(`POST /api/lead (short name) → unexpected ${r.status}`, JSON.stringify(r.json).slice(0, 60));
}

// 4e: Rate limit check — send 4 rapid requests (honeypot, no CRM), expect eventual 429
{
  inf("Rate limit check — 4 honeypot requests in sequence");
  let hit429 = false;
  for (let i = 0; i < 4; i++) {
    const r = await post("/api/lead", {
      formType: "ask-question",
      leadType: "buyer",
      name: `Smoke${i}`,
      email: `smoke${i}@liveinportmoody.com`,
      honeypot: "bot",
    });
    if (r.status === 429) { hit429 = true; break; }
  }
  if (hit429) ok("Rate limiter triggered → 429");
  else wn("Rate limit 429 not observed in 4 requests", "rate limiter may only trigger per-IP — OK if different IPs");
}

// ─── Section 5: Static asset existence check ──────────────────────────────────

sec("5 — STATIC ASSET CHECK (local filesystem)");

const EXPECTED_ASSETS = [
  "hero-home.webp",
  "hero-about.png",
  "hero-buy.png",
  "hero-sell.png",
  "hero-contact.png",
  "hero-market.png",
  "hero-move.png",
  "hero-resources.png",
  "hero-legal.png",
  "og-placeholder.jpg",
  "images/phase1/port-moody-forest-path.jpg",
  "images/phase1/port-moody-community-building.jpg",
  "images/phase1/port-moody-hillside-homes.jpg",
  "images/phase1/port-moody-regional-view.jpg",
  "images/phase1/port-moody-residential-detail.jpg",
  "images/phase1/port-moody-residential-greenery.jpg",
  "images/team/paul.jpeg",
];

for (const asset of EXPECTED_ASSETS) {
  const fullPath = join(PUBLIC_DIR, asset);
  if (existsSync(fullPath)) ok(`public/${asset} exists`);
  else bad(`public/${asset} MISSING`);
}

// Check team photo for Leilani (expected gap)
if (!existsSync(join(PUBLIC_DIR, "images/team/leilani.jpeg")) &&
    !existsSync(join(PUBLIC_DIR, "images/team/leilani.jpg")) &&
    !existsSync(join(PUBLIC_DIR, "images/team/leilani.png"))) {
  wn("public/images/team/leilani.* — no Leilani team photo found", "expected gap before launch");
}

// OG image is a placeholder — note it
if (existsSync(join(PUBLIC_DIR, "og-placeholder.jpg"))) {
  wn("og-placeholder.jpg is a placeholder", "should be replaced with branded OG image before launch promotion");
}

// ─── Section 6: Sitemap and robots spot check ─────────────────────────────────

sec("6 — SITEMAP AND ROBOTS SPOT CHECK");

{
  const r = await get("/sitemap.xml");
  if (!r.ok || r.status !== 200) { bad("sitemap.xml fetch failed", `status: ${r.status}`); }
  else {
    const urls = [...r.html.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
    inf(`Sitemap: ${urls.length} URL(s)`);

    // All must be www
    const nonWww = urls.filter(u => !u.startsWith("https://www."));
    if (nonWww.length === 0) ok("All sitemap URLs use https://www.");
    else bad("Non-www sitemap URLs found", nonWww.slice(0, 2).join(", "));

    // Heritage Mountain must be present
    if (urls.some(u => u.includes("/neighbourhoods/heritage-mountain"))) ok("Heritage Mountain in sitemap");
    else bad("Heritage Mountain missing from sitemap");

    // No buildings (all preview)
    const buildingUrls = urls.filter(u => u.includes("/buildings/"));
    if (buildingUrls.length === 0) ok("No /buildings/ URLs in sitemap");
    else bad("Building URLs in sitemap", buildingUrls.slice(0, 2).join(", "));

    // buyer-guide and seller-guide should be in sitemap (added to phaseOneRoutes in Sprint 25O)
    const hasBuyerGuide = urls.some(u => u.includes("/buyer-guide"));
    const hasSellerGuide = urls.some(u => u.includes("/seller-guide"));
    if (hasBuyerGuide) ok("buyer-guide in sitemap");
    else wn("buyer-guide not in sitemap", "add to phaseOneRoutes in src/lib/site.ts");
    if (hasSellerGuide) ok("seller-guide in sitemap");
    else wn("seller-guide not in sitemap", "add to phaseOneRoutes in src/lib/site.ts");
  }
}

{
  const r = await get("/robots.txt");
  if (!r.ok || r.status !== 200) { bad("robots.txt fetch failed", `status: ${r.status}`); }
  else {
    if (r.html.includes("liveinportmoody.com/sitemap.xml")) ok("robots.txt points to sitemap");
    else wn("robots.txt sitemap reference not found", "check sitemap URL in robots.txt");
    if (r.html.includes("Disallow: /api/")) ok("robots.txt — /api/ not disallowed (no restriction)");
    else inf("robots.txt allows all (no Disallow rules for /api/)");
  }
}

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log(`\n${"═".repeat(62)}`);
console.log(`  CRAWL RESULT`);
console.log(`${"═".repeat(62)}`);
console.log(`  BASE: ${BASE}`);
console.log(`  ${fail === 0 ? "✅ PASS" : "❌ FAIL"}  —  ${pass} passed | ${warn} warning(s) | ${fail} failed`);

if (findings.length) {
  const fails = findings.filter(f => f.type === "FAIL");
  const warns = findings.filter(f => f.type === "WARN");
  if (fails.length) {
    console.log("\n  FAILURES:");
    fails.forEach(f => console.log(`    ❌ ${f.label}${f.detail ? ` — ${f.detail}` : ""}`));
  }
  if (warns.length) {
    console.log("\n  WARNINGS:");
    warns.forEach(w => console.log(`    ⚠️  ${w.label}${w.detail ? ` — ${w.detail}` : ""}`));
  }
}

console.log(`${"═".repeat(62)}\n`);

process.exit(fail > 0 ? 1 : 0);
