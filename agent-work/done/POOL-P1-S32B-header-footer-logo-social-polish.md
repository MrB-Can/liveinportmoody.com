TASK:
POOL-P1-S32B — Header Footer Logo and Social Polish

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Improve brand presentation after visual review.

VISUAL REVIEW FINDINGS:
- Desktop header logo is visible but too small/light to read comfortably.
- Mobile header logo is acceptable.
- Footer logo is acceptable.
- Footer social links are present, but visually plain.

DO NOT:
- deploy
- redesign the whole site
- replace owner-approved logo assets
- distort logo aspect ratio
- add fake social links
- show YouTube without a real URL

ALLOWED FILES:
- src/components/header.tsx
- src/components/footer.tsx
- src/components/wordmark.tsx
- src/lib/site.ts
- src/app/layout.tsx
- public/images/brand/**
- docs/visual-review-final-fixes.md
- agent-work/reports/POOL-P1-S32B-header-footer-logo-social-polish-report.md

TASKS:
1. Move this task to active.
2. Improve desktop header logo sizing/readability.
   - Try a slightly larger width/height.
   - Preserve mobile layout.
   - Do not make the nav taller than necessary.
3. Confirm logo is not blurry, cropped, or distorted.
4. Improve footer social link styling:
   - show Facebook and Instagram clearly
   - no href="#"
   - no YouTube
   - no "coming soon"
5. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
6. Write report.
7. Move task to done or blocked.
8. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
HEADER LOGO:
- before:
- after:
FOOTER SOCIAL:
- Facebook:
- Instagram:
- YouTube omitted:
VALIDATION:
- lint:
- build:
- crawl:
COMMIT:
RECOMMENDED NEXT STEP:
Run focused recapture and deploy if acceptable.
