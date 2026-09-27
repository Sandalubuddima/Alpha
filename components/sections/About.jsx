import { BriefcaseBusiness, CreditCard, Users, Zap } from "lucide-react";
import { Section } from "@/components/ui";

export default function About() {
  return (
    <Section id="about" eyebrow="About AlphaGen" title="Young, skilled and focused on real business software" className="bg-white">
      <div className="grid gap-8 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="max-w-[60ch] text-[17px] leading-[1.7] text-body sm:text-lg">
            AlphaGen Coding started from building real-world software projects during university and has grown into a
            software company focused on helping businesses digitize operations. Today, we build websites, SaaS
            platforms, business systems, POS solutions and IoT-integrated systems for Sri Lankan and international
            clients.
          </p>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-muted">
            We do not try to look like a huge enterprise agency. We focus on being accessible, technically sharp and
            practical: understanding your business, building what matters and supporting it after launch.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Users, label: "Founder-led communication" },
            { icon: BriefcaseBusiness, label: "Business-first planning" },
            { icon: Zap, label: "Fast iteration and support" },
            { icon: CreditCard, label: "Systems that improve operations" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-line bg-surface-alt p-4">
              <span className="icon-box h-10 w-10 rounded-lg">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold text-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
