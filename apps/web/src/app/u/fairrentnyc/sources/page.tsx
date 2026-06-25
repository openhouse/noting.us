import { Nav } from '../../../../components/Nav';
import { artifacts } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Sources</h1>
      {artifacts.map((a) => (
        <div className="card" key={a.id}>
          <h2>
            <a href={`/u/fairrentnyc/sources/${a.id}`}>{a.title}</a>
          </h2>
          <span className="badge">{a.sourceType}</span>
          <span className="badge">{a.visibility}</span>
          <span className="badge">public use: {String(a.publicUseAllowed)}</span>
          <p>{a.notes}</p>
        </div>
      ))}
    </>
  );
}
