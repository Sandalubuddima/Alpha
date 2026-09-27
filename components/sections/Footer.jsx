import Image from "next/image";
import { navLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui";
import { SocialIcon } from "@/components/ui/SocialIcons";

const serviceLinks = ["Websites", "Custom Systems", "SaaS", "POS", "IoT", "Cloud Support"];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-night pb-10 pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-brand-indigo/15 blur-3xl"
      />
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <Image src="/favicon/favicon.svg" width={32} height={32} alt="" className="h-8 w-8" />
              <span className="text-lg font-bold tracking-[-0.02em] text-white">AlphaGen Coding</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Sri Lankan software development company building websites, SaaS platforms, business systems, POS
              solutions and IoT-integrated applications.
            </p>
            <div className="mt-6 flex gap-2">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition duration-200 hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  <SocialIcon name={link.label} />
                </a>
              ))}
            </div>
          </div>
          <FooterList title="Quick Links" items={navLinks} />
          <FooterList title="Services" items={serviceLinks.map((item) => ({ label: item, href: "#services" }))} />
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <span>{siteConfig.location}</span>
              <a href={`mailto:${siteConfig.email}`} className="transition duration-200 hover:text-white">
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} AlphaGen Coding. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-400">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="transition duration-200 hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
