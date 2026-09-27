import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/ui";
import { cn } from "@/lib/utils";

// Bento order and sizing for the 4-column desktop grid (3 even rows).
const layout = [
  { title: "Custom Web Applications", span: "md:col-span-2", illustration: TableIllustration },
  { title: "Business Websites" },
  { title: "POS Systems" },
  { title: "Gym Management Systems" },
  { title: "IoT & Device-Integrated Systems" },
  { title: "SaaS Product Development", span: "md:col-span-2", illustration: ChartIllustration },
  { title: "UI/UX Design", span: "lg:col-span-2" },
  { title: "Cloud Deployment & Maintenance", span: "lg:col-span-2" },
];

export default function Services() {
  const cards = layout
    .map((item) => ({ ...item, service: services.find((service) => service.title === item.title) }))
    .filter((item) => item.service);

  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Software services for businesses that need more than a basic website"
      description="We help companies digitize operations, launch products and replace manual workflows with reliable cloud-based systems."
      className="bg-white"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ service, span, illustration: Illustration }) => {
          const Icon = service.icon;
          const featured = Boolean(Illustration);

          return (
            <a
              key={service.title}
              href="#contact"
              className={cn(
                "card group flex flex-col overflow-hidden p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-indigo",
                featured && "sm:grid sm:grid-cols-[1fr_1.05fr] sm:gap-6",
                span
              )}
            >
              <div className="flex flex-col">
                <span className="icon-box mb-5">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className={cn("font-bold tracking-[-0.02em] text-ink", featured ? "text-xl" : "text-lg")}>
                  {service.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-muted">{service.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-indigo">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
              {featured && (
                <div aria-hidden="true" className="mt-6 sm:mt-0">
                  <Illustration />
                </div>
              )}
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function IllustrationShell({ children }) {
  return (
    <div className="flex h-full min-h-[180px] flex-col rounded-xl border border-line bg-surface-alt p-3">
      <div className="mb-3 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
      </div>
      {children}
    </div>
  );
}

function TableIllustration() {
  const rows = [
    ["w-16", "bg-emerald-400"],
    ["w-20", "bg-brand-indigo"],
    ["w-12", "bg-amber-400"],
    ["w-[4.5rem]", "bg-brand-indigo"],
  ];

  return (
    <IllustrationShell>
      <div className="flex flex-1 gap-3">
        <div className="hidden w-10 flex-col gap-2 rounded-lg bg-white p-2 sm:flex">
          <span className="h-1.5 rounded-full bg-brand-indigo/70" />
          <span className="h-1.5 rounded-full bg-line" />
          <span className="h-1.5 rounded-full bg-line" />
          <span className="h-1.5 rounded-full bg-line" />
        </div>
        <div className="flex flex-1 flex-col gap-2 rounded-lg bg-white p-2.5 shadow-soft">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="h-2 w-16 rounded-full bg-ink/80" />
            <span className="h-4 w-10 rounded-md bg-brand-gradient" />
          </div>
          {rows.map(([width, dot], index) => (
            <div key={index} className="flex items-center gap-2 py-0.5">
              <span className="h-4 w-4 rounded-full bg-tint" />
              <span className={cn("h-1.5 rounded-full bg-slate-200", width)} />
              <span className={cn("ml-auto h-1.5 w-1.5 rounded-full", dot)} />
              <span className="h-1.5 w-8 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </IllustrationShell>
  );
}

function ChartIllustration() {
  const bars = ["h-[35%]", "h-[50%]", "h-[42%]", "h-[62%]", "h-[55%]", "h-[74%]", "h-[68%]", "h-[90%]"];

  return (
    <IllustrationShell>
      <div className="flex flex-1 flex-col rounded-lg bg-white p-3 shadow-soft">
        <div className="mb-3 flex items-center justify-between">
          <div className="grid gap-1.5">
            <span className="h-1.5 w-12 rounded-full bg-slate-200" />
            <span className="h-2.5 w-20 rounded-full bg-ink/80" />
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5">
            <span className="block h-1.5 w-6 rounded-full bg-emerald-400" />
          </span>
        </div>
        <div className="flex flex-1 items-end gap-1.5 border-b border-line">
          {bars.map((height, index) => (
            <span
              key={index}
              className={cn(
                "flex-1 rounded-t-[4px] transition-all duration-500",
                height,
                index === bars.length - 1 ? "bg-brand-gradient" : "bg-brand-indigo/20 group-hover:bg-brand-indigo/30"
              )}
            />
          ))}
        </div>
      </div>
    </IllustrationShell>
  );
}
