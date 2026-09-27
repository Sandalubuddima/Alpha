import { process } from "@/data/process";
import { Section } from "@/components/ui";

export default function Process() {
  return (
    <Section id="process" eyebrow="Process" title="From idea to launch in five clear steps" className="bg-white">
      <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
        {/* Connector: vertical on mobile, horizontal through the circle centres on desktop */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-brand-blue via-brand-indigo to-brand-violet opacity-40 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-5 lg:h-px lg:w-auto lg:bg-gradient-to-r"
        />
        {process.map((step, index) => (
          <li key={step.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient p-px shadow-brand">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-sm font-bold text-brand-indigo">
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
            <div className="lg:mt-6">
              <step.icon className="mb-3 h-5 w-5 text-brand-indigo lg:mx-auto" aria-hidden="true" />
              <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-muted lg:mx-auto lg:max-w-[22ch]">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
