# Live in Port Moody: agent notes

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Real-estate site for the Live in Port Moody tenant of LGIS.
- **Deploy:** Vercel: **pushing to `main` deploys production** on liveinportmoody.com. Don't push half-finished work.
- **Checks before committing:** `npm run typecheck && npm run build`.
- **Planning:** GitHub issues on this repo are authoritative for open work. `docs/` holds guides and point-in-time audits, so check dates before trusting a status doc.
- **Docs freshness:** this repo carries the `docs-drift` skill (`.claude/skills/docs-drift/`) and CI workflow; run it after landmark changes and apply findings.
- **Listings:** follow `docs/listing-creation-guide.md` exactly; enums and slugs are closed sets with silent-failure gotchas.
- **Leads:** `/api/lead` → CRM adapter (GoHighLevel, `CRM_MODE` gated); `GET /api/health` is the Route 53 liveness check.
- **Ecosystem:** conventions and the cross-repo architecture map live in [MrB-Can/lgis-infrastructure](https://github.com/MrB-Can/lgis-infrastructure) (`ARCHITECTURE.md`, `CONVENTIONS.md`).
