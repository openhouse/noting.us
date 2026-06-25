# Noting.us

Noting.us is a Markdown-first, wiki-backed private knowledge system for governed, source-linked team memory. The first demo universe is FairRentNYC / Commercial Rent Stabilization at `/u/fairrentnyc`.

## Requirements

- Node.js 22
- pnpm 9.15.0

No secrets or external services are required for the local demo.

## Quick start

```bash
pnpm install
pnpm demo:seed
pnpm validate:fixtures
pnpm typecheck
pnpm test
pnpm evals
pnpm build
pnpm dev
```

Open `http://localhost:3000/u/fairrentnyc`.

## Useful commands

- `pnpm demo:seed` regenerates safe FairRentNYC source and bundle fixtures under `content/demo/fairrentnyc`.
- `pnpm validate:fixtures` validates source artifacts, page bundles, required sidecars, and review events.
- `pnpm evals` runs deterministic trust-loop evals.
- `pnpm export:bundle legal-bill-text-review` writes `content/demo/fairrentnyc/exports/legal-bill-text-review.zip` with sidecars and `export-manifest.json`.
- `pnpm format` runs Prettier.

## Workspace

- `apps/web` — Next.js demo UI.
- `packages/core` — domain types and Zod schemas.
- `packages/ingest` — deterministic parsing helpers.
- `packages/page-bundles` — bundle validation/read/write/export helpers.
- `packages/wiki` — Markdown-to-wikitext preview seam.
- `packages/evals` — deterministic trust-loop evals.
- `packages/fixtures` — safe FairRentNYC fixtures.
- `content/demo/fairrentnyc` — canonical generated demo content root.

## Safety boundary

Do not commit raw private material, private emails, phone numbers, private photos, raw sensitive transcripts, unreviewed story details, landlord details, lease terms, contact lists, sign-in sheets, or vulnerable business/tenant information. Demo content must be safe synthetic, safe excerpt, redacted fixture, public-source-derived with attribution, or internal-only with no sensitive details.
