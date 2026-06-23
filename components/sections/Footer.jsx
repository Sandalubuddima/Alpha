import { navLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui";

const serviceLinks = ["Websites", "Custom Systems", "SaaS", "POS", "IoT", "Cloud Support"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <h2 className="text-2xl font-black text-white">AlphaGen Coding</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Sri Lankan software development company building websites, SaaS platforms, business systems, POS
              solutions and IoT-integrated applications.
            </p>
          </div>
          <FooterList title="Quick Links" items={navLinks} />
          <FooterList title="Services" items={serviceLinks.map((item) => ({ label: item, href: "#services" }))} />
          <div>
            <h3 className="font-bold text-white">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <span>{siteConfig.location}</span>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-300">
                {siteConfig.email}
              </a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AlphaGen Coding. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-400">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-cyan-300">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
