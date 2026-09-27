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
      className="bg-surface-alt"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft transition duration-200 hover:border-brand-indigo/50 hover:text-brand-indigo"
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
              className="card p-6"
            >
              <span className="icon-box">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-muted">{item.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
