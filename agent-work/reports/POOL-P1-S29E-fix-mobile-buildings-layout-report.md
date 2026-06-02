AGENT:
Next available agent

TASK:
POOL-P1-S29E - Fix Mobile Buildings Page Layout

STATUS:
Completed

CAUSE FOUND:
The mobile /buildings page had two layout risks that made the full-page mobile capture much taller than comparable research hubs: a dense buildings comparison/table section and the interactive MapLibre map in the buildings hub. The final fix uses more compact building-by-area and comparison sections, keeps the interactive map for desktop/tablet, and uses a compact non-WebGL orientation panel on mobile.

FILES CHANGED:
- src/app/buildings/page.tsx
- src/components/buildings/CondoDecisionGuide.tsx
- agent-work/reports/POOL-P1-S29E-fix-mobile-buildings-layout-report.md

VALIDATION:
- lint: pass
- build: pass
- smoke: pass

SCREENSHOT CHECK:
- /buildings mobile: checked at 390px against local dev server; mobile now shows compact map orientation instead of visible map tiles. Screenshot height reduced from previous 1170 x 74043 reference to 1170 x 47754 in the local check before the final combined compact section changes.
- /buildings desktop: checked at 1440px against local dev server; interactive map still renders and desktop layout remains usable.
- /complexes mobile if checked: not checked; no shared component used by /complexes was changed.
- /neighbourhoods mobile if checked: not checked; no shared component used by /neighbourhoods was changed.

COMMIT:
6c4a964

RECOMMENDED NEXT STEP:
Run the targeted buildings recapture task to confirm the production-style visual screenshot no longer repeats map tiles on mobile.
