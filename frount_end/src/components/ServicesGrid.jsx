import React from "react";
import { cn } from "./utils"; // optional helper; remove if you don't have it

const items = [
  {
    id: 1,
    badge: "Web",
    title: "Web, Mobile & Cloud Apps",
    desc: "We build secure, scalable web, mobile, and cloud apps that fast-track your business growth.",
    href: "#apps",
  },
  {
    id: 2,
    badge: "AI",
    title: "Artificial Intelligence",
    desc: "Intelligent AI solutions for startups, enterprises, and governments to transform operations.",
    href: "#ai",
    badgeColor: "bg-indigo-600",
  },
  {
    id: 3,
    badge: "Studio",
    title: "UX Designs",
    desc: "Holistic, people-friendly digital experiences so your products are loved by users.",
    href: "#ux",
    badgeColor: "bg-rose-600",
  },
  {
    id: 4,
    badge: "Studio",
    title: "Extended Teams",
    desc: "Our team is your team. Whether it’s your 1st or 100th developer, we scale with you.",
    href: "#teams",
  },
  {
    id: 5,
    title: "MVP Factory",
    desc: "Fast-track your MVPs with AI-driven development. Ship to market quickly and safely.",
    href: "#mvp",
  },
  {
    id: 6,
    title: "Accessibility Implementation",
    desc: "Make your products accessible and compliant for your user base.",
    href: "#a11y",
  },
];

export default function ServicesGrid() {
  return (
    <section className="">
      <div className="max-w-screen-2xl mx-auto  py-5">
        {/* Outer rounded container like the screenshot */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm ring-1 ring-gray-200/70 dark:ring-gray-700/50">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8">
            What we can build for you
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {items.map((it) => (
              <a
                key={it.id}
                href={it.href}
                className="relative group rounded-[1.5rem] bg-gray-100/70 dark:bg-gray-900/40 ring-1 ring-gray-200 dark:ring-gray-700 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                {/* Number at top-right */}
                <div className="absolute top-5 right-6 text-2xl sm:text-3xl font-extrabold text-gray-400/90 select-none">
                  {String(it.id).padStart(2, "0")}
                </div>

                {/* Optional pill badge */}
                {it.badge && (
                  <span
                    className={cn(
                      "inline-block text-xs font-semibold text-white px-3 py-1 rounded-full mb-4",
                      it.badgeColor || "bg-slate-700"
                    )}
                  >
                    {it.badge}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] leading-snug font-semibold text-gray-900 dark:text-white">
                  {it.title.split("\n").map((l, i) => (
                    <span key={i} className="block">
                      {l}
                    </span>
                  ))}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {it.desc}
                </p>

                {/* Subtle chevron on hover */}
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10 10.293 6.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                    <path d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* utils.js (optional)
export const cn = (...c) => c.filter(Boolean).join(" ");
*/
