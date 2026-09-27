import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "rgb(var(--brand-blue) / <alpha-value>)",
          indigo: "rgb(var(--brand-indigo) / <alpha-value>)",
          violet: "rgb(var(--brand-violet) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          alt: "rgb(var(--surface-alt) / <alpha-value>)",
        },
        tint: "rgb(var(--tint) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        body: "rgb(var(--body) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        night: "rgb(var(--night) / <alpha-value>)",
      },
      backgroundImage: {
        "brand-gradient": "var(--gradient-brand)",
        "brand-button": "var(--gradient-button)",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.12)",
        lifted: "0 2px 4px rgb(15 23 42 / 0.04), 0 18px 40px -16px rgb(15 23 42 / 0.18)",
        brand: "0 10px 28px -10px rgb(var(--brand-indigo) / 0.55)",
        "brand-lg": "0 16px 36px -10px rgb(var(--brand-indigo) / 0.6)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
