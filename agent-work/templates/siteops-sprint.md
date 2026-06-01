AGENT:
<!-- e.g. Agent 1 — Site Ops tasks should only run on trusted agents -->

SPRINT:
<!-- e.g. LIPM-A1-S28B-SITEOPS-001 -->

GOAL:
<!-- What operational change is needed and why. -->

SCOPE:
<!-- Specific infra concern: env vars, Vercel config, middleware, robots, sitemap, etc. -->

ALLOWED FILES:
<!-- Be explicit. Site Ops tasks have a short allowed list. -->
- next.config.ts (if config change)
- src/middleware.ts (if middleware change — MUST be reviewed before commit)
- src/app/robots.ts (if robots change)
- src/app/sitemap.ts (if sitemap change)
- .vercelignore (if upload exclusion change)
- package.json (if script change only)

FORBIDDEN FILES:
- .env* (never edit secrets in code)
- src/app/coming-soon/ (do not touch gate logic)
- All product content pages

DO NOT:
- expose secrets
- remove coming-soon mode
- remove preview cookie logic
- disable noindex on preview routes
- run destructive git operations
- force push

PHASES:
1. Read current state of affected files
2. Describe the change and rationale
3. Make the targeted change
4. Run npm run lint
5. Run npm run build
6. Run npm run smoke:prelaunch
7. Commit scoped files
8. If deployment is authorized: vercel --prod, then post-deploy spot-check
9. Write report to agent-work/reports/

VALIDATION:
- npm run lint → must pass
- npm run build → must pass
- npm run smoke:prelaunch → must pass

COMMIT RULES:
- Stage only ALLOWED FILES
- Message format: SiteOps {SPRINT}: {short description}

DEPLOYMENT:
<!-- allowed — production | not allowed -->
not allowed

FINAL REPORT FORMAT:
See agent-work/templates/agent-report.md
