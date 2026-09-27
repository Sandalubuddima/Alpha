import { ArrowUpRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import LivePreview from "@/components/LivePreview";

function Tags({ items }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}

// `project.embeddable` and `project.hasFallbackImage` are resolved at build time in FeaturedWork.
export function PortfolioCard({ project, featured = false }) {
  return (
    <article
      className={cn(
        "card group flex h-full flex-col overflow-hidden p-3",
        featured && "md:grid md:grid-cols-[1.25fr_1fr] md:items-center md:gap-2"
      )}
    >
      <LivePreview
        url={project.href}
        title={project.name}
        slug={project.slug}
        embeddable={project.embeddable}
        hasFallbackImage={project.hasFallbackImage}
      />
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-indigo">{project.type}</p>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/15">
            {project.status}
          </span>
        </div>
        <h3 className={cn("mt-3 font-bold tracking-[-0.02em] text-ink", featured ? "text-2xl lg:text-[1.75rem]" : "text-xl")}>
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-[1.7] text-muted">{project.description}</p>
        <Tags items={project.tech} />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold text-brand-indigo transition-colors duration-200 hover:text-brand-violet"
        >
          View live site
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

export function PrivateSystemCard({ project }) {
  const Icon = project.icon;

  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="icon-box">{Icon && <Icon className="h-5 w-5" aria-hidden="true" />}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-500/15">
          <Lock className="h-3 w-3" aria-hidden="true" />
          {project.status}
        </span>
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-brand-indigo">{project.type}</p>
      <h3 className="mt-2 text-lg font-bold tracking-[-0.02em] text-ink">{project.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-[1.7] text-muted">{project.description}</p>
      <Tags items={project.tech} />
    </article>
  );
}
