# Deployment notes — LiveInPortMoody.com

## Source of truth for environment variables

| Scope | Source |
|---|---|
| Production | Vercel Project Settings → Environment Variables → Production target |
| Preview | Vercel Project Settings → Environment Variables → Preview target |
| Local dev | `.env.local` (never committed, never shared) |

## NEXT_PUBLIC_ variables are browser-exposed

All `NEXT_PUBLIC_*` variables are baked into the JavaScript bundle at build time and are visible to anyone who views the page source. Never put private tokens, API keys, or credentials in a `NEXT_PUBLIC_*` variable.

Currently public (browser-visible):
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PUBLIC_EMAIL`
- `NEXT_PUBLIC_PUBLIC_PHONE`
- `NEXT_PUBLIC_BROKERAGE_NAME`
- `NEXT_PUBLIC_BROKERAGE_ADDRESS`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_CLARITY_ID`
- `NEXT_PUBLIC_INTERACTIVE_MAPS_ENABLED`
- `NEXT_PUBLIC_MAP_PROVIDER`
- `NEXT_PUBLIC_MAP_STYLE_URL`

Server-only (never expose as NEXT_PUBLIC_):
- `GHL_API_TOKEN`
- `GHL_LOCATION_ID`, `GHL_PIPELINE_ID`, `GHL_STAGE_ID`
- `GHL_OWNER_BUYER_USER_ID`, `GHL_OWNER_SELLER_USER_ID`
- `AWS_REGION`, `GHL_API_TOKEN_SECRET_ID`, `GHL_API_TOKEN_SECRET_KEY`
- `PREVIEW_KEY`, `COMING_SOON_ENABLED`

## .env.local and vercel deploy

When running `vercel deploy` from the local machine, `.env.local` is uploaded to Vercel and **takes precedence over Vercel project-level env vars at build time**. This means:

- Stale `.env.local` values silently override Vercel project settings during builds
- Always keep `.env.local` in sync with production Vercel env vars before running `vercel deploy`
- After updating Vercel project env vars, update `.env.local` locally before the next deploy

## Interactive maps

Maps require three variables to be set consistently in both `.env.local` and Vercel project settings:

| Variable | Production value |
|---|---|
| `NEXT_PUBLIC_INTERACTIVE_MAPS_ENABLED` | `true` |
| `NEXT_PUBLIC_MAP_PROVIDER` | `maplibre` |
| `NEXT_PUBLIC_MAP_STYLE_URL` | `https://tiles.openfreemap.org/styles/liberty` |

If maps show "Map unavailable" after a deploy, check `.env.local` first — stale `false` is the most common cause.

## Deploy checklist

Before running `vercel deploy --prod`:

- [ ] `.env.local` matches Vercel production env vars for all `NEXT_PUBLIC_*` variables
- [ ] `NEXT_PUBLIC_INTERACTIVE_MAPS_ENABLED=true` in `.env.local`
- [ ] No secrets are committed (`git status` shows `.env.local` as untracked or in `.gitignore`)
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] `npm run smoke:prelaunch` passes against current production (note expected failures if deploy is intended to fix them)
- [ ] Working tree is clean — no unrelated uncommitted files (use `git status` to confirm)
- [ ] Deploy to production: `vercel deploy --prod`
- [ ] `npm run smoke:prelaunch` passes against production after deploy
- [ ] Manually confirm maps render on `/neighbourhoods`, `/complexes`, `/buildings` after preview unlock

Run code checks: `npm run deploy:check`
Run smoke: `npm run smoke:prelaunch`
See full smoke documentation: `docs/prelaunch-smoke-test.md`
See launch blockers: `docs/prelaunch-launch-blockers.md`

## Rotating the GHL API token

If `GHL_API_TOKEN` exposure is suspected:

1. Generate a new token in GoHighLevel
2. Update the secret in AWS Secrets Manager: the secret at `GHL_API_TOKEN_SECRET_ID` → `GHL_API_TOKEN_SECRET_KEY`
3. Update Vercel Production env var: `GHL_API_TOKEN` in Vercel Project Settings (server-only, no `NEXT_PUBLIC_` prefix)
4. Update `.env.local` locally
5. Run `vercel deploy --prod --force` to rebuild with the new token
6. Verify the old token no longer works

## Secret scanning (manual)

Before committing, check for accidental secret inclusion:

```bash
npm run check:secrets
```

Or run directly:

```bash
grep -rn "GHL_API_TOKEN=\|access_token=\|api_key=\|bearer\|private_key" \
  --include="*.ts" --include="*.tsx" --include="*.js" \
  --exclude-dir=node_modules --exclude-dir=.next \
  . 2>/dev/null | grep -v "^\./\.env" | grep -v "node_modules"
```

This check looks for secret assignments in source files. Secret values should only appear in `.env.local` and Vercel project settings, never in committed code.
