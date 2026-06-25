import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { sourceArtifacts, generateFairRentPageBundles } from '@noting/fixtures';
import { SourceArtifactSchema, PageBundleSchema, ReviewEventSchema } from '@noting/core';

const root = 'content/demo/fairrentnyc';
const required = [
  'page.md',
  'page.meta.json',
  'sources.jsonl',
  'evals.json',
  'permissions.json',
  'wiki-export.wikitext',
  'revisions',
];
let failures = 0;
for (const artifact of sourceArtifacts()) SourceArtifactSchema.parse(artifact);
for (const bundle of generateFairRentPageBundles(sourceArtifacts())) {
  PageBundleSchema.parse(bundle);
  for (const file of required) {
    if (!existsSync(`${root}/bundles/${bundle.slug}/${file}`)) {
      console.error(`Missing ${bundle.slug}/${file}`);
      failures++;
    }
  }
  if (bundle.metadata.generatedBy && !bundle.metadata.reviewStatus) failures++;
  if (bundle.metadata.publicUseAllowed && bundle.permissions.visibility !== 'public') {
    console.error(`Public-safe metadata mismatch in ${bundle.slug}`);
    failures++;
  }
}
const eventsRaw = await readFile(`${root}/review-events.jsonl`, 'utf8');
for (const line of eventsRaw.trim().split('\n').filter(Boolean))
  ReviewEventSchema.parse(JSON.parse(line));
if (failures) process.exit(1);
console.log(
  `Validated ${sourceArtifacts().length} artifacts, ${generateFairRentPageBundles(sourceArtifacts()).length} bundles, and review events under ${root}.`,
);
