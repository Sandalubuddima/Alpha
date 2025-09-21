import React, { useState, useEffect } from "react";
import Customer1 from "../assets/customers/logo.michel.png"; // Replace these with your local images if you have them
import Customer2 from "../assets/customers/malpiyali_logo.png";
import Customer3 from "../assets/customers/siyasro_page-0001.jpg";

// Replace these with your local images (import ... from "...") if you have them
const DATA = [
  {
    id: 1,
    companyLogoText: "MISHEL LANKA TOURS",
    quote:
      "We at Mishel Lanka Tours are really happy with the website AlphaGen Coding created for us. 🌍✨ The design is professional, mobile-friendly, and shows our travel services beautifully. The team was easy to work with, very responsive, and delivered exactly what we needed on time. Highly recommend AlphaGen Coding for anyone who wants a modern and attractive website!",
    name: "Pubudu Warnasooriya,",
    role: "Owner",
    // Portrait (use your own image import)
    photo: Customer1,
  },
  {
    id: 2,
    companyLogoText: "MALPIYALI",
    quote:
      "We are Malpiyali Publisher, and AlphaGen Coding built our official website. From start to finish, their team was professional, creative, and very supportive. The design is modern, user-friendly, and perfectly represents our brand. They delivered on time and exceeded our expectations. We are very happy with the result and highly recommend AlphaGen Coding to anyone looking for a professional website!",
    name: "Mo Mohammadkhani",
    role: "Owner",
    photo: Customer2,
  },
  {
    id: 3,
    companyLogoText: "SIYASRO ADVERTISING",
    quote:
      "Great place for software development! 🚀 The AlphaGen Coding team is super talented, creative, and always delivers on time. They pay attention to detail, provide modern solutions, and make the whole process smooth and easy. Definitely the go-to place for innovative software! ",
    name: "Anuradha Jayasekara",
    role: "Owner",
    photo: Customer3,
  },

];

export default function Testimonials() {
  // index of first card currently visible
  const [idx, setIdx] = useState(0);

  // show 1 card on small screens, 2 on lg+
  const [cardsPerView, setCardsPerView] = useState(1);
  useEffect(() => {
    const onResize = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIdx = Math.max(0, DATA.length - cardsPerView);

  const prev = () => setIdx((n) => Math.max(0, n - 1));
  const next = () => setIdx((n) => Math.min(maxIdx, n + 1));

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        {/* Outer rounded container */}
        <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm ring-1 ring-gray-200/70 dark:ring-gray-700/50">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            What our customers say
          </h2>

          {/* Slider */}
          <div className="relative mt-10">
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${idx * (100 / cardsPerView)}%)` }}
              >
                {DATA.map((t) => (
                  <TestimonialCard key={t.id} {...t} />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={prev}
                disabled={idx === 0}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full ring-1 ring-gray-300 bg-white text-gray-900 disabled:opacity-40 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Previous testimonial"
              >
                <span aria-hidden>←</span>
              </button>
              <button
                onClick={next}
                disabled={idx === maxIdx}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full ring-1 ring-gray-300 bg-black text-white disabled:opacity-40 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Next testimonial"
              >
                <span aria-hidden>→</span>
              </button>

              {/* Dots */}
              <div className="ml-2 flex gap-1.5">
                {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-2.5 w-2.5 rounded-full cursor-pointer ${
                      i === idx ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ companyLogoText, quote, name, role, photo }) {
  return (
    <article className="min-w-full lg:min-w-[calc(50%-12px)] flex-1">
      <div className="relative h-full rounded-[1.75rem] bg-gray-100/70 dark:bg-gray-900/40 ring-1 ring-gray-200 dark:ring-gray-700 p-6 sm:p-8 flex gap-6 sm:gap-8 items-stretch">
        {/* Left: text */}
        <div className="flex-1">
          {/* pseudo company logo (text) */}
          <div className="whitespace-pre leading-4 font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {companyLogoText}
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {quote}
          </p>

          <div className="mt-5">
            <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
            <div className="text-sm text-amber-600 dark:text-amber-400">{role}</div>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="w-36 sm:w-44 lg:w-56 self-end shrink-0">
          <img
            src={photo}
            alt={`${name} portrait`}
            className="w-full h-full object-cover rounded-[1.25rem] bg-white"
          />
        </div>
      </div>
    </article>
  );
}
