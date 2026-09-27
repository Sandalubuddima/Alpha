import { portfolio } from "@/data/portfolio";
import { PortfolioCard, PrivateSystemCard, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { publicAsset } from "@/lib/assets";
import { checkEmbeddable } from "@/lib/embeddable";

const FEATURED_PROJECT = "ClassFlow";

export default async function FeaturedWork() {
  const publicProjects = await Promise.all(
    portfolio
      .filter((project) => project.href)
      .map(async (project) => ({
        ...project,
        embeddable: await checkEmbeddable(project.href),
        hasFallbackImage: Boolean(publicAsset(`/work/${project.slug}.webp`)),
      }))
  );
  const privateSystems = portfolio.filter((project) => !project.href);

  return (
    <Section
      id="work"
      eyebrow="Featured Work"
      title="Websites, products and private systems built for real business needs"
      description="A mix of public client websites, AlphaGen product work and private business systems."
      className="bg-surface-alt"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {publicProjects.map((project) => {
          const featured = project.name === FEATURED_PROJECT;
          return (
            <div key={project.name} className={cn(featured && "md:col-span-2")}>
              <PortfolioCard project={project} featured={featured} />
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <div className="mb-6 flex items-center gap-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-ink">Private systems</h3>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {privateSystems.map((project) => (
            <PrivateSystemCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
