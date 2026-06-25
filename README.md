# Noting.us — FairRentNYC Scaffold

Noting.us is a Markdown-first, wiki-backed private team-memory system. It turns meetings, transcripts, documents, decisions, and collaboration artifacts into governed, editable, source-linked shared memory. AI assistance is labeled as draft help; humans remain the authority.

## Why FairRentNYC

The Fair Rent NYC / Commercial Rent Stabilization universe exercises movement memory, policy lineage, coalition governance, consent-sensitive story leads, public/internal boundaries, and legal caution.

## What this scaffold demonstrates

- One demo universe at `/u/fairrentnyc` for `fairrentnyc.noting.us`.
- Running-minutes parsing into stable source segments.
- Four modeled source artifacts: running minutes, visual lineage map, legislative redline, and restricted archival consent boundary.
- Sixteen deterministic Markdown page bundles with metadata, citations, evals, permissions, revisions, and MediaWiki-compatible export previews.
- A Next.js UI for sources, bundles, wiki previews, review, actions, open questions, story consent, lineages, governance, evals, export, and demo script.

## What it intentionally does not do

No production auth, billing, database, real LLM calls, real MediaWiki sync, Google/Gmail/Slack/Zoom connectors, OCR, CRM, legal research automation, or public campaign publishing workflow.

## Install and run

```bash
pnpm install
pnpm demo:seed
pnpm dev
pnpm test
pnpm build
pnpm evals
```

Open `http://localhost:3000/u/fairrentnyc`.

## Directory structure

- `apps/web`: Next.js demo UI.
- `packages/core`: domain types, demo universe, organizations, people, NotingBot identities.
- `packages/ingest`: deterministic running-minutes parser.
- `packages/wiki`: Markdown-to-wikitext preview seam and MediaWiki stub.
- `packages/evals`: deterministic trust-loop evals.
- `packages/fixtures`: FairRentNYC sources and page-bundle generator.
- `content/demo/fairrentnyc`: generated source and bundle fixtures from `pnpm demo:seed`.
- `docs`: architecture, demo script, product notes, source policy.
- `scripts`: seed and eval entry points.

## Demo route walkthrough

1. `/u/fairrentnyc` — universe dashboard.
2. `/u/fairrentnyc/sources` — source artifact list.
3. `/u/fairrentnyc/sources/running-minutes-2026-05-29` — stable source segments.
4. `/u/fairrentnyc/bundles` — Markdown page bundles.
5. `/u/fairrentnyc/bundles/legal-bill-text-review` — metadata, citations, evals, permissions, wiki export.
6. `/u/fairrentnyc/wiki` — wiki-like preview index.
7. `/u/fairrentnyc/review` — simulated human correction path.
8. `/u/fairrentnyc/evals` — source grounding, consent, lane clarity, stale status, and legal warning checks.
9. `/u/fairrentnyc/export` — Markdown export sidecar explanation.
10. `/u/fairrentnyc/demo` — guided demo checklist.

## Source materials modeled

- Commercial Rent Stabilization Collaboration — Running Minutes excerpt, source status date `2026-05-29`, default `team_internal`.
- NAC Movement Map in Terms of Policy Lineages, structured visual-map fixture, default `team_internal`.
- NAC / Commercial Rent Stabilization Legislative Provenance Redline, restricted and not legal advice.
- Archival relationship-history consent boundary, restricted and not public-use allowed.

## Privacy, consent, legal caution

The fixtures default to `team_internal` or `restricted`; public use is false unless explicitly reviewed. Story-like and relationship-history material carries consent levels. Legal pages are marked `legal_advice: false`, require human review, and preserve “as of 2026-05-29” status language.

## Bot attribution and human review

Generated pages use `NotingBot/...` identities and the required disclaimer. The review queue shows a bot draft and a simulated human correction for Legal / Bill Text Review.

## Markdown export

Each bundle contains `page.md`, `page.meta.json`, `sources.jsonl`, `evals.json`, `permissions.json`, `wiki-export.wikitext`, and revisions.

## Known limitations

The UI is intentionally plain. Fixtures are deterministic. Review actions are static affordances rather than persisted local mutations. Zod schemas are noted as a next step while TypeScript interfaces are authoritative.

## Next engineering steps

1. Add persisted local review mutations and bundle diff UI.
2. Replace schema placeholder with Zod validation for source and bundle sidecars.
3. Add downloadable zip export.
4. Add fixture import validation in CI.
5. Add optional authenticated storage once product flow is validated.
