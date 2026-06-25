import type {PageBundle} from '@noting/core';
export function exportMarkdown(bundle:PageBundle){return {pageMd:bundle.markdown,metadata:bundle.metadata,sources:bundle.sources,evals:bundle.evals,permissions:bundle.permissions,wikiExport:bundle.wikiPreview}}
export function readBundleStub(slug:string){return `Read bundle ${slug} from content/demo/fairrentnyc/bundles in the scaffold.`}
export function writeBundleStub(){return 'Bundle writing is handled by scripts/seed-demo.ts for the demo scaffold.'}
