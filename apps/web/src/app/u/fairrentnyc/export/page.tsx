import { Nav } from '../../../../components/Nav';
import { bundles } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Export Preview</h1>
      <p>
        Single-bundle ZIP export is available locally with{' '}
        <code>pnpm export:bundle legal-bill-text-review</code>. Each archive includes Markdown,
        sidecars, revisions, and <code>export-manifest.json</code>.
      </p>
      {bundles.map((bundle) => (
        <div className="card" key={bundle.slug}>
          <h2>{bundle.wikiTitle}</h2>
          <p>
            <code>content/demo/fairrentnyc/exports/{bundle.slug}.zip</code>
          </p>
          <p>
            Preserves visibility, review status, citations, consent, public-use flag, legal
            boundary, source date, evals, and bot attribution.
          </p>
        </div>
      ))}
    </>
  );
}
