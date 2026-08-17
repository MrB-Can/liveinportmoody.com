---
name: docs-drift
description: Audit a GitHub repo's in-repo documentation against recent commits and PR/issue conversations to find docs that have gone stale. Use when the user asks to check whether docs are up to date, run a docs audit, find stale documentation, verify README/CLAUDE.md/CHANGELOG accuracy, or prepare docs before a release or merge. Also used by the docs-drift CI workflow and pre-push hook.
---

# Docs drift audit

Find in-repo documentation that no longer matches what the code and the team's
conversations say. Report first. Only edit after the user approves.

## Operating principle

Documentation goes stale in three ways, and they need different evidence:

1. **Contradicted.** The doc states something the code no longer does. Evidence:
   a commit diff that changed the described behaviour.
2. **Missing.** Something shipped that no doc mentions. Evidence: a new
   flag/env var/endpoint/command/config key in a diff with no doc hit.
3. **Decided-but-unwritten.** A PR or issue thread settled a decision (a naming
   convention, an architectural choice, a deprecation) that never made it into a
   doc. Evidence: the conversation itself.

Type 3 is the one people miss and the reason this skill reads conversations, not
just diffs. Weight it accordingly.

## Step 1: establish the window

Determine what range to audit. In order of preference:

- The user named a range ("since v2.1", "last two weeks") → use it.
- Running in CI on a PR → use the PR's merge base to HEAD.
- Otherwise → since the last tag, falling back to the last 30 days.

```bash
git fetch --tags --quiet
BASE=$(git describe --tags --abbrev=0 2>/dev/null || git log --since="30 days ago" --format=%H | tail -1)
echo "auditing $BASE..HEAD"
```

State the window in the report. An audit with an unstated window is not
reproducible.

## Step 2: gather evidence

Run these concurrently where possible. `gh` must be authenticated
(`gh auth status`); if it is not, say so and continue with git-only evidence
rather than silently skipping conversations.

**Commits and diffs:**

```bash
git log --no-merges --format='%h %s' "$BASE..HEAD"
git diff --stat "$BASE..HEAD"
```

Then read the actual diffs for files that look behaviour-defining: CLI arg
parsers, route/handler registration, config schemas, env var reads, public
exports, migration files, dependency manifests. Skip test-only and formatting
churn.

**Conversations:**

```bash
gh pr list --state merged --search "merged:>=<window-start>" --json number,title,url,body
gh pr view <n> --json title,body,comments,reviews,url
gh issue list --state all --search "updated:>=<window-start>" --json number,title,url,body,comments
```

Read review threads, not just PR bodies. Decisions get made in review comments
far more often than in descriptions.

## Step 3: inventory the docs

Find every in-repo doc, not just the obvious ones:

```bash
git ls-files '*.md' '*.mdx' '*.rst' '*.txt' | grep -vi node_modules
```

Pay particular attention to `README.md`, `CLAUDE.md` and any nested
`CLAUDE.md`, `AGENTS.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `docs/**`, ADRs
under `docs/adr/` or `docs/decisions/`, `.env.example`, and doc comments in
config files. `CLAUDE.md` drift is especially costly, because it silently
degrades every future Claude Code session on the repo.

If `.docs-drift-ignore` exists in the repo root, treat its globs (one per line,
`#` comments allowed) as intentionally-approximate docs: still scan them, but
never classify their findings as blocking.

Also note which docs were *touched* in the window (`git diff --name-only
"$BASE..HEAD" -- '*.md'`). A doc updated inside the window is lower risk; one
untouched while its subject area churned is the prime suspect.

## Step 4: correlate

For each piece of evidence, ask: which doc *should* mention this, and does it?

Work from the code outward, not the docs inward. Walking the docs and checking
each claim misses everything in category 2 (missing). For each behaviour-defining
change, grep the doc corpus for the identifier involved:

```bash
git grep -in '<new-flag-or-symbol>' -- '*.md' '*.mdx' 'docs/'
```

No hit on a user-facing addition is a finding. A hit whose surrounding prose
describes the old behaviour is a stronger finding.

Then sweep the other direction for the highest-traffic docs only (README,
CLAUDE.md, CONTRIBUTING): verify that commands, paths, and file references they
contain still resolve. Broken `cd`/script/path references are cheap to detect and
common.

## Step 5: verify before reporting

Every finding must survive this check before it goes in the report:

- Quote the doc line (with `path:line`) and the commit/PR that contradicts it.
- Confirm the doc line actually says what you claim. Re-read it; do not rely on
  the grep snippet.
- Confirm no *other* doc already covers it. Duplicate-coverage false positives
  are the most common failure mode here.

Drop anything you cannot evidence. A short report that is entirely correct is
worth more than a long one the user has to fact-check. If you dropped findings
for lack of evidence, say how many. Silent filtering reads as "nothing else was
wrong".

## Step 6: report

Write the report to `docs-drift-report.md` in the repo root (gitignored or
deleted afterward; do not commit it unless asked). In CI, the workflow posts it
as a PR comment instead.

Format:

```markdown
# Docs drift report

**Window:** `<base>..<head>` (<n> commits, <n> merged PRs)
**Docs scanned:** <n> files

## Blocking: docs that are now wrong

### 1. README.md:42, install command references removed script
> `npm run bootstrap`
`scripts/bootstrap.js` was deleted in a1b2c3d (#118). The equivalent is now
`npm ci`.
**Fix:** replace the line with `npm ci`.

## Non-blocking: undocumented additions

...

## Decisions from discussion not yet written down

...

## Checked and current
- CONTRIBUTING.md, matches current PR process
```

Rank blocking findings first. "Checked and current" matters: it tells the user
what the audit actually covered, so absence of a finding means something.

Then ask whether to apply the fixes. Do not edit in the same turn as the report.

## Step 7: apply (only on approval)

Make the minimal edit that makes the doc true. Do not restructure, reword
surrounding prose, or "improve" writing that was not flagged; unrequested churn
buries the real change in review. One commit, or one commit per doc if the user
prefers, on a branch: `docs/drift-<date>`.

## House style

Match the surrounding document when editing. If the repo enforces a prose style
(a linter, a commit hook, a `CONTRIBUTING.md` rule), read it before writing and
follow it. Check for hooks in `.git/hooks/` and `.githooks/`, since a rejected
commit at the end of an audit wastes the whole run.

## Running unattended

In CI or from a hook there is nobody to approve edits. Report only, always. Exit
non-zero solely on **blocking** findings, so undocumented-addition noise cannot
block a merge. See `assets/docs-drift.yml` and `assets/pre-push` for wiring, and
`references/ci-setup.md` for installation.
