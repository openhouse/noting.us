export function markdownToWikiText(markdown: string): string {
  return markdown
    .replace(/^### (.*)$/gm, '=== $1 ===')
    .replace(/^## (.*)$/gm, '== $1 ==')
    .replace(/^# (.*)$/gm, '= $1 =')
    .replace(/^- /gm, '* ')
    .replace(/\[source:([^#\]]+)#([^\]]+)\]/g, '<ref source="$1" segment="$2" />');
}
