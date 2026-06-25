import { Nav } from '../../../../../components/Nav';
import { bundles } from '../../../../../lib/demo';
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const p = await params;
  const slug = p.slug?.join('/') || 'main-page';
  const b = bundles.find((x) => x.slug === slug) ?? bundles[0];
  return (
    <>
      <Nav />
      <article className="card">
        <h1>{b.wikiTitle}</h1>
        <p>
          <span className="badge">{b.pageType}</span>
          <span className="badge">{b.metadata.reviewStatus}</span>
          <span className="badge">source date {b.metadata.sourceStatusDate}</span>
        </p>
        <pre>{b.markdown.replace(/^---[\s\S]*?---/, '').trim()}</pre>
      </article>
    </>
  );
}
