import Image from "next/image";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

// Mini browser window. `src` should already be verified with publicAsset();
// when it is null a gradient placeholder with the project name is shown instead.
export function BrowserFrame({
  url,
  src,
  alt,
  name,
  sizes = "(min-width: 1024px) 400px, 100vw",
  priority = false,
  zoomOnHover = false,
  className = "",
  bodyClassName = "aspect-video",
}) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-xl border border-line bg-white", className)}>
      <BrowserBar url={url} />
      <div className={cn("relative overflow-hidden", bodyClassName)}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn(
              "object-cover object-top",
              zoomOnHover && "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            )}
          />
        ) : (
          <FramePlaceholder name={name} zoomOnHover={zoomOnHover} />
        )}
      </div>
    </div>
  );
}

// Window chrome: traffic-light dots, URL pill and an optional "Live" badge on the right.
export function BrowserBar({ url, live = false }) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-surface-alt px-3 py-2">
      <div className="flex w-[42px] shrink-0 gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      {url && (
        <div className="mx-auto flex min-w-0 max-w-[70%] flex-1 items-center justify-center gap-1.5 rounded-md border border-line bg-white px-3 py-1 text-[11px] font-medium text-muted">
          <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
          <span className="truncate">{url}</span>
        </div>
      )}
      <span className="flex w-[42px] shrink-0 justify-end">
        {live && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/15">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Live
          </span>
        )}
      </span>
    </div>
  );
}

function FramePlaceholder({ name, zoomOnHover }) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tint via-white to-[#F3EEFF]",
        zoomOnHover && "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      )}
    >
      <div className="bg-dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-violet/15 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-brand-blue/15 blur-2xl" aria-hidden="true" />
      <span className="text-gradient relative px-6 text-center text-xl font-bold tracking-[-0.02em] sm:text-2xl">
        {name}
      </span>
    </div>
  );
}
