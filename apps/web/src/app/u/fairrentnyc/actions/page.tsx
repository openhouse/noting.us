import { Nav } from '../../../../components/Nav';
import { actions } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Live Action List</h1>
      {actions.map((a) => (
        <div className="card" key={a.action}>
          <b>{a.action}</b>
          <p>
            {a.ownerLabel} · {a.status} · {a.nextStep}
          </p>
        </div>
      ))}
    </>
  );
}
