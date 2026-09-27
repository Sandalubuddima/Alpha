import { CheckCircle2, GraduationCap } from "lucide-react";
import { productFeatures } from "@/data/portfolio";
import { Button, Section } from "@/components/ui";

export default function Products() {
  return (
    <Section id="products" eyebrow="Product" title="ClassFlow: Smart Tuition Class Management System" className="bg-white">
      <div className="grid gap-8 rounded-3xl border border-line bg-gradient-to-br from-tint via-white to-surface-alt p-6 shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-button text-white shadow-brand">
            <GraduationCap className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="text-balance text-[1.75rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-3xl">Built for tuition classes and institutes</h3>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-body">
            ClassFlow helps institutes manage attendance, students, payments, online classes and teacher workflows from
            one modern platform.
          </p>
          <Button href="https://classflow.lk" external className="mt-7">
            Visit ClassFlow
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {productFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft transition duration-200 hover:border-brand-indigo/30">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-indigo" aria-hidden="true" />
              <span className="font-semibold text-ink">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
