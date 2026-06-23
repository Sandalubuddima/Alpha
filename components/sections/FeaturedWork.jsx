import { portfolio } from "@/data/portfolio";
import { PortfolioCard, Section } from "@/components/ui";

export default function FeaturedWork() {
  return (
    <Section
      id="work"
      eyebrow="Featured Work"
      title="Websites, products and private systems built for real business needs"
      description="A mix of public client websites, AlphaGen product work and private business systems."
      className="bg-slate-900/60"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((project) => (
          <PortfolioCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
