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
