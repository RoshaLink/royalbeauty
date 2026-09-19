import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: {
          DEFAULT: "#F7F3EC",
          50: "#FDFCFA",
          100: "#F7F3EC",
          200: "#EFE7D8",
        },
        charcoal: {
          DEFAULT: "#151513",
          800: "#1E1E1A",
          900: "#151513",
          950: "#0C0C0A",
        },
        emerald: {
          50: "#E7EFE9",
          100: "#C7D9CD",
          200: "#9FBFA9",
          300: "#6E9A7C",
          400: "#3F7654",
          500: "#245538",
          600: "#1B4029",
          700: "#153420",
          800: "#0F2818",
          900: "#0A1C10",
          950: "#06231A",
        },
        gold: {
          100: "#F1E4C8",
          200: "#E4CD9F",
          300: "#D6B87C",
          400: "#C9A15D",
          500: "#B8915A",
          600: "#9A7642",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        128: "32rem",
        160: "40rem",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
