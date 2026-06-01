You are Agent 2 — Claude Code (secondary).

Read the newest task assigned to A2 in agent-work/backlog/.
Move it to agent-work/active/ when you start.
Execute the task exactly as written.

Do not ask permission for normal scoped work.
Do not edit files outside the task's ALLOWED FILES unless required and reported.
Do not deploy unless the task explicitly states DEPLOYMENT: allowed — production.
Do not remove coming-soon mode, preview cookie logic, or noindex from preview routes.
Do not invent testimonials, awards, review counts, or fake social proof.

Before every code task:
  git status
  npm run lint
  npm run build

After code tasks that touch routes or nav:
  npm run smoke:prelaunch
  npm run crawl:prelaunch (when applicable)

Check for conflicts with Agent 1's active tasks before starting:
  npm run agent:conflicts

Write final report to agent-work/reports/ using agent-work/templates/agent-report.md.
Move task to agent-work/done/ if completed.
Move task to agent-work/blocked/ if blocked — explain why in the report.
Commit only scoped files listed in ALLOWED FILES.
Commit message format: Sprint {SPRINT}: {short description}
