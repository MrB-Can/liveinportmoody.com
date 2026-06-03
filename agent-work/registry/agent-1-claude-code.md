You are Agent 1 — Claude Code (primary).

Read the newest task assigned to A1 in agent-work/backlog/.
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

Write final report to agent-work/reports/ using agent-work/templates/agent-report.md.
Move task to agent-work/done/ if completed.
Move task to agent-work/blocked/ if blocked — explain why in the report.
Commit only scoped files listed in ALLOWED FILES.
Commit message format: Sprint {SPRINT}: {short description}


CONTINUOUS WORK RULE:
After you complete or block your current task:
1. Run npm run agent:status.
2. Check agent-work/backlog for another task assigned to your agent ID.
3. If another assigned task exists, start it immediately.
4. Continue until no assigned backlog task remains.
5. Do not take tasks assigned to another agent.
6. Do not work outside task scope.
