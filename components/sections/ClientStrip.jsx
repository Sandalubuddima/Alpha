import { clients } from "@/data/clients";
import { Container } from "@/components/ui";

export default function ClientStrip() {
  return (
    <section className="border-y border-white/10 bg-slate-900/70 py-8">
      <Container>
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Work and clients connected with AlphaGen Coding
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client}
              className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-bold text-white"
            >
              {client}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
