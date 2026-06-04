#!/usr/bin/env node
/**
 * Scans src/, data/, and public/ for phrases forbidden on public pages.
 * Exit 0 = clean. Exit 1 = violations found.
 *
 * Patterns target rendered-text blockers only — not code identifiers or
 * status values. See docs/public-copy-hardening-notes.md for full rationale.
 */

import { readdir, readFile } from "fs/promises";
import { join, relative } from "path";

const ROOT = new URL("..", import.meta.url).pathname;

const RULES = [
  // Match staging captions/labels that should never be rendered publicly
  { pattern: /photos?\s+needed/i, skipPaths: [] },
  { pattern: /future\s+photo/i, skipPaths: [] },
  { pattern: /photo\s+set/i, skipPaths: [] },
  { pattern: /Replace\s+with\s+a\s+professional/i, skipPaths: [] },
  { pattern: /owner-approved\s+photography/i, skipPaths: [] },
  // "Future additions" as a visible pin label (was in BuildingMapPlaceholder)
  { pattern: /Future\s+additions/i, skipPaths: [] },
  // "Planned labels:" workboard annotation (was in neighbourhood map)
  { pattern: /Planned\s+labels:/i, skipPaths: [] },
  // coming-soon as rendered user-visible text (not as a route/status identifier)
  // Skip data files, middleware, and newsletter where it's used as a status value/route
  {
    pattern: /\bcoming[- ]soon\b/i,
    skipPaths: [
      "src/data/",
      "src/middleware.ts",
      "src/components/newsletter-signup.tsx",
      "src/app/coming-soon/",
    ],
    // Also skip lines that are pure code (not JSX text content)
    skipLinePatterns: [/^\s*\/\//, /=\s*["']coming-soon["']/, /guideStatus/, /pathname/],
  },
];

// File extensions to scan
const EXTENSIONS = new Set([".tsx", ".ts", ".jsx", ".js", ".json", ".md", ".mdx", ".html"]);

// Directories to scan
const SCAN_DIRS = ["src", "data", "public"];

// Global paths to always skip
const GLOBAL_SKIP = [
  "scripts/",
  "agent-work/",
  "docs/",
  ".next/",
  "node_modules/",
  "visual-review-screenshots/",
];

async function walk(dir, results = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const rel = relative(ROOT, fullPath);
    if (GLOBAL_SKIP.some((skip) => rel.startsWith(skip))) continue;
    if (entry.isDirectory()) {
      await walk(fullPath, results);
    } else if (entry.isFile()) {
      const ext = entry.name.slice(entry.name.lastIndexOf("."));
      if (EXTENSIONS.has(ext)) results.push({ fullPath, rel });
    }
  }
  return results;
}

let violations = 0;

const files = [];
for (const dir of SCAN_DIRS) {
  await walk(join(ROOT, dir), files);
}

for (const { fullPath, rel } of files) {
  const content = await readFile(fullPath, "utf8");
  const lines = content.split("\n");

  for (const rule of RULES) {
    // Skip this file entirely for this rule if it matches a rule-level skip path
    if (rule.skipPaths && rule.skipPaths.some((skip) => rel.startsWith(skip))) continue;

    for (let i = 0; i < lines.length; i++) {
      if (!rule.pattern.test(lines[i])) continue;

      // Skip lines matching line-level exclusion patterns
      if (rule.skipLinePatterns && rule.skipLinePatterns.some((lp) => lp.test(lines[i]))) continue;

      console.error(`VIOLATION  ${rel}:${i + 1}  — matched ${rule.pattern}`);
      console.error(`           ${lines[i].trim()}`);
      violations++;
    }
  }
}

if (violations === 0) {
  console.log("✅ Clean — no denylist violations found");
  process.exit(0);
} else {
  console.error(`\n❌ ${violations} violation(s) found`);
  process.exit(1);
}
