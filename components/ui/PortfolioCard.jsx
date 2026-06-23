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
