import { exportBundleZip } from '@noting/page-bundles';
const slug = process.argv[2] ?? 'legal-bill-text-review';
const manifest = await exportBundleZip(
  `content/demo/fairrentnyc/bundles/${slug}`,
  `content/demo/fairrentnyc/exports/${slug}.zip`,
);
console.log(`Exported ${slug} with ${manifest.files.length} files.`);
