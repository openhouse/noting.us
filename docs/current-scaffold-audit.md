# Current Scaffold Audit

## Command results

- `pnpm install`: pass.
- `pnpm demo:seed`: pass; seeds 4 source artifacts and 16 page bundles.
- `pnpm validate:fixtures`: pass; validates artifacts, bundles, sidecars, and review events.
- `pnpm lint`: pass; web lint is a TypeScript check to avoid interactive `next lint` setup.
- `pnpm typecheck`: pass.
- `pnpm test`: pass.
- `pnpm evals`: pass with one intentional warning on the legal bundle decision-vs-discussion boundary.
- `pnpm build`: pass.

## Current route list

`/`, `/u/fairrentnyc`, `/u/fairrentnyc/sources`, `/u/fairrentnyc/sources/[id]`, `/u/fairrentnyc/bundles`, `/u/fairrentnyc/bundles/[slug]`, `/u/fairrentnyc/wiki`, `/u/fairrentnyc/wiki/[slug]`, `/u/fairrentnyc/review`, `/u/fairrentnyc/actions`, `/u/fairrentnyc/open-questions`, `/u/fairrentnyc/story-bank`, `/u/fairrentnyc/lineages`, `/u/fairrentnyc/governance`, `/u/fairrentnyc/evals`, `/u/fairrentnyc/export`, `/u/fairrentnyc/demo`.

## Package list

`@noting/core`, `@noting/ingest`, `@noting/page-bundles`, `@noting/wiki`, `@noting/evals`, `@noting/fixtures`, and `@noting/web`.

## Content root

Canonical content root: `content/demo/fairrentnyc`.

## Known failing tests/evals

No failing tests or evals. The legal review bundle intentionally reports a warning so the demo can show human review pressure.

## Private-data safety check

No raw private material was added. Fixtures remain synthetic, redacted, or safe excerpts and preserve consent/public-use boundaries.

## Next recommended PR split

1. Generalize `/u/fairrentnyc` to `/u/[universe]` using universe config.
2. Add a tiny non-legislative counter-fixture.
3. Add an interactive local review action flow instead of seeded review events only.
