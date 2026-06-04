TASK:
POOL-P2-S33K — Optimize Large Hero Images

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Optimize large hero PNGs identified by technical review.

CONTEXT:
Technical review flagged large assets:
- public/hero-buy.png
- public/hero-sell.png
- public/hero-move.png
- public/hero-market.png
- public/hero-about.png
- public/hero-contact.png
- public/hero-resources.png
- public/hero-legal.png

DO NOT:
- deploy
- change layout drastically
- remove images without confirming usage
- degrade visible quality

ALLOWED FILES:
- public/**
- src/components/**
- src/app/**
- docs/image-optimization-notes.md
- agent-work/reports/POOL-P2-S33K-optimize-large-hero-images-report.md

TASKS:
1. Move task to active.
2. Identify which large images are actually used.
3. Create WebP or AVIF optimized variants.
4. Update references only where safe.
5. Confirm visual dimensions remain stable.
6. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
7. Write report.
8. Move task to done or blocked.
9. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
IMAGES OPTIMIZED:
SIZE BEFORE/AFTER:
REFERENCES UPDATED:
VALIDATION:
COMMIT:
