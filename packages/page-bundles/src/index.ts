import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import JSZip from 'jszip';
import {
  type PageBundle,
  type ReviewEvent,
  ExportManifestSchema,
  PageBundleSchema,
  ReviewEventSchema,
} from '@noting/core';

export function exportMarkdown(bundle: PageBundle) {
  return {
    pageMd: bundle.markdown,
    metadata: bundle.metadata,
    sources: bundle.sources,
    evals: bundle.evals,
    permissions: bundle.permissions,
    wikiExport: bundle.wikiPreview,
  };
}

export function validatePageBundle(bundle: PageBundle) {
  const parsed = PageBundleSchema.safeParse(bundle);
  if (!parsed.success) return parsed;
  const artifactIds = new Set(bundle.metadata.sourceArtifacts);
  const missingArtifact = bundle.sources.find((source) => !artifactIds.has(source.artifactId));
  if (missingArtifact) {
    return PageBundleSchema.safeParse({ ...bundle, id: '' });
  }
  return parsed;
}

export async function readPageBundle(bundlePath: string): Promise<PageBundle> {
  const [markdown, metadataRaw, sourcesRaw, evalsRaw, permissionsRaw, wikiPreview] =
    await Promise.all([
      readFile(path.join(bundlePath, 'page.md'), 'utf8'),
      readFile(path.join(bundlePath, 'page.meta.json'), 'utf8'),
      readFile(path.join(bundlePath, 'sources.jsonl'), 'utf8'),
      readFile(path.join(bundlePath, 'evals.json'), 'utf8'),
      readFile(path.join(bundlePath, 'permissions.json'), 'utf8'),
      readFile(path.join(bundlePath, 'wiki-export.wikitext'), 'utf8'),
    ]);
  await stat(path.join(bundlePath, 'revisions'));
  const metadata = JSON.parse(metadataRaw);
  const sources = sourcesRaw
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const bundle: PageBundle = {
    id: metadata.notingId ?? metadata.noting_id,
    slug: path.basename(bundlePath),
    wikiTitle: metadata.wikiTitle ?? metadata.wiki_title,
    pageType: metadata.pageType ?? metadata.page_type,
    markdown,
    metadata: {
      notingId: metadata.notingId ?? metadata.noting_id,
      status: metadata.status,
      reviewStatus: metadata.reviewStatus ?? metadata.review_status,
      visibility: metadata.visibility,
      consentLevel: metadata.consentLevel,
      generatedBy: metadata.generatedBy ?? metadata.generated_by,
      createdAt: metadata.createdAt,
      sourceArtifacts: metadata.sourceArtifacts ?? metadata.source_artifacts,
      sourceStatusDate: metadata.sourceStatusDate ?? metadata.source_status_date,
      publicUseAllowed: metadata.publicUseAllowed ?? metadata.public_use_allowed,
      legalAdvice: metadata.legalAdvice ?? metadata.legal_advice,
    },
    sources,
    evals: JSON.parse(evalsRaw),
    permissions: JSON.parse(permissionsRaw),
    wikiPreview,
  };
  PageBundleSchema.parse(bundle);
  return bundle;
}

export async function writePageBundle(bundle: PageBundle, bundlePath: string) {
  PageBundleSchema.parse(bundle);
  await mkdir(path.join(bundlePath, 'revisions'), { recursive: true });
  await writeFile(path.join(bundlePath, 'page.md'), bundle.markdown);
  await writeFile(
    path.join(bundlePath, 'page.meta.json'),
    JSON.stringify(bundle.metadata, null, 2),
  );
  await writeFile(
    path.join(bundlePath, 'sources.jsonl'),
    bundle.sources.map((source) => JSON.stringify(source)).join('\n') + '\n',
  );
  await writeFile(path.join(bundlePath, 'evals.json'), JSON.stringify(bundle.evals, null, 2));
  await writeFile(
    path.join(bundlePath, 'permissions.json'),
    JSON.stringify(bundle.permissions, null, 2),
  );
  await writeFile(path.join(bundlePath, 'wiki-export.wikitext'), bundle.wikiPreview);
}

export async function listPageBundles(universeSlug: string, contentRoot = 'content/demo') {
  const bundlesRoot = path.join(contentRoot, universeSlug, 'bundles');
  const entries = await readdir(bundlesRoot, { withFileTypes: true });
  return Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => readPageBundle(path.join(bundlesRoot, entry.name))),
  );
}

export async function diffBundleRevisions(bundlePath: string) {
  const revisionsPath = path.join(bundlePath, 'revisions');
  const entries = (await readdir(revisionsPath)).sort();
  return entries.map((entry) => ({ file: entry, path: path.join(revisionsPath, entry) }));
}

export async function readReviewEvents(eventsPath: string): Promise<ReviewEvent[]> {
  const raw = await readFile(eventsPath, 'utf8');
  return raw
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((line) => ReviewEventSchema.parse(JSON.parse(line)));
}

export async function exportBundleZip(
  bundlePath: string,
  targetPath: string,
  universeSlug = 'fairrentnyc',
) {
  const bundle = await readPageBundle(bundlePath);
  const files = [
    'page.md',
    'page.meta.json',
    'sources.jsonl',
    'evals.json',
    'permissions.json',
    'wiki-export.wikitext',
  ];
  const zip = new JSZip();
  for (const file of files) zip.file(file, await readFile(path.join(bundlePath, file)));
  const revisionNames = await readdir(path.join(bundlePath, 'revisions'));
  for (const revision of revisionNames)
    zip.file(`revisions/${revision}`, await readFile(path.join(bundlePath, 'revisions', revision)));
  const manifest = ExportManifestSchema.parse({
    id: `export:${universeSlug}:${bundle.slug}`,
    universeSlug,
    bundleSlug: bundle.slug,
    createdAt: new Date().toISOString(),
    files: [
      ...files,
      ...revisionNames.map((revision) => `revisions/${revision}`),
      'export-manifest.json',
    ],
    preserves: [
      'visibility',
      'reviewStatus',
      'sourceIds',
      'citationData',
      'consentLevel',
      'publicUseAllowed',
      'legalAdvice',
      'sourceStatusDate',
      'evalResults',
      'botAttribution',
    ],
    publicSafe: bundle.permissions.exportAllowed && bundle.metadata.publicUseAllowed,
    reviewStatus: bundle.metadata.reviewStatus,
    visibility: bundle.metadata.visibility,
    consentLevel: bundle.metadata.consentLevel,
    sourceStatusDate: bundle.metadata.sourceStatusDate,
    generatedBy: bundle.metadata.generatedBy,
  });
  zip.file('export-manifest.json', JSON.stringify(manifest, null, 2));
  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, await zip.generateAsync({ type: 'nodebuffer' }));
  return manifest;
}

export const readBundleStub = readPageBundle;
export function writeBundleStub() {
  return 'Use writePageBundle(bundle, path).';
}
