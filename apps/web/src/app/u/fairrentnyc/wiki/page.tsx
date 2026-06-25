import { Nav } from '../../../../components/Nav';
import { bundles } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Wiki Index</h1>
      {bundles.slice(0, 12).map((b) => (
        <div className="card" key={b.slug}>
          <a href={`/u/fairrentnyc/wiki/${b.slug}`}>{b.wikiTitle}</a>
          <p>
            {b.pageType} · {b.metadata.reviewStatus}
          </p>
        </div>
      ))}
    </>
  );
}
