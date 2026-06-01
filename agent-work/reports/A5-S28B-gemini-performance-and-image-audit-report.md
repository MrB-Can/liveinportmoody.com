AGENT:
Agent 5 — Gemini CLI

SPRINT:
A5-S28B — Gemini Performance and Image Audit

STATUS:
Completed

FILES CHANGED:
- docs/performance-image-audit.md (created)
- src/components/image-hero.tsx (priority prop added)
- src/app/about/page.tsx (priority added to hero)
- src/app/buy/page.tsx (priority added to hero)

ISSUES FOUND:
- 8 oversized PNG hero images (1.6–2.6MB each). Recommended conversion to WebP.
  hero-buy.png, hero-sell.png, hero-move.png, hero-market.png, hero-about.png,
  hero-contact.png, hero-resources.png, hero-legal.png
- ImageHero component only applied Next.js priority (LCP preload) when homeSizing=true,
  causing lazy-load of above-fold hero images on non-homepage pages.
- imageAlt defaults to empty string (acceptable for decorative images; noted for awareness).

FIXES APPLIED:
- Added optional priority prop to ImageHero component. Defaults false. When true,
  priority={homeSizing || priority} so homepage retains its forced priority.
- Added priority to /about and /buy hero images (above-fold pages with large hero).

FIXES NOT APPLIED (require image tools or post-launch action):
- PNG→WebP conversion for 8 hero images (post-launch, requires tooling).
- imageAlt improvements (content-owner decision per page).

VALIDATION:
- lint: pass
- build: pass (86 pages)

COMMIT:
committed as part of S29C reconcile — see S29C-reconcile-dirty-worktree-report.md
