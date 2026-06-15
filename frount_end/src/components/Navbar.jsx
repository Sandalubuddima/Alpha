import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Button } from "./ui";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-lg shadow-cyan-500/10">
            <img src={logo} className="h-6 w-6" alt="AlphaGen Coding logo" />
          </span>
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            AlphaGen <span className="text-cyan-300">Coding</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="https://wa.me/94707777695" variant="ghost" external>
            WhatsApp
          </Button>
          <Button href="#contact">Book a Call</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-slate-200 lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d={open ? "M5 5l10 10M15 5L5 15" : "M3 6h14M3 10h14M3 14h14"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950 px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
            <Button href="https://wa.me/94794707777695" variant="ghost" external onClick={closeMenu}>
              WhatsApp
            </Button>
            <Button href="#contact" onClick={closeMenu}>
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
