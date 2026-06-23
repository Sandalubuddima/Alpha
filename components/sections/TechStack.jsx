import { Database, MonitorSmartphone, Wifi } from "lucide-react";
import { techStack } from "@/data/techstack";
import { Section } from "@/components/ui";

const techCategories = [
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    text: "Responsive interfaces for websites, dashboards and apps.",
  },
  {
    icon: Database,
    title: "Backend",
    text: "APIs, databases, authentication and business logic.",
  },
  {
    icon: Wifi,
    title: "Connected Systems",
    text: "IoT-ready workflows and device-integrated software.",
  },
];

export default function TechStack() {
  return (
    <Section
      eyebrow="Tech Stack"
      title="Modern tools for web, cloud and connected systems"
      description="We choose technology based on maintainability, performance and the client's long-term needs."
    >
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {techCategories.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <Icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
