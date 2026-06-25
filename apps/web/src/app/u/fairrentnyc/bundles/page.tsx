import { Nav } from '../../../../components/Nav';
import { BundleCard } from '../../../../components/BundleCard';
import { bundles } from '../../../../lib/demo';
export default function Page() {
  return (
    <>
      <Nav />
      <h1>Markdown Page Bundles</h1>
      <div className="grid">
        {bundles.map((b) => (
          <BundleCard key={b.slug} b={b} />
        ))}
      </div>
    </>
  );
}
