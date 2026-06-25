export function Nav() {
  const base = '/u/fairrentnyc';
  const links = [
    'sources',
    'bundles',
    'wiki',
    'review',
    'actions',
    'open-questions',
    'story-bank',
    'lineages',
    'governance',
    'evals',
    'export',
    'demo',
  ];
  return (
    <nav>
      <a href="/">Home</a>
      <a href={base}>Universe</a>
      {links.map((l) => (
        <a key={l} href={`${base}/${l}`}>
          {l}
        </a>
      ))}
    </nav>
  );
}
