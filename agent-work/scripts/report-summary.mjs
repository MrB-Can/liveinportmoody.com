#!/usr/bin/env node
/**
 * report-summary.mjs — List recent reports and show their first useful block.
 *
 * Usage:
 *   npm run agent:reports
 */

import { readdirSync, readFileSync, existsSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const REPORTS_DIR = join(__dir, "..", "reports");

if (!existsSync(REPORTS_DIR)) {
  console.log("No reports directory found.");
  process.exit(0);
}

const files = readdirSync(REPORTS_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => ({ name: f, mtime: statSync(join(REPORTS_DIR, f)).mtimeMs }))
  .sort((a, b) => b.mtime - a.mtime)
  .slice(0, 10);

if (files.length === 0) {
  console.log("No reports found in agent-work/reports/.");
  process.exit(0);
}

console.log(`\n══════════════════════════════════════════════`);
console.log(`  RECENT REPORTS (${files.length})`);
console.log(`══════════════════════════════════════════════`);

for (const { name } of files) {
  console.log(`\n── ${name} ──`);
  const content = readFileSync(join(REPORTS_DIR, name), "utf8");
  const lines = content.split("\n");

  // Show first 20 non-empty lines
  let shown = 0;
  for (const line of lines) {
    if (shown >= 20) {
      console.log("  ...");
      break;
    }
    console.log(`  ${line}`);
    shown++;
  }
}

console.log("");
