#!/usr/bin/env node
/**
 * check-conflicts.mjs — Warn about file overlap between active tasks.
 *
 * Usage:
 *   npm run agent:conflicts
 */

import { readdirSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ACTIVE_DIR = join(__dir, "..", "active");

if (!existsSync(ACTIVE_DIR)) {
  console.log("No active/ directory found.");
  process.exit(0);
}

const files = readdirSync(ACTIVE_DIR).filter((f) => f.endsWith(".md"));

if (files.length === 0) {
  console.log("No active tasks — no conflicts possible.\n");
  process.exit(0);
}

// Parse ALLOWED FILES and FORBIDDEN FILES sections from a task file
function parseSection(content, header) {
  const lines = content.split("\n");
  const results = [];
  let inSection = false;
  for (const line of lines) {
    if (line.trim().startsWith(header)) {
      inSection = true;
      continue;
    }
    if (inSection) {
      // Stop at next all-caps section header or empty heading line
      if (/^[A-Z][A-Z\s/:]+:/.test(line.trim()) && line.trim() !== "") {
        break;
      }
      const item = line.trim().replace(/^-\s*/, "").trim();
      if (item && !item.startsWith("<!--")) {
        results.push(item);
      }
    }
  }
  return results;
}

const tasks = files.map((f) => {
  const content = readFileSync(join(ACTIVE_DIR, f), "utf8");
  return {
    file: f,
    allowed:   parseSection(content, "ALLOWED FILES:"),
    forbidden: parseSection(content, "FORBIDDEN FILES:"),
  };
});

let conflicts = 0;

console.log(`\n══════════════════════════════════════════════`);
console.log(`  CONFLICT CHECK — ${files.length} active task(s)`);
console.log(`══════════════════════════════════════════════`);

for (let i = 0; i < tasks.length; i++) {
  for (let j = i + 1; j < tasks.length; j++) {
    const a = tasks[i];
    const b = tasks[j];

    // Warn if both tasks allow the same file
    for (const file of a.allowed) {
      if (b.allowed.includes(file)) {
        console.log(`\n  ⚠️  OVERLAP — same file allowed by two active tasks:`);
        console.log(`     File   : ${file}`);
        console.log(`     Task A : ${a.file}`);
        console.log(`     Task B : ${b.file}`);
        conflicts++;
      }
    }

    // Warn if task A allows a file that task B forbids
    for (const file of a.allowed) {
      if (b.forbidden.includes(file)) {
        console.log(`\n  ⚠️  CONFLICT — A's allowed file is B's forbidden file:`);
        console.log(`     File      : ${file}`);
        console.log(`     Allows it : ${a.file}`);
        console.log(`     Forbids it: ${b.file}`);
        conflicts++;
      }
    }

    // Warn if task B allows a file that task A forbids
    for (const file of b.allowed) {
      if (a.forbidden.includes(file)) {
        console.log(`\n  ⚠️  CONFLICT — B's allowed file is A's forbidden file:`);
        console.log(`     File      : ${file}`);
        console.log(`     Allows it : ${b.file}`);
        console.log(`     Forbids it: ${a.file}`);
        conflicts++;
      }
    }
  }
}

if (conflicts === 0) {
  console.log(`\n  ✅ No file conflicts found between active tasks.\n`);
} else {
  console.log(`\n  ${conflicts} conflict(s) found. Resolve before proceeding.\n`);
}
