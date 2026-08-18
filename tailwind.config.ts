import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deepInlet: "#12302F",
        forest: "#1F4A3D",
        seaGlass: "#7FAEA3",
        warmSand: "#F3EFE7",
        mist: "#F7F8F6",
        charcoal: "#1F2423",
        slateText: "#4E5A57",
        softBorder: "#D9DED8",
        white: "#FFFFFF",
        emphasis: "#B77946",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(18, 48, 47, 0.10)",
      },
      // `py-18` is used in ~10 places but is not part of Tailwind v3's default
      // scale, so those rules were silently dropped and every section stayed at
      // py-14. 18 * 0.25rem keeps it on the standard spacing rhythm.
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
