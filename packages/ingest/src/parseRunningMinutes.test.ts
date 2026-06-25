import { describe, expect, it } from 'vitest';
import { parseRunningMinutes } from './parseRunningMinutes';
it('creates stable segment ids and preserves status date', () => {
  const a = parseRunningMinutes('# T\n\nSource status date: 2026-05-29\n\n## One\nA\n\n## Two\nB');
  expect(a.sourceStatusDate).toBe('2026-05-29');
  expect(a.segments.map((s) => s.id)).toEqual(['seg-0001', 'seg-0002']);
  expect(a.visibility).toBe('team_internal');
});
