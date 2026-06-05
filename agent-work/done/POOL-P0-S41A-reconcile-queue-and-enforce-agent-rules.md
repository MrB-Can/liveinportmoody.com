TASK:
POOL-P0-S41A — Reconcile Queue and Enforce Agent Rules

TASK_TYPE:
queue-cleanup

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Reconcile the agent queue after multiple agents worked while only one task showed active. Establish hard operating rules so no agent works outside the queue again.

AUTONOMOUS AGENT OPERATING RULES:
1. Do not do any task work unless this task file is physically in agent-work/active.
2. Move exactly one task from backlog to active before doing work.
3. Run npm run agent:conflicts immediately after claiming.
4. Do not work from old prompts or memory.
5. Do not edit src/** in this task.
6. Do not deploy in this task.
7. Do not move HUMAN tasks.
8. Commit and push only scoped queue/docs/report files.
9. If anything is unclear, block the task with a specific reason instead of guessing.

CONTEXT:
The queue showed one active task while multiple agents were reportedly working. This means some work may have been done outside the task system. The queue must be made trustworthy again before more visual or code work continues.

DO NOT:
- edit src/**
- deploy
- run screenshots
- start visual/icon/content work
- move human tasks
- delete reports
- delete done history

ALLOWED FILES:
- agent-work/backlog/**
- agent-work/active/**
- agent-work/blocked/**
- agent-work/done/**
- agent-work/reports/POOL-P0-S41A-reconcile-queue-and-enforce-agent-rules-report.md
- docs/agent-operating-rules.md
- docs/s41-queue-reconciliation.md

TASKS:
1. Move this task to active.

2. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short
   git log --oneline -12
   find agent-work/active -maxdepth 1 -type f -name "*.md" -print
   find agent-work/backlog -maxdepth 1 -type f -name "*.md" -print
   find agent-work/done -maxdepth 1 -type f -name "*S39*" -print
   find agent-work/reports -maxdepth 1 -type f -name "*S39*" -print

3. Identify current status of:
   - S36E
   - S36G
   - S36H
   - S36I
   - S37B
   - S38A
   - S39A
   - S39B
   - S39C
   - S39D

4. Reconcile stale queue state:
   - If a task has a completed report and matching done file, leave it done.
   - If a task is in backlog but was clearly superseded, move it to done with a superseded note.
   - If a task is active but no work is in progress, move it to backlog or blocked with explanation.
   - If a task has unmet wait conditions, move it to blocked with explanation.
   - Do not move HUMAN tasks.

5. Create or update docs/agent-operating-rules.md with these rules:
   - No task work unless the task file is physically in agent-work/active.
   - Move task to active before editing.
   - Run conflict check after claiming.
   - Commit scoped files only. Never use git add .
   - Push after every commit.
   - Deploy after every code/content/public asset task that changes production.
   - Do not deploy docs-only, report-only, or screenshot-only tasks.
   - Screenshot tasks must fail if pages are obviously broken, blank, unstyled, or captured from the wrong base URL.
   - Public internal/workboard language is a P0 bug.
   - Generated images are not allowed.
   - Downloaded/licensed/owner-approved images are allowed.
   - Icon libraries are allowed.
   - Plain bordered text-card grids do not count as graphics.

6. Create docs/s41-queue-reconciliation.md summarizing:
   - queue before
   - queue after
   - stale tasks moved
   - suspicious state
   - remaining claimable tasks
   - remaining human tasks

7. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short

8. Write report:
   agent-work/reports/POOL-P0-S41A-reconcile-queue-and-enforce-agent-rules-report.md

9. Move this task to done.

10. Commit and push scoped queue/docs/report files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

QUEUE BEFORE:
- backlog:
- active:
- blocked:
- done:

QUEUE AFTER:
- backlog:
- active:
- blocked:
- done:

TASKS RECONCILED:
- task / previous state / new state / reason

STALE OR SUPERSEDED TASKS:
- task / action / reason

HUMAN TASKS LEFT:
- item

AGENT RULES CREATED:
- yes/no

GIT STATUS:
- clean yes/no
- uncommitted files:

COMMIT:
PUSH:
