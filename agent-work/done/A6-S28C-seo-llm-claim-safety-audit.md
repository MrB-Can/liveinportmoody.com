AGENT:
Agent 6

SPRINT:
A6-S28C — SEO LLM Claim Safety Audit

GOAL:
Audit the site for SEO/LLM clarity and risky unsupported claims. Produce a report and make only tiny safe copy fixes if clearly needed.

SCOPE:
Audit and small safe copy fixes only.

ALLOWED FILES:
- agent-work/reports/A6-S28C-seo-llm-claim-safety-audit-report.md
- docs/seo-llm-claim-safety-audit.md
- src/app/**/page.tsx only for tiny safe wording fixes
- src/lib/site.ts only for metadata typo fixes

FORBIDDEN FILES:
- src/components/header.tsx
- src/components/footer.tsx
- middleware
- public/images/**
- visual-review-screenshots/**
- .env*

DO NOT:
- deploy
- remove coming-soon
- remove noindex from previews
- add fake reviews
- add fake awards
- add fake sold data
- add schema for reviews/ratings/awards
- add IDX
- make broad rewrites

TASKS:
1. Move this task to active.
2. Search for risky terms:
   - Top 2%
   - Medallion
   - ICON
   - RankMyAgent
   - RateMyAgent
   - five star
   - 5 star
   - review count
   - sales volume
   - sold price
   - guaranteed
   - best realtor
   - best school
   - catchment
   - complete guide
   - full guide
3. Confirm claims are either:
   - verified/source-gated
   - cautious placeholder
   - absent
4. Check key pages for SEO/LLM clarity:
   - /
   - /buy
   - /sell
   - /home-evaluation
   - /how-we-do-it
   - /recently-sold
   - /local-life
   - /featured-businesses
   - /meet-us
   - /raving-fans
   - /neighbourhoods
   - /buildings
   - /complexes
5. Make only tiny safe wording fixes if needed.
6. Create docs/seo-llm-claim-safety-audit.md.
7. Run npm run lint and npm run build if code changed.
8. Write final report to agent-work/reports/A6-S28C-seo-llm-claim-safety-audit-report.md.
9. Move task to done or blocked.
10. Commit only scoped files.

VALIDATION:
- npm run lint if code changed
- npm run build if code changed

FINAL REPORT:
AGENT:
Agent 6

SPRINT:
A6-S28C — SEO LLM Claim Safety Audit

STATUS:
Completed / Blocked

FILES CHANGED:
- file

RISKY CLAIMS FOUND:
- claim

FIXES MADE:
- fix

VALIDATION:
- lint:
- build:

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
- one clear action
