import { CheckCircle2, GraduationCap } from "lucide-react";
import { productFeatures } from "@/data/portfolio";
import { Button, Section } from "@/components/ui";

export default function Products() {
  return (
    <Section id="products" eyebrow="Product" title="ClassFlow: Smart Tuition Class Management System">
      <div className="grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
            <GraduationCap className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="text-3xl font-black text-white">Built for tuition classes and institutes</h3>
          <p className="mt-5 text-base leading-8 text-slate-300">
            ClassFlow helps institutes manage attendance, students, payments, online classes and teacher workflows from
            one modern platform.
          </p>
          <Button href="https://classflow.lk" external className="mt-7">
            Visit ClassFlow
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {productFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-2xl bg-slate-950/70 p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
              <span className="font-semibold text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
