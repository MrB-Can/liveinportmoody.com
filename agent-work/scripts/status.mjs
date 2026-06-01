#!/usr/bin/env node
/**
 * status.mjs — Print task counts and list active/blocked tasks.
 *
 * Usage:
 *   npm run agent:status
 */

import { readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const AGENT_WORK = join(__dir, "..");

function listDir(folder) {
  const p = join(AGENT_WORK, folder);
  if (!existsSync(p)) return [];
  return readdirSync(p).filter((f) => f.endsWith(".md") && f !== "README.md");
}

const backlog  = listDir("backlog");
const active   = listDir("active");
const blocked  = listDir("blocked");
const done     = listDir("done");
const reports  = listDir("reports");

console.log(`
══════════════════════════════════════════════
  AGENT WORK — STATUS
══════════════════════════════════════════════
  Backlog  : ${backlog.length}
  Active   : ${active.length}
  Blocked  : ${blocked.length}
  Done     : ${done.length}
  Reports  : ${reports.length}
══════════════════════════════════════════════`);

if (active.length > 0) {
  console.log("\n  ACTIVE:");
  active.forEach((f) => console.log(`    • ${f}`));
}

if (blocked.length > 0) {
  console.log("\n  BLOCKED:");
  blocked.forEach((f) => console.log(`    ⚠️  ${f}`));
}

if (backlog.length > 0) {
  console.log("\n  BACKLOG:");
  backlog.forEach((f) => console.log(`    – ${f}`));
}

console.log("");
