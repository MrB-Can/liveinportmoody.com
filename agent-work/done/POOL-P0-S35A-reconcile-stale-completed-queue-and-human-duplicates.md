TASK:
POOL-P0-S35A — Reconcile Stale Completed Queue and Human Duplicates

TASK_TYPE:
queue-cleanup

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Fix the agent queue state. Reports show S33L and S33K are completed, but the queue still shows S33L active and S33K blocked. Also consolidate duplicate human sitemap tasks.

CURRENT STATUS PROBLEM:
- ACTIVE: POOL-P2-S33L-accessibility-nav-consent-polish.md
- BLOCKED: POOL-P2-S33K-optimize-large-hero-images.md
- BOTH have completed reports uploaded.
- Backlog has duplicate sitemap/indexing human tasks:
  - HUMAN-P0-S33A-submit-sitemap-and-indexing.md
  - HUMAN-P1-S31A-search-indexing-submission.md

DO NOT:
- edit src/**
- deploy
- change production
- delete reports
- modify human proof/content tasks except duplicate sitemap cleanup

ALLOWED FILES:
- agent-work/active/**
- agent-work/blocked/**
- agent-work/backlog/**
- agent-work/done/**
- agent-work/reports/POOL-P0-S35A-reconcile-stale-completed-queue-and-human-duplicates-report.md
- docs/current-launch-blockers.md

TASKS:
1. Move this task to active.
2. Inspect:
   - agent-work/active/POOL-P2-S33L-accessibility-nav-consent-polish.md
   - agent-work/blocked/POOL-P2-S33K-optimize-large-hero-images.md
   - agent-work/reports/POOL-P2-S33L-accessibility-nav-consent-polish-report.md
   - agent-work/reports/POOL-P2-S33K-optimize-large-hero-images-report.md
3. If completed reports exist and matching code commits are present, move:
   - S33L active -> done
   - S33K blocked -> done
4. Preserve the human/legal consent decision as a separate human task if not already present.
5. Consolidate duplicate sitemap tasks:
   - Keep HUMAN-P0-S33A-submit-sitemap-and-indexing.md
   - Move HUMAN-P1-S31A-search-indexing-submission.md to done as superseded, or block only if your queue convention requires.
6. Update docs/current-launch-blockers.md:
   - launch blockers: none
   - human actions remaining:
     - sitemap/indexing
     - contact consent legal decision
     - proof/photo/content collection
7. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short
8. Write report.
9. Move this task to done.
10. Commit scoped agent-work/docs changes only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
QUEUE ITEMS RECONCILED:
- item / previous state / new state / reason
DUPLICATES RESOLVED:
- item / action
HUMAN TASKS REMAINING:
- item
LAUNCH BLOCKERS:
- none or list
QUEUE STATUS AFTER:
- backlog:
- active:
- blocked:
- done:
COMMIT:
