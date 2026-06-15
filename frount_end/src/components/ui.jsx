import { cn } from "./utils";

export function Container({ children, className = "" }) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  headerClassName = "",
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className={cn("mx-auto mb-12 max-w-3xl text-center", headerClassName)}>
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-200 focus-visible:outline-cyan-200",
    secondary:
      "border border-white/15 bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white",
    ghost:
      "border border-white/15 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
    dark:
      "bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function ServiceCard({ icon, title, description, href }) {
  const Icon = icon;

  return (
    <a
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-950/30"
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      <span className="mt-5 inline-flex text-sm font-bold text-cyan-300 transition group-hover:translate-x-1">
        Learn more
      </span>
    </a>
  );
}

export function PortfolioCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{project.type}</p>
          <h3 className="mt-3 text-2xl font-bold text-white">{project.name}</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
          {project.status}
        </span>
      </div>
      <p className="flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300">
            {item}
          </span>
        ))}
      </div>
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm font-bold text-cyan-300 hover:text-cyan-200"
        >
          View Project
        </a>
      ) : (
        <span className="mt-6 text-sm font-bold text-slate-400">Private System</span>
      )}
    </article>
  );
}
