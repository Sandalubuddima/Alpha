// Server-only, runs while the page is prerendered at build time.
// Returns false when a site is unreachable, returns an error status, or forbids framing
// (X-Frame-Options / CSP frame-ancestors) — browsers still fire iframe onLoad for their
// own error pages, so these cases can't be detected reliably on the client.
const SITE_ORIGIN_PATTERN = /alphagencoding\.com/i;

export async function checkEmbeddable(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
      headers: { "user-agent": "Mozilla/5.0 (compatible; AlphaGenPreviewCheck/1.0)" },
    });
    await response.body?.cancel();

    if (!response.ok) return false;

    const frameOptions = response.headers.get("x-frame-options");
    if (frameOptions && /deny|sameorigin/i.test(frameOptions)) return false;

    const frameAncestors = response.headers.get("content-security-policy")?.match(/frame-ancestors([^;]*)/i);
    if (frameAncestors) {
      const sources = frameAncestors[1].trim();
      if (!/(^|\s)\*(\s|$)/.test(sources) && !SITE_ORIGIN_PATTERN.test(sources)) return false;
    }

    return true;
  } catch {
    return false;
  }
}
