import Navbar from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
