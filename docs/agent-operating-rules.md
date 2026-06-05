# Agent Operating Rules

These rules ensure autonomous agents and the task queue remain consistent and trustworthy.

## Core Queue Rules

1. **Do not work outside the task system.** Do not do any task work unless the task file is physically located in `agent-work/active`.

2. **Claim before working.** Move exactly one task from `agent-work/backlog` to `agent-work/active` before beginning work on that task.

3. **Run conflict check immediately.** After moving a task to active, run:
   ```
   npm run agent:conflicts
   ```
   Do not proceed if conflicts are reported.

4. **Do not reuse stale context.** Do not work from old prompts, prior conversations, or cached memory. Re-read the task file from active every time.

5. **Commit and push scoped files only.** Use explicit `git add <files>` for each file modified. Never use `git add .` or `git add -A`. Push after every commit.

## Task Work Rules

- **Do not edit src/** in queue-cleanup or reconciliation tasks.
- **Do not deploy** in queue-cleanup, reconciliation, or report-only tasks.
- **Do not move HUMAN tasks** under any circumstances. HUMAN tasks remain in backlog until completed by the owner.
- Deploy after every task that changes public code, content, or assets (src/, public/).
- Do not deploy for docs-only, report-only, or screenshot-only tasks.

## Screenshot and Visual Tasks

- Screenshot tasks must fail if pages are obviously broken, blank, unstyled, or captured from the wrong base URL.
- Generated images are **not allowed** under any circumstances.
- Downloaded, licensed, or owner-approved images **are allowed**.
- Icon libraries (lucide-react, etc.) **are allowed**.
- Plain bordered text-card grids do not count as graphics and do not require image assets.

## Content and Quality Rules

- Public internal/workboard language (task references, agent notes, work status) is a P0 bug. Do not commit or deploy with this language visible.
- Do not invent content: reviews, awards, businesses, events, listings, school claims, stats, or rankings.
- Do not claim supported facts without verification.
- Editorial tone and brand voice must be maintained across all changes.

## Operating Principles

- Queue state is the source of truth. If a task is not in active, do not work on it.
- If something is unclear, block the task with a specific reason instead of guessing.
- Validate code after every change: lint → build → smoke tests → crawl tests.
- Move completed tasks to done with a completion marker file.
- Maintain clear separation between active work, backlog, blocked, and done.

---

**Last updated:** 2026-06-05  
**Enforced by:** POOL-P0-S41A
