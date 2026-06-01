AGENT:
Agent 4

SPRINT:
A4-S29A — Building Complex Neighbourhood Template Polish

STATUS:
Completed

FILES CHANGED:
- src/app/buildings/page.tsx
- src/app/complexes/page.tsx
- src/app/neighbourhoods/page.tsx
- src/components/buildings/BuildingComparisonTable.tsx
- src/components/buildings/BuildingGuidePreviewTemplate.tsx
- src/components/complexes/ComplexLocation.tsx
- src/components/complexes/ComplexPreviewTemplate.tsx
- src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx
- src/components/neighbourhoods/neighbourhood-comparison-table.tsx
- src/components/neighbourhoods/quick-facts-with-bars.tsx
- agent-work/done/A4-S29A-research-template-polish.md
- agent-work/reports/A4-S29A-research-template-polish-report.md

VISUAL FIXES:
- Added mobile swipe guidance and stronger overflow wrappers for building, complex, and neighbourhood comparison tables.
- Reduced map heights on the buildings, complexes, and neighbourhoods index pages to cut excess vertical whitespace.
- Reworked repeated card grids into bordered list groups on research hubs and shared detail templates.
- Tightened vertical spacing in complex and neighbourhood detail templates.
- Made repeated verification/disclaimer notes less visually dominant with lighter left-border treatments while preserving all safety language.
- Reduced placeholder/context image prominence in complex location content.

VALIDATION:
- lint: pass (`npm run lint`)
- build: pass (`npm run build`)
- smoke: default command failed because this environment could not resolve `www.liveinportmoody.com`; local production smoke passed with `LIPM_BASE_URL=http://127.0.0.1:3057 npm run smoke:prelaunch` at 71 passed, 0 warnings, 0 failed.

COMMIT:
committed; final hash reported in Agent 4 response
