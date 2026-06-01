AGENT:
<!-- Agent ID and type -->

SPRINT:
<!-- Sprint ID -->

STATUS:
<!-- Completed | Partially completed | Blocked -->

COMMIT:
<!-- git hash or "none" -->

DEPLOYED:
<!-- yes — production | no -->

FILES CREATED:
<!-- List all new files -->

FILES CHANGED:
<!-- List all modified files -->

VALIDATION:
- npm run lint: <!-- pass | fail | skipped -->
- npm run build: <!-- pass | fail | skipped -->
- npm run smoke:prelaunch: <!-- pass | fail | skipped -->
- npm run crawl:prelaunch: <!-- pass | fail | skipped -->

FINDINGS:
<!-- Key findings, issues discovered, decisions made -->

BLOCKED REASON:
<!-- If STATUS is Blocked — what stopped it and what is needed to unblock -->

DIRTY FILES LEFT UNTOUCHED:
<!-- Any pre-existing dirty files the agent found and did not touch -->

RECOMMENDED NEXT STEP:
<!-- One clear next action for the orchestrator -->
