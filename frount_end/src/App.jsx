import Navbar from "./components/Navbar";
import {
  About,
  ClientStrip,
  Contact,
  FeaturedWork,
  Footer,
  Hero,
  Process,
  Products,
  Services,
  TechStack,
  Testimonials,
  WhyChooseUs,
} from "./components/HomeSections";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
