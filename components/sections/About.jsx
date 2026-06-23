import { BriefcaseBusiness, CreditCard, Users, Zap } from "lucide-react";
import { Section } from "@/components/ui";

export default function About() {
  return (
    <Section id="about" eyebrow="About AlphaGen" title="Young, skilled and focused on real business software">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="text-lg leading-9 text-slate-300">
            AlphaGen Coding started from building real-world software projects during university and has grown into a
            software company focused on helping businesses digitize operations. Today, we build websites, SaaS
            platforms, business systems, POS solutions and IoT-integrated systems for Sri Lankan and international
            clients.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
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
            <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-slate-950/70 p-4">
              <item.icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <span className="font-semibold text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
