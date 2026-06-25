import { expect, it } from 'vitest';
import {
  consentBoundary,
  legalClaimBoundary,
  sourceGrounding,
  cityStateLaneClarity,
  staleStatusWarning,
} from './index';
import { sourceArtifacts, generateFairRentPageBundles } from '@noting/fixtures';
it('catches eval boundaries', () => {
  const a = sourceArtifacts();
  const b = generateFairRentPageBundles(a)[0];
  expect(sourceGrounding({ ...b, sources: [] }, a).status).toBe('fail');
  expect(
    consentBoundary({
      ...b,
      metadata: {
        ...b.metadata,
        consentLevel: 'confidential_internal_only',
        publicUseAllowed: true,
      },
    }).status,
  ).toBe('fail');
  expect(
    legalClaimBoundary({
      ...b,
      pageType: 'LegalReview',
      wikiTitle: 'Legal',
      metadata: { ...b.metadata, reviewStatus: 'approved' },
    }).status,
  ).toBe('warning');
  expect(cityStateLaneClarity({ ...b, markdown: 'city and state status' }).status).toBe('warning');
  expect(
    staleStatusWarning({
      ...b,
      markdown: 'current campaign ask',
      metadata: { ...b.metadata, sourceStatusDate: undefined, reviewStatus: 'approved' },
    }).status,
  ).toBe('warning');
});
