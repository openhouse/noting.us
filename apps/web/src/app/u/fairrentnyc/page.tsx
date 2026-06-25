import { Nav } from '../../../components/Nav';
import { universe, artifacts, bundles } from '../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>{universe.name}</h1>
      <p>{universe.description}</p>
      <div className="grid">
        <div className="card">
          <b>{artifacts.length}</b>
          <p>source artifacts</p>
        </div>
        <div className="card">
          <b>{bundles.length}</b>
          <p>page bundles/wiki previews</p>
        </div>
        <div className="card">
          <b>{universe.sourceStatusDate}</b>
          <p>source status date</p>
        </div>
      </div>
      <div className="card warn">
        <b>Core invariant:</b> Noting.us is not the authority; governed, editable, source-linked
        movement memory is.
      </div>
    </>
  );
}
