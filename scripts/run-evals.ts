import { sourceArtifacts, generateFairRentPageBundles } from '@noting/fixtures';
const artifacts=sourceArtifacts(); const bundles=generateFairRentPageBundles(artifacts); let failures=0;
for(const b of bundles){for(const e of b.evals){console.log(`${e.status.toUpperCase()} ${b.slug} ${e.name}: ${e.notes}`); if(e.status==='fail') failures++;}}
if(failures) process.exit(1);
