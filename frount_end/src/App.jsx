import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesGrid from "./components/ServicesGrid";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
    <div className="">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Testimonials />
      {/* your sections */}
    </div>

    </>
  );
}
