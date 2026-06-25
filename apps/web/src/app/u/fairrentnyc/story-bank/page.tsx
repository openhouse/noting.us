import { Nav } from '../../../../components/Nav';
import { stories } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Story Bank / Consent Demo</h1>
      {stories.map((s) => (
        <div className="card warn" key={s.label}>
          <b>{s.label}</b>
          <p>
            Consent: {s.consentLevel}; public use allowed: {String(s.publicUseAllowed)}
          </p>
        </div>
      ))}
    </>
  );
}
