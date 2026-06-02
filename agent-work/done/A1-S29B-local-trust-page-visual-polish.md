AGENT:
Agent 1

SPRINT:
A1-S29B — Local Trust Page Visual Polish

GOAL:
Improve sparse local/trust/compatibility pages so they feel intentional and useful without inventing content.

THIS IS A CODE FIX TASK, NOT A REPORT-ONLY TASK.

ALLOWED FILES:
- src/app/local-businesses/page.tsx
- src/app/testimonials/page.tsx
- src/app/accolades/page.tsx
- src/app/events/page.tsx
- src/app/faq/page.tsx
- src/app/local-life/page.tsx
- src/app/featured-businesses/page.tsx
- src/app/local-insights/page.tsx
- src/app/meet-us/page.tsx
- src/app/raving-fans/page.tsx
- src/app/about/page.tsx
- agent-work/reports/A1-S29B-local-trust-page-visual-polish-report.md

FORBIDDEN FILES:
- src/app/buildings/**
- src/app/complexes/**
- src/app/neighbourhoods/**
- src/components/buildings/**
- src/components/complexes/**
- src/components/neighbourhoods/**
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**

DO NOT:
- deploy
- invent testimonials
- invent reviews
- invent awards
- invent local businesses
- invent events
- add fake badges
- add fake review counts
- remove coming-soon
- remove preview noindex
- write docs instead of fixing UI

TASKS:
1. Move this task to active.
2. Improve sparse pages:
   - /local-businesses
   - /testimonials
   - /accolades
   - /events
   - /faq
3. Turn compatibility pages into useful bridge pages:
   - clear explanation
   - stronger next-step cards
   - CTA grouping
   - verification-first language
4. Improve spacing and visual rhythm on:
   - /local-life
   - /featured-businesses
   - /local-insights
   - /meet-us
   - /raving-fans
   - /about
5. Do not invent proof, quotes, reviews, awards, businesses, or event details.
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
7. Write final report.
8. Move task to done or blocked.
9. Commit scoped files only.

FINAL REPORT:
AGENT:
Agent 1

SPRINT:
A1-S29B — Local Trust Page Visual Polish

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
