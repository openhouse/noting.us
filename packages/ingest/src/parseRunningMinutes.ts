import { stableSegmentId, type SourceArtifact, type SourceSegment } from '@noting/core';
export function parseRunningMinutes(raw: string): SourceArtifact {
  const status = raw.match(/Source status date:\s*(\d{4}-\d{2}-\d{2})/)?.[1] ?? '2026-05-29';
  const sections = [...raw.matchAll(/^##\s+(.+)\n([\s\S]*?)(?=^##\s+|$(?![\s\S]))/gm)];
  const segments: SourceSegment[] = sections.map((m, i) => ({
    artifactId: 'running-minutes-2026-05-29',
    id: stableSegmentId(i + 1),
    heading: m[1].trim(),
    text: m[2].trim().replace(/\n+/g, ' '),
    visibility: 'team_internal',
    consentLevel: 'unknown',
    publicUseAllowed: false,
  }));
  return {
    id: 'running-minutes-2026-05-29',
    title: 'Commercial Rent Stabilization Collaboration — Running Minutes',
    sourceType: 'running_minutes',
    importedAt: '2026-06-23T09:00:00Z',
    sourceStatusDate: status,
    visibility: 'team_internal',
    consentLevel: 'unknown',
    publicUseAllowed: false,
    legalAdvice: false,
    notes: 'Shortened demo excerpt; not complete campaign record.',
    segments,
  };
}
