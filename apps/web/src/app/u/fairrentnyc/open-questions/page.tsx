import { Nav } from '../../../../components/Nav';
import { questions } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Open Questions by Lane</h1>
      {questions.map((q) => (
        <div className="card" key={q.question}>
          <span className="badge">{q.lane}</span>
          <p>{q.question}</p>
        </div>
      ))}
    </>
  );
}
