"use client";

import Image from "next/image";
import { ArrowUpRight, MousePointerClick } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { BrowserBar } from "@/components/ui/BrowserFrame";
import { cn } from "@/lib/utils";

// The live site is rendered at a desktop viewport and scaled down to the card width.
const FRAME_WIDTH = 1440;
const FRAME_HEIGHT = 900; // 16:10, matches the container aspect ratio
const LOAD_TIMEOUT_MS = 8000;
const MOBILE_QUERY = "(max-width: 767px)";

type LivePreviewProps = {
  url: string;
  title: string;
  slug: string;
  /** Resolved at build time: false when the site is down or forbids framing. */
  embeddable?: boolean;
  /** Resolved at build time: true when /public/work/<slug>.webp exists. */
  hasFallbackImage?: boolean;
};

function subscribeToMobile(callback: () => void) {
  const query = window.matchMedia(MOBILE_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function LivePreview({
  url,
  title,
  slug,
  embeddable = true,
  hasFallbackImage = false,
}: LivePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  // null during SSR/hydration, then true/false once the viewport is known.
  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => null
  );

  const domain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const showFallback = !embeddable || timedOut;
  const waitingForTap = isMobile === true && !shouldLoad;

  // Keep the 1440px-wide frame scaled to exactly the container width.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_WIDTH));
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Tablet/desktop: set the iframe src only when the card is about to scroll into view.
  useEffect(() => {
    if (!embeddable || shouldLoad || isMobile !== false) return;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [embeddable, shouldLoad, isMobile]);

  // Give up on slow or silently blocked sites and show the fallback instead.
  useEffect(() => {
    if (!shouldLoad || loaded || timedOut) return;
    const timer = window.setTimeout(() => setTimedOut(true), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [shouldLoad, loaded, timedOut]);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <BrowserBar url={domain} live={!showFallback} />
      <div ref={containerRef} className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
        {showFallback ? (
          <PreviewFallback url={url} title={title} slug={slug} domain={domain} hasImage={hasFallbackImage} />
        ) : (
          <>
            {!loaded && <PreviewSkeleton title={title} animated={!waitingForTap} />}

            {shouldLoad && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 origin-top-left"
                style={{ width: FRAME_WIDTH, height: FRAME_HEIGHT, transform: `scale(${scale})` }}
              >
                <iframe
                  src={url}
                  title={`${title} live preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  tabIndex={-1}
                  onLoad={() => setLoaded(true)}
                  className={cn(
                    "pointer-events-none h-full w-full border-0 bg-white transition-opacity duration-500 motion-reduce:transition-none",
                    loaded ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            )}

            {waitingForTap ? (
              <button
                type="button"
                onClick={() => setShouldLoad(true)}
                className="absolute inset-0 z-10 flex items-end justify-center pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-indigo"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-soft ring-1 ring-line backdrop-blur">
                  <MousePointerClick className="h-3.5 w-3.5 text-brand-indigo" aria-hidden="true" />
                  Tap to load preview
                </span>
              </button>
            ) : (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live site (opens in a new tab)`}
                className="group/link absolute inset-0 z-10 flex items-center justify-center bg-night/0 outline-none transition-colors duration-300 hover:bg-night/40 focus-visible:bg-night/40"
              >
                <span className="inline-flex translate-y-1 items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lifted transition duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100 group-focus-visible/link:translate-y-0 group-focus-visible/link:opacity-100">
                  Visit live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function PreviewSkeleton({ title, animated }: { title: string; animated: boolean }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-surface-alt", animated && "shimmer")} aria-hidden="true">
      <div className="flex items-center justify-between px-[5%] pt-[4%]">
        <span className="h-2 w-[18%] rounded-full bg-slate-200" />
        <span className="flex w-[34%] justify-end gap-[8%]">
          <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
          <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
          <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
        </span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="text-base font-bold tracking-[-0.02em] text-muted sm:text-lg">{title}</span>
        <span className="h-1.5 w-24 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

function PreviewFallback({
  url,
  title,
  slug,
  domain,
  hasImage,
}: {
  url: string;
  title: string;
  slug: string;
  domain: string;
  hasImage: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 overflow-hidden p-6 text-center">
      {hasImage ? (
        <>
          <Image
            src={`/work/${slug}.webp`}
            alt={`${title} website screenshot`}
            fill
            sizes="(min-width: 1024px) 460px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/45 to-night/10" aria-hidden="true" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-brand-button" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.14)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
            aria-hidden="true"
          />
        </>
      )}
      <p className="relative text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">{title}</p>
      <p className="relative text-sm font-medium text-white/85">{domain}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-3 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lifted transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Visit live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
