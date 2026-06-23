import { services } from "@/data/services";
import { Section, ServiceCard } from "@/components/ui";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Software services for businesses that need more than a basic website"
      description="We help companies digitize operations, launch products and replace manual workflows with reliable cloud-based systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} href="#contact" />
        ))}
      </div>
    </Section>
  );
}
