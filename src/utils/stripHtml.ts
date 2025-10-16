export function stripHtml(html?: string): string | undefined {
  if (!html) return undefined;
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const text = tmp.textContent || tmp.innerText || '';
  return text.trim().replace(/\s+\n/g, '\n');
}
