"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "./ui";

// Swap to "/logo.png" once the transparent brand logo is added to /public.
const LOGO_SRC = "/favicon/favicon.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1248px] items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={closeMenu}>
          <Image src={LOGO_SRC} width={36} height={36} alt="AlphaGen Coding logo" priority className="h-9 w-9" />
          <span className="text-base font-bold tracking-[-0.02em] text-ink sm:text-lg">
            AlphaGen <span className="text-gradient">Coding</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition duration-200 hover:text-brand-indigo"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={siteConfig.whatsappUrl} variant="outline" external>
            WhatsApp
          </Button>
          <Button href="#contact">Book a Call</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink transition duration-200 hover:border-brand-indigo/40 hover:text-brand-indigo lg:hidden"
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
        <div id="mobile-menu" className="border-t border-line bg-white px-4 pb-5 shadow-lifted lg:hidden">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink transition duration-200 hover:bg-tint hover:text-brand-indigo"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mx-auto grid max-w-[1248px] grid-cols-2 gap-3">
            <Button href={siteConfig.whatsappUrl} variant="outline" external onClick={closeMenu}>
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
