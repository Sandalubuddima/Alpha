import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui";

const whyChooseUs = [
  "Direct founder communication",
  "Fast development cycles",
  "Affordable compared to large agencies",
  "Modern technologies",
  "Local + foreign client experience",
  "Long-term support after launch",
  "Ability to build both software and IoT-integrated solutions",
];

export default function WhyChooseUs() {
  return (
    <Section
      eyebrow="Why Choose Us"
      title="A practical, founder-led software team"
      description="We keep communication direct, timelines realistic and solutions focused on business value."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div key={item} className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
            <p className="font-semibold leading-7 text-white">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
