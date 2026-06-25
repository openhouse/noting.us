import { Nav } from '../../../../components/Nav';
import { bundles } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Governance</h1>
      {bundles
        .filter((b) => b.pageType === 'Governance')
        .map((b) => (
          <div className="card" key={b.slug}>
            <a href={`/u/fairrentnyc/bundles/${b.slug}`}>{b.wikiTitle}</a>
            <p>
              {b.metadata.visibility} · {b.metadata.reviewStatus}
            </p>
          </div>
        ))}
    </>
  );
}
