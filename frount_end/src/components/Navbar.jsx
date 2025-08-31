import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg"; // import your logo image

// ---- Color system (matches your blue → purple logo)
const ACCENT_TEXT = "text-sky-600"; // links hover color
const ACCENT_TEXT_HOVER = "hover:text-sky-700";
const BTN_GRADIENT = "bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 active:from-sky-700 active:to-violet-800";

// ---- Helper hook: close on outside click
function useOutsideClose(ref, onClose) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose?.();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}

const navBase = `text-sm font-medium text-neutral-800 ${ACCENT_TEXT_HOVER} transition-colors`;
const pillBtn = `inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-white shadow-sm ${BTN_GRADIENT}`;

const desktopDropdownVariants = {
  hidden: { opacity: 0, y: 6, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.16 } },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  useOutsideClose(servicesRef, () => setServicesOpen(false));
  useOutsideClose(aboutRef, () => setAboutOpen(false));

  // Add subtle shadow on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
      scrolled ? "shadow-sm" : ""
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="AlphaGen Coding home">
            <img src={logo} alt="AlphaGen Logo" className="h-9 w-auto" />
            <div className="leading-tight">
              <span className={`block text-base font-bold tracking-tight text-neutral-900 group-hover:${ACCENT_TEXT} transition-colors`}>
                AlphaGen <span className="text-sky-600">Coding</span>
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* Services */}
            <div className="relative" ref={servicesRef}>
              <button
                className={`${navBase} inline-flex items-center gap-1.5`}
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={desktopDropdownVariants}
                    className="absolute left-0 mt-3 w-72 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg"
                    onMouseLeave={() => setServicesOpen(false)}
                    role="menu"
                  >
                    {[
                      { label: "Custom Software", desc: "Web, mobile & cloud systems" },
                      { label: "Dedicated Teams", desc: "Scale with elite engineers" },
                      { label: "QA & Testing", desc: "Automation and manual QA" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="block rounded-xl p-3 hover:bg-neutral-50"
                        role="menuitem"
                      >
                        <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                        <div className="text-xs text-neutral-500">{item.desc}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us */}
            <div className="relative" ref={aboutRef}>
              <button
                className={`${navBase} inline-flex items-center gap-1.5`}
                onClick={() => setAboutOpen((v) => !v)}
                onMouseEnter={() => setAboutOpen(true)}
                aria-expanded={aboutOpen}
                aria-haspopup="menu"
              >
                About Us <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={desktopDropdownVariants}
                    className="absolute left-0 mt-3 w-56 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg"
                    onMouseLeave={() => setAboutOpen(false)}
                    role="menu"
                  >
                    {[
                      { label: "Who We Are" },
                      { label: "Leadership" },
                      { label: "Our Values" },
                    ].map((item) => (
                      <a key={item.label} href="#" className="block rounded-xl p-3 hover:bg-neutral-50" role="menuitem">
                        <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#products" className={navBase}>Our Products</a>
            <a href="#" className={navBase}>Customer Stories</a>
            <a href="#" className={navBase}>Careers</a>
            <a href="#" className={navBase}>Resources</a>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#contact" className={pillBtn}>Talk to Us</a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden rounded-xl p-2 hover:bg-neutral-100"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-4 pt-2">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50">
                    <span>Services</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-1 space-y-1 pl-2">
                    <a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#">Custom Software</a>
                    <a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#">Dedicated Teams</a>
                    <a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#">QA & Testing</a>
                  </div>
                </details>

                <details className="group mt-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50">
                    <span>About Us</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-1 space-y-1 pl-2">
                    <a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#">Who We Are</a>
                    <a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#">Leadership</a>
                    <a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="#">Our Values</a>
                  </div>
                </details>

                <a className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50" href="#products">Our Products</a>
                <a className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50" href="#">Customer Stories</a>
                <a className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50" href="#">Careers</a>
                <a className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50" href="#">Resources</a>

                <div className="mt-3 px-2">
                  <a href="#contact" className={`${pillBtn} w-full`}>Talk to Us</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
