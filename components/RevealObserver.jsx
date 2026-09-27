"use client";

import { useEffect } from "react";

// Adds `is-visible` to [data-reveal] elements as they scroll into view.
// The `reveal-ready` class is set by an inline script in the layout before first paint.
export default function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
