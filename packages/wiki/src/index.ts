export * from './markdownToWikiText';
export const wikiPreviewLabel = 'MediaWiki-compatible preview (not a live sync).';
export const mediaWikiAdapterStub = {
  sync: () => {
    throw new Error('MediaWiki sync is intentionally stubbed for scaffold.');
  },
};
