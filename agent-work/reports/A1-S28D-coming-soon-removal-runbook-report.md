AGENT:
Agent 1 — Claude Code

SPRINT:
A1-S28D — Coming-Soon Removal and Rollback Runbook

STATUS:
Completed

COMMIT:
(see below)

FILES CHANGED:
- docs/coming-soon-removal-runbook.md (created)
- agent-work/reports/A1-S28D-coming-soon-removal-runbook-report.md (this file)

---

FINDINGS FROM CODE INSPECTION:

Gate mechanism (src/middleware.ts):
- Single env var controls everything: COMING_SOON_ENABLED
- Any value other than "false" = gate ON (including "true", missing, or blank)
- COMING_SOON_ENABLED=false = gate OFF — site fully public
- Gate is a transparent rewrite to /coming-soon, not a redirect (browser URL stays unchanged)
- No code changes required to launch — only an env var change + Vercel redeploy

Always-allowed paths (bypass gate regardless):
- /coming-soon, /contact, /privacy, /terms, /robots.txt, /sitemap.xml, /api/*, static files

Preview cookie:
- Name: __lipm_preview
- Set via /preview?key=<PREVIEW_KEY> — timing-safe comparison against PREVIEW_KEY env var
- httpOnly, secure, SameSite=lax, 1-year TTL
- Cookie persists after gate removal — existing preview users unaffected

Current production env state:
- COMING_SOON_ENABLED=true (gate active)
- PREVIEW_KEY: set
- CRM_MODE=ghl (confirmed from prior sprint)

---

RUNBOOK SUMMARY:

The runbook at docs/coming-soon-removal-runbook.md covers:
1. How the coming-soon gate works (middleware + env var)
2. Preview key flow for authorized access
3. Pre-removal checklist — 8 technical items + 5 content/legal owner items
4. Exact removal procedure: Vercel Dashboard → change COMING_SOON_ENABLED to "false" → redeploy
5. Post-removal smoke check (incognito, curl, automated smoke/crawl)
6. Rollback: change env var back to "true" + redeploy (~3 min to restore gate)
7. Who must approve (Paul Bennett sign-off required on all content + technical items)
8. Post-launch monitoring for first 24 hours

---

APPROVAL GATE:

Coming-soon removal requires Paul Bennett's explicit confirmation that:
- Live GHL form test passed (docs/ghl-live-form-test-runbook.md)
- Privacy/terms reviewed
- Homepage, nav, funnels approved
- Social links and Leilani photo decisions made

---

RECOMMENDED NEXT STEP:
Paul runs docs/ghl-live-form-test-runbook.md to confirm GHL integration.
Once all checklist items are confirmed, Paul changes COMING_SOON_ENABLED to "false"
in Vercel Dashboard and redeploys. The coming-soon-removal-runbook.md is the
exact playbook for that moment.
