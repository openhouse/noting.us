import { Nav } from '../../../../components/Nav';
import { bundles } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Eval Dashboard</h1>
      {bundles.flatMap((b) =>
        b.evals.map((e) => (
          <div className={`card ${e.status}`} key={b.slug + e.id}>
            <b>
              {b.wikiTitle}: {e.name}
            </b>
            <p>
              {e.status} — {e.notes}
            </p>
          </div>
        )),
      )}
    </>
  );
}
