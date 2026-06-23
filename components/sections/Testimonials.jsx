import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui";

export default function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="What clients appreciate"
      description="Short, practical feedback from businesses that worked with AlphaGen Coding."
      className="bg-slate-900/60"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.brand} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{testimonial.brand}</p>
            <blockquote className="mt-5 text-base leading-8 text-slate-200">&quot;{testimonial.quote}&quot;</blockquote>
            <div className="mt-6">
              <p className="font-bold text-white">{testimonial.person}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
