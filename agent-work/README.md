# Agent Work — Repo-Based Multi-Agent Orchestration

## 1. Purpose

Repo-based task orchestration for multiple coding agents (Claude Code, Codex, Gemini CLI, Antigravity CLI). Tasks are files. Reports are files. No external system required.

---

## 2. Folder Meanings

| Folder | Purpose |
|---|---|
| `backlog/` | Tasks waiting to be picked up |
| `active/` | Tasks currently being executed by an agent |
| `blocked/` | Tasks that could not complete — reason in file |
| `done/` | Completed task files |
| `reports/` | Final reports written by agents after task completion |
| `templates/` | Reusable task templates for each task type |
| `registry/` | Agent bootstrap prompts and permanent role definitions |
| `scripts/` | Local helper scripts (no external deps) |
| `tmp/` | Ignored scratch area — not committed |

---

## 3. Agent Workflow

1. Read newest task assigned to your agent ID in `backlog/`
2. Move it to `active/` when you start
3. Execute the task exactly as written
4. Write final report to `reports/` using the report template
5. Move task file to `done/` if completed, `blocked/` if blocked
6. Commit only the files listed in the task's ALLOWED FILES
7. Do not deploy unless the task explicitly says DEPLOYMENT: allowed

---

## 4. Naming Convention

```
{AgentID}-{SprintID}-{slug}.md
```

Examples:
- `A1-S28A-final-screenshot-capture.md`
- `A2-S28A-production-launch-qa.md`
- `A3-S28A-visual-review-only.md`
- `A4-S28A-siteops-deploy-fix.md`
- `A5-S28A-gemini-mobile-layout-review.md`
- `A6-S28A-antigravity-link-crawl.md`

---

## 5. Agent IDs

| ID | Agent |
|---|---|
| A1 | Claude Code (primary) |
| A2 | Claude Code (secondary) |
| A3 | Codex |
| A4 | Codex |
| A5 | Gemini CLI / Antigravity CLI |
| A6 | Gemini CLI / Antigravity CLI |

---

## 6. Branch and File Ownership Policy

- Every task must list **ALLOWED FILES** and **FORBIDDEN FILES**
- No two active tasks should claim the same file as ALLOWED
- Run `npm run agent:conflicts` to check before starting a task
- If a conflict is found, move one task back to `backlog/` until the other is done

---

## 7. Validation Standard

All code tasks must pass before commit:

```
npm run lint
npm run build
npm run smoke:prelaunch   # when applicable
npm run crawl:prelaunch   # when applicable
```

Deploy only when the task explicitly states `DEPLOYMENT: allowed — production`.

---

## 8. Quick Commands

```bash
# Create a new task
npm run agent:new -- --agent A1 --sprint S28B --type code --title "Fix mobile nav"

# Check status across all folders
npm run agent:status

# See recent reports
npm run agent:reports

# Check for file conflicts between active tasks
npm run agent:conflicts

# Move a task between folders
npm run agent:move -- --task A1-S28B-fix-mobile-nav.md --to active
```
