AGENT:
Agent 2

SPRINT:
A2-S29A — Footer and Newsletter Visual Fix

GOAL:
Fix the two biggest global visual issues from screenshot review: footer IA duplication and oversized newsletter block.

THIS IS A CODE FIX TASK, NOT A REPORT TASK.

ALLOWED FILES:
- src/components/footer.tsx
- src/components/newsletter-signup.tsx
- src/lib/site.ts
- agent-work/reports/A2-S29A-footer-newsletter-visual-fix-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**
- src/app/** unless absolutely required

DO NOT:
- deploy
- remove coming-soon
- remove preview noindex
- add fake social links
- add fake testimonials, awards, businesses, events, listings, or sold data
- create another planning doc instead of fixing UI

TASKS:
1. Move this task to active.
2. Fix footer IA:
   - Remove duplicate “Local Life” under Relocate.
   - Use clean footer groups:
     BUY: Search Listings, Buyer Guide, First-Time Buyers, Buildings & Complexes, Request Recent Sales
     SELL: Seller Guide, Home Evaluation, How We Do It, Recently Sold, Raving Fans
     RELOCATE: Move to Port Moody, Neighbourhoods, Local Insights
     NEIGHBOURHOODS: Compare Neighbourhoods, Condo Buildings, Townhouse Complexes, Presales
     LOCAL LIFE: Local Life, Featured Businesses, Events
     ABOUT: Meet Us, Accolades, Contact
3. Tighten newsletter component globally:
   - Reduce vertical padding.
   - Reduce form card visual dominance.
   - Reduce textarea height.
   - Improve balance between copy and form.
   - Keep consent language and all required fields.
   - Do not remove the component entirely.
4. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
5. Write final report.
6. Move task to done or blocked.
7. Commit only scoped files.

FINAL REPORT:
AGENT:
Agent 2
SPRINT:
A2-S29A — Footer and Newsletter Visual Fix
STATUS:
Completed / Blocked
FILES CHANGED:
- file
VISUAL FIXES:
- fix
VALIDATION:
- lint:
- build:
- smoke:
COMMIT:
hash or none
