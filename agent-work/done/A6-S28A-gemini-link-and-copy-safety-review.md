AGENT:
Agent 6 — Gemini CLI

SPRINT:
LIPM-A6-S28A-001 — Gemini Link and Copy Safety Review

GOAL:
Review the new phase-one pages for link integrity, risky copy claims, fake content, and CTA safety. Read source files directly. This is a review-only task. No deploy. Small copy fixes may be made if obviously wrong and low-risk — report any fix clearly.

PAGES TO REVIEW (source files):
- src/app/get-started/page.tsx
- src/app/home-evaluation/page.tsx
- src/app/how-we-do-it/page.tsx
- src/app/recently-sold/page.tsx
- src/app/meet-us/page.tsx
- src/app/raving-fans/page.tsx
- src/app/local-life/page.tsx
- src/app/featured-businesses/page.tsx
- src/app/page.tsx (homepage trust strip and CTAs)

REVIEW CRITERIA:

1. Link safety
   - All internal hrefs point to real routes (cross-check src/lib/site.ts phaseOneRoutes and known pages)
   - No href="#" dead links in nav or CTAs
   - No external links to placeholder domains

2. Copy safety
   - No invented award claims ("Award-winning", "#1 in Port Moody", "Top 1%")
   - No invented review counts ("500+ reviews", "4.9 stars")
   - No invented sales volume ("$200M sold")
   - No fake client names or testimonials
   - No fake business names or event listings
   - No invented download links or PDF guides

3. CTA safety
   - CTA destinations are real routes (not 404)
   - Form CTAs go to /contact, /home-evaluation, /buyer-guide, /seller-guide, or /request-recent-sales
   - No CTA promising something the page cannot deliver

4. Compliance language
   - /recently-sold page must NOT show sold prices or fake sold stories
   - /raving-fans page must NOT show fake testimonials without a verified source noted

ALLOWED FILES:
- agent-work/reports/A6-S28A-gemini-link-and-copy-safety-review.md (report only)
- src/app/get-started/page.tsx (small copy fix only if explicitly needed)
- src/app/recently-sold/page.tsx (small copy fix only if explicitly needed)
- src/app/raving-fans/page.tsx (small copy fix only if explicitly needed)

FORBIDDEN FILES:
- src/middleware.ts
- src/app/coming-soon/
- src/lib/site.ts (do not edit nav or route config)
- src/components/header.tsx
- src/components/footer.tsx
- src/components/mobile-nav.tsx
- .env*

DO NOT:
- deploy
- remove coming-soon mode
- remove noindex from preview routes
- edit nav, header, or footer
- invent testimonials, awards, or fake social proof
- run broad refactors

PHASES:
1. Read each source file listed above
2. Check links against known routes in src/lib/site.ts
3. Check copy for unsafe claims
4. Check CTAs for dead destinations
5. Note any issues with file name, line number, and description
6. If a small copy fix is clearly needed (e.g. broken href, typo in compliance text), make it and report it
7. Write final report to agent-work/reports/A6-S28A-gemini-link-and-copy-safety-review.md

VALIDATION:
- If any fix was made: npm run lint must pass
- Report must list all pages reviewed and all issues found

COMMIT RULES:
- Commit only if a fix was made and is explicitly listed in the report
- Do not commit the report file itself unless part of a larger orchestration commit
- Message: Review A6-S28A: link and copy safety fixes (if applicable)

DEPLOYMENT:
not allowed

FINAL REPORT FORMAT:

AGENT:
Agent 6 — Gemini CLI

SPRINT:
LIPM-A6-S28A-001

STATUS:
Completed | Partially completed | Blocked

COMMIT:
none | hash

DEPLOYED:
no

FILES REVIEWED:
- list

LINK ISSUES:
- file:line — description (or "none found")

COPY SAFETY ISSUES:
- file:line — description (or "none found")

CTA ISSUES:
- file:line — description (or "none found")

COMPLIANCE ISSUES:
- file:line — description (or "none found")

FIXES MADE:
- file:line — what was changed (or "none")

VALIDATION:
- npm run lint: pass | fail | skipped

RECOMMENDED NEXT STEP:
