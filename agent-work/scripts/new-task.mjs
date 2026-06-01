#!/usr/bin/env node
/**
 * new-task.mjs — Create a new task file from a template.
 *
 * Usage:
 *   npm run agent:new -- --agent A1 --sprint S28B --type code --title "Fix mobile nav"
 *
 * Types: code | deploy | qa | screenshot | visual-review | siteops
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = join(__dir, "..", "..");
const AGENT_WORK = join(ROOT, "agent-work");

function arg(flag) {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : null;
}

const agent  = arg("--agent");
const sprint = arg("--sprint");
const type   = arg("--type");
const title  = arg("--title");

if (!agent || !sprint || !type || !title) {
  console.error("Usage: npm run agent:new -- --agent A1 --sprint S28B --type code --title \"My task\"");
  console.error("Types: code | deploy | qa | screenshot | visual-review | siteops");
  process.exit(1);
}

const TYPE_MAP = {
  "code":           "code-sprint.md",
  "deploy":         "deploy-sprint.md",
  "qa":             "qa-sprint.md",
  "screenshot":     "screenshot-sprint.md",
  "visual-review":  "visual-review-sprint.md",
  "siteops":        "siteops-sprint.md",
};

const templateFile = TYPE_MAP[type];
if (!templateFile) {
  console.error(`Unknown type "${type}". Valid: ${Object.keys(TYPE_MAP).join(" | ")}`);
  process.exit(1);
}

const templatePath = join(AGENT_WORK, "templates", templateFile);
if (!existsSync(templatePath)) {
  console.error(`Template not found: ${templatePath}`);
  process.exit(1);
}

// Slugify the title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

const filename = `${agent}-${sprint}-${slug}.md`;
const outPath  = join(AGENT_WORK, "backlog", filename);

if (existsSync(outPath)) {
  console.error(`Task already exists: ${outPath}`);
  process.exit(1);
}

let content = readFileSync(templatePath, "utf8");

// Inject agent and sprint into the template header
content = content.replace(
  /^AGENT:\n<!-- .+ -->/m,
  `AGENT:\n${agent}`
);
content = content.replace(
  /^SPRINT:\n<!-- .+ -->/m,
  `SPRINT:\n${sprint}`
);

// Prepend title comment
content = `<!-- Title: ${title} -->\n\n${content}`;

writeFileSync(outPath, content, "utf8");
console.log(`✅ Created: agent-work/backlog/${filename}`);
