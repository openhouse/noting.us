export type ReviewStatus='needs_human_review'|'approved'|'changes_requested'|'rejected'|'disputed'|'superseded';
export type Visibility='public'|'team_internal'|'restricted'|'sensitive'|'secret'|'do_not_ingest'|'do_not_summarize'|'do_not_store';
export type ConsentLevel='public'|'anonymized'|'confidential_internal_only'|'needs_follow_up_before_sharing'|'unknown';
export type PageType='Main'|'Overview'|'Meeting'|'Decision'|'OpenQuestion'|'ActionList'|'StoryBank'|'PolicyLineage'|'LegalReview'|'SourceCatalog'|'Governance'|'Eval'|'Bot'|'Person'|'Organization'|'Workstream';
export interface Universe{ id:string; slug:string; name:string; subdomain:string; visibility:Visibility; description:string; sourceStatusDate?:string }
export interface Person{ id:string; displayName:string; role?:string; organizationIds?:string[] }
export interface Organization{ id:string; name:string; shortName?:string; role?:string }
export interface BotIdentity{ id:string; name:string; purpose:string; disclaimer:string }
export interface SourceSegment{ id:string; artifactId:string; heading?:string; speaker?:string; timestamp?:string; text:string; visibility:Visibility; consentLevel?:ConsentLevel; publicUseAllowed:boolean }
export interface SourceArtifact{ id:string; title:string; sourceType:'running_minutes'|'transcript'|'document'|'visual_map'|'legislative_redline'|'email_archive'|'source_catalog'|'synthetic_fixture'; occurredAt?:string; importedAt:string; sourceStatusDate?:string; visibility:Visibility; consentLevel?:ConsentLevel; publicUseAllowed:boolean; legalAdvice:false; notes?:string; segments:SourceSegment[] }
export interface Citation{ id:string; artifactId:string; segmentIds:string[]; label:string; quote?:string }
export interface EvalResult{ id:string; name:string; status:'pass'|'warning'|'fail'|'needs_review'; notes:string }
export interface PageMetadata{ notingId:string; status:'seeded'|'generated_draft'|'human_edited'|'published_preview'; reviewStatus:ReviewStatus; visibility:Visibility; consentLevel?:ConsentLevel; generatedBy?:string; createdAt:string; sourceArtifacts:string[]; sourceStatusDate?:string; publicUseAllowed:boolean; legalAdvice:false }
export interface PermissionsPolicy{ visibility:Visibility; exportAllowed:boolean; requiresHumanReview:boolean; sourceQuoteVisibility:'visible'|'restricted'|'redacted'; retentionPolicy:'default'|'short'|'do_not_store'; sensitivePeople:string[] }
export interface PageBundle{ id:string; slug:string; wikiTitle:string; pageType:PageType; markdown:string; metadata:PageMetadata; sources:Citation[]; evals:EvalResult[]; permissions:PermissionsPolicy; wikiPreview:string }
export type PolicyLane='city'|'state'|'legal_bill_text'|'coalition'|'data'|'story_bank'|'media';
export interface Workstream{ id:string; name:string; lane:PolicyLane; summary:string; ownerIds:string[]; status:'active'|'open'|'paused'|'later'|'needs_review' }
export interface ActionItem{ id:string; action:string; ownerLabel:string; status:string; nextStep:string; sourceCitationIds:string[] }
export interface OpenQuestion{ id:string; lane:PolicyLane; question:string; reviewNeeded?:string; sourceCitationIds:string[] }
export interface StoryLead{ id:string; label:string; neighborhoodOrDistrict?:string; consentLevel:ConsentLevel; ownerLabel?:string; nextStep?:string; publicUseAllowed:boolean }
export interface PolicyLineageNode{ id:string; yearOrRange:string; lane:'nyc_council'|'ny_senate'|'ny_assembly'|'sbjsa'|'crs'; title:string; sponsorOrActor?:string; sourceCitationIds:string[] }
export interface LegislativeVehicle{ id:string; title:string; jurisdiction:'nyc'|'ny_state'; sessionOrYear:string; statusAsOfSource?:string; sourceCitationIds:string[] }
