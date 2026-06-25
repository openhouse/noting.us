import { z } from 'zod';

export const ReviewStatusSchema = z.enum([
  'generated_draft',
  'needs_human_review',
  'approved',
  'changes_requested',
  'corrected',
  'rejected',
  'disputed',
  'superseded',
]);
export const VisibilitySchema = z.enum([
  'public',
  'team_internal',
  'restricted',
  'sensitive',
  'secret',
  'do_not_ingest',
  'do_not_summarize',
  'do_not_store',
]);
export const ConsentLevelSchema = z.enum([
  'public',
  'anonymized',
  'confidential_internal_only',
  'needs_follow_up_before_sharing',
  'unknown',
]);
export const PageTypeSchema = z.enum([
  'Main',
  'Overview',
  'Meeting',
  'Decision',
  'OpenQuestion',
  'ActionList',
  'StoryBank',
  'PolicyLineage',
  'LegalReview',
  'SourceCatalog',
  'Governance',
  'Eval',
  'Bot',
  'Person',
  'Organization',
  'Workstream',
]);

export const BotIdentitySchema = z.object({
  id: z.string(),
  name: z.string(),
  purpose: z.string(),
  disclaimer: z.string(),
});
export const UniverseSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  subdomain: z.string(),
  visibility: VisibilitySchema,
  description: z.string(),
  sourceStatusDate: z.string().optional(),
});
export const UniverseConfigSchema = z.object({
  slug: z.string(),
  name: z.string(),
  subdomain: z.string(),
  defaultVisibility: VisibilitySchema,
  navItems: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  pageTemplates: z.array(z.string()).default([]),
  evalProfile: z.array(z.string()).default([]),
  publicExportPolicy: z.record(z.string(), z.unknown()).default({}),
});
export const SourceSegmentSchema = z.object({
  id: z.string(),
  artifactId: z.string(),
  heading: z.string().optional(),
  speaker: z.string().optional(),
  timestamp: z.string().optional(),
  text: z.string().min(1),
  visibility: VisibilitySchema,
  consentLevel: ConsentLevelSchema.optional(),
  publicUseAllowed: z.boolean(),
});
export const SourceArtifactSchema = z.object({
  id: z.string(),
  title: z.string(),
  sourceType: z.enum([
    'running_minutes',
    'transcript',
    'document',
    'visual_map',
    'legislative_redline',
    'email_archive',
    'source_catalog',
    'synthetic_fixture',
  ]),
  occurredAt: z.string().optional(),
  importedAt: z.string(),
  sourceStatusDate: z.string().optional(),
  visibility: VisibilitySchema,
  consentLevel: ConsentLevelSchema.optional(),
  publicUseAllowed: z.boolean(),
  legalAdvice: z.literal(false),
  notes: z.string().optional(),
  segments: z.array(SourceSegmentSchema),
});
export const CitationSchema = z.object({
  id: z.string(),
  artifactId: z.string(),
  segmentIds: z.array(z.string()).min(1),
  label: z.string(),
  quote: z.string().optional(),
});
export const ClaimSchema = z.object({
  id: z.string(),
  text: z.string(),
  citationIds: z.array(z.string()).default([]),
  asOf: z.string().optional(),
  reviewStatus: ReviewStatusSchema.optional(),
});
export const EvalResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(['pass', 'warning', 'fail', 'needs_review']),
  notes: z.string(),
});
export const PageMetadataSchema = z.object({
  notingId: z.string(),
  status: z.enum(['seeded', 'generated_draft', 'human_edited', 'published_preview']),
  reviewStatus: ReviewStatusSchema,
  visibility: VisibilitySchema,
  consentLevel: ConsentLevelSchema.optional(),
  generatedBy: z.string().optional(),
  createdAt: z.string(),
  sourceArtifacts: z.array(z.string()),
  sourceStatusDate: z.string().optional(),
  publicUseAllowed: z.boolean(),
  legalAdvice: z.literal(false),
});
export const PermissionsPolicySchema = z.object({
  visibility: VisibilitySchema,
  exportAllowed: z.boolean(),
  requiresHumanReview: z.boolean(),
  sourceQuoteVisibility: z.enum(['visible', 'restricted', 'redacted']),
  retentionPolicy: z.enum(['default', 'short', 'do_not_store']),
  sensitivePeople: z.array(z.string()),
});
export const PageBundleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  wikiTitle: z.string(),
  pageType: PageTypeSchema,
  markdown: z.string(),
  metadata: PageMetadataSchema,
  sources: z.array(CitationSchema),
  evals: z.array(EvalResultSchema),
  permissions: PermissionsPolicySchema,
  wikiPreview: z.string(),
});
export const ReviewEventSchema = z.object({
  id: z.string(),
  universeSlug: z.string(),
  bundleSlug: z.string(),
  actorId: z.string(),
  actorKind: z.enum(['human', 'bot', 'system']),
  action: z.enum([
    'approve',
    'request_changes',
    'correct',
    'mark_disputed',
    'reject',
    'redact',
    'supersede',
  ]),
  createdAt: z.string(),
  note: z.string().optional(),
  patch: z.string().optional(),
  resultingReviewStatus: ReviewStatusSchema.optional(),
});
export const RevisionSchema = z.object({
  id: z.string(),
  bundleSlug: z.string(),
  createdAt: z.string(),
  actorId: z.string(),
  path: z.string(),
  note: z.string().optional(),
});
export const ExportManifestSchema = z.object({
  id: z.string(),
  universeSlug: z.string(),
  bundleSlug: z.string(),
  createdAt: z.string(),
  files: z.array(z.string()),
  preserves: z.array(z.string()),
  publicSafe: z.boolean(),
  reviewStatus: ReviewStatusSchema,
  visibility: VisibilitySchema,
  consentLevel: ConsentLevelSchema.optional(),
  sourceStatusDate: z.string().optional(),
  generatedBy: z.string().optional(),
});
export const StoryLeadSchema = z.object({
  id: z.string(),
  label: z.string(),
  neighborhoodOrDistrict: z.string().optional(),
  consentLevel: ConsentLevelSchema,
  ownerLabel: z.string().optional(),
  nextStep: z.string().optional(),
  publicUseAllowed: z.boolean(),
});
export const PolicyLineageNodeSchema = z.object({
  id: z.string(),
  yearOrRange: z.string(),
  lane: z.enum(['nyc_council', 'ny_senate', 'ny_assembly', 'sbjsa', 'crs']),
  title: z.string(),
  sponsorOrActor: z.string().optional(),
  sourceCitationIds: z.array(z.string()),
});
export const LegislativeVehicleSchema = z.object({
  id: z.string(),
  title: z.string(),
  jurisdiction: z.enum(['nyc', 'ny_state']),
  sessionOrYear: z.string(),
  statusAsOfSource: z.string().optional(),
  sourceCitationIds: z.array(z.string()),
});

export type ReviewEvent = z.infer<typeof ReviewEventSchema>;
export type ExportManifest = z.infer<typeof ExportManifestSchema>;
