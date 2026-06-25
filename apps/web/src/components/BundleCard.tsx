import type {PageBundle} from '@noting/core';
export function BundleCard({b}:{b:PageBundle}){return <div className="card"><h3><a href={`/u/fairrentnyc/bundles/${b.slug}`}>{b.wikiTitle}</a></h3><span className="badge">{b.pageType}</span><span className="badge">{b.metadata.reviewStatus}</span><span className="badge">{b.metadata.visibility}</span><p>{b.metadata.generatedBy}</p></div>}
