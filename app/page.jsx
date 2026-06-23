import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import ClientStrip from "@/components/sections/ClientStrip";
import Contact from "@/components/sections/Contact";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon/web-app-manifest-512x512.png`,
  image: `${siteConfig.url}/favicon/web-app-manifest-512x512.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: `+${siteConfig.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressLocality: "Sri Lanka",
  },
  areaServed: ["Sri Lanka", "International"],
  sameAs: siteConfig.socialLinks.map((link) => link.href),
  serviceType: services.map((service) => service.title),
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
  hasPart: portfolio
    .filter((project) => project.href)
    .map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      url: project.href,
      description: project.description,
    })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <main>
        <ClientStrip />
        <Services />
        <FeaturedWork />
        <Products />
        <WhyChooseUs />
        <Process />
        <TechStack />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
