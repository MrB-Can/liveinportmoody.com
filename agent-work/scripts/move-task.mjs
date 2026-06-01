#!/usr/bin/env node
/**
 * move-task.mjs — Move a task file between workflow folders.
 *
 * Usage:
 *   npm run agent:move -- --task A1-S28B-fix-mobile-nav.md --to active
 *
 * Valid destinations: backlog | active | done | blocked
 */

import { readdirSync, renameSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const AGENT_WORK = join(__dir, "..");

const VALID_FOLDERS = ["backlog", "active", "done", "blocked"];

function arg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const taskName = arg("--task");
const dest     = arg("--to");

if (!taskName || !dest) {
  console.error("Usage: npm run agent:move -- --task <filename.md> --to <backlog|active|done|blocked>");
  process.exit(1);
}

if (!VALID_FOLDERS.includes(dest)) {
  console.error(`Invalid destination "${dest}". Valid: ${VALID_FOLDERS.join(" | ")}`);
  process.exit(1);
}

// Find the task in any valid source folder
let sourcePath = null;
let sourceFolder = null;

for (const folder of VALID_FOLDERS) {
  const candidate = join(AGENT_WORK, folder, taskName);
  if (existsSync(candidate)) {
    sourcePath   = candidate;
    sourceFolder = folder;
    break;
  }
}

if (!sourcePath) {
  console.error(`Task "${taskName}" not found in any of: ${VALID_FOLDERS.join(", ")}`);
  process.exit(1);
}

if (sourceFolder === dest) {
  console.log(`Task is already in ${dest}/. Nothing to do.`);
  process.exit(0);
}

const destPath = join(AGENT_WORK, dest, taskName);
renameSync(sourcePath, destPath);

console.log(`✅ Moved: ${sourceFolder}/${taskName} → ${dest}/${taskName}`);
