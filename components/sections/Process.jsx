import { process } from "@/data/process";
import { Section } from "@/components/ui";

export default function Process() {
  return (
    <Section id="process" eyebrow="Process" title="From idea to launch in five clear steps" className="bg-slate-900/60">
      <div className="grid gap-5 md:grid-cols-5">
        {process.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <span className="text-sm font-black text-cyan-300">0{index + 1}</span>
            <step.icon className="mt-5 h-7 w-7 text-white" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
