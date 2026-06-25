import type { SourceArtifact } from '@noting/core';
import { parseRunningMinutes } from '@noting/ingest';
export const runningMinutesExcerpt = `# Commercial Rent Stabilization Collaboration — Running Minutes Excerpt

Source status date: 2026-05-29
Default visibility: team_internal
Fixture note: shortened demo excerpt; not complete campaign record.

## Start Here
Commercial Rent Stabilization work is organizing to protect small businesses, cultural spaces, nonprofits, worker co-ops, immigrant merchants, venues, artist spaces, and neighborhood-serving commercial tenants from extreme rent shocks and displacement.

## Working Frame
City + State, both by design. Aligned, not identical.

## Shared Goal
Build one stronger movement, not competing city/state or SBU / Fair Rent NYC / NYC Artist Coalition lanes.

## Use Rules
Use this as shared memory, not a perfect transcript. Keep updates brief, factual, action-oriented, and careful with sensitive tenant and business information.

## Story Consent Levels
Public; Anonymized; Confidential / internal only; Needs follow-up before sharing.

## Current Shared Language
CRS gives small businesses and cultural spaces a fair chance to renew leases with predictable increases so neighborhoods do not lose local anchors to rent shocks.

## City Lane
The city lane remains important. Confirm current Council status before broad release.

## State Lane
The Albany bill is the live introduced vehicle as of the source date.

## Legal / Bill Text Principle
Keep rent-stabilization guardrails, right-to-renewal language, and automatic-renewal risk distinct.

## Current Bill-Posture Note
Keep core CRS focused, universal, and winnable. Treat SBJSA-derived renewal / tenure language, vacancy penalties, emergency provisions, square-footage caps, and Albany-only edits as questions for separate legal / policy review before settled campaign position.

## Data / Signup Principle
Every signup should lead to clear follow-up. Parallel lists are acceptable only if source, consent, owner, and follow-up are clear.

## Event Follow-Up Principle
Name the source and role clearly: host, speaker, tabling / outreach lead, data owner, and follow-up owner. Do not merge partner lists without consent and an agreed handoff.
`;
export const movementMap: SourceArtifact = {
  id: 'movement-map-policy-lineages',
  title: 'NAC Movement Map in Terms of Policy Lineages',
  sourceType: 'visual_map',
  importedAt: '2026-06-23T09:00:00Z',
  sourceStatusDate: '2026-05-29',
  visibility: 'team_internal',
  consentLevel: 'unknown',
  publicUseAllowed: false,
  legalAdvice: false,
  notes: 'Structured fixture, no image OCR.',
  segments: [
    {
      artifactId: 'movement-map-policy-lineages',
      id: 'seg-lineage',
      heading: 'Lineage',
      text: 'The map separates SBJSA, CRS, city Council, and Albany lanes and flags wedge traps to avoid.',
      visibility: 'team_internal',
      consentLevel: 'unknown',
      publicUseAllowed: false,
    },
  ],
};
export const legalRedline: SourceArtifact = {
  id: 'legislative-provenance-redline-2019-2025',
  title: 'NAC / Commercial Rent Stabilization: Legislative Provenance Redline, 2019–2025',
  sourceType: 'legislative_redline',
  importedAt: '2026-06-23T09:00:00Z',
  sourceStatusDate: '2026-05-29',
  visibility: 'restricted',
  consentLevel: 'unknown',
  publicUseAllowed: false,
  legalAdvice: false,
  notes: 'Orientation and provenance tool, not legal advice.',
  segments: [
    {
      artifactId: 'legislative-provenance-redline-2019-2025',
      id: 'seg-how-to-read',
      heading: 'How to read',
      text: 'Use the redline to orient lineage among Intro 93, Fair Rent NYC recommendations, SBJSA-derived renewal language, Albany bills, and provisions needing legal review.',
      visibility: 'restricted',
      consentLevel: 'unknown',
      publicUseAllowed: false,
    },
  ],
};
export const archivalBoundary: SourceArtifact = {
  id: 'archival-email-consent-boundary',
  title: '#FairRentNYC Archival: Relationship-history consent boundary',
  sourceType: 'email_archive',
  importedAt: '2026-06-23T09:00:00Z',
  sourceStatusDate: '2026-05-29',
  visibility: 'restricted',
  consentLevel: 'confidential_internal_only',
  publicUseAllowed: false,
  legalAdvice: false,
  notes: 'Privacy boundary fixture; no private emails included.',
  segments: [
    {
      artifactId: 'archival-email-consent-boundary',
      id: 'seg-consent',
      heading: 'Consent boundary',
      text: 'Relationship-history material must not become public campaign copy without current consent and review.',
      visibility: 'restricted',
      consentLevel: 'confidential_internal_only',
      publicUseAllowed: false,
    },
  ],
};
export function sourceArtifacts(): SourceArtifact[] {
  return [parseRunningMinutes(runningMinutesExcerpt), movementMap, legalRedline, archivalBoundary];
}
