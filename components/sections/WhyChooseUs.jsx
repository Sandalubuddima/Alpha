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
      className="bg-surface-alt"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div key={item} className="card flex items-center gap-4 p-5">
            <span className="icon-box h-10 w-10 rounded-lg">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="font-semibold leading-snug text-ink">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
