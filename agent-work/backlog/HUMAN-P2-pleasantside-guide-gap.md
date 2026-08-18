TASK:
HUMAN-P2 - Decide what to do about Pleasantside

TASK_TYPE:
human

OWNER:
Paul / Leilani

GOAL:
Resolve the one home page area card that has no neighbourhood guide behind it.

CONTEXT:
The home page lists 10 Port Moody areas. Nine now deep-link to their own guide
(/neighbourhoods/{slug}). Pleasantside has no published guide, so its card
falls back to the /neighbourhoods hub - see `slug: null` in the areaCards array
in src/app/page.tsx.

Pleasantside is a real north-shore area with its own elementary school
catchment, and it is referenced inside the barber-street and
north-shore-port-moody guides. The `north-shore-port-moody` guide is currently
status "hidden"; `seaview` is published but covers the Sasamat/Ioco side, not
Pleasantside.

OPTIONS:
- Write a Pleasantside guide and set the slug
- Publish the hidden north-shore-port-moody guide and point Pleasantside at it
- Drop the Pleasantside card from the home page
