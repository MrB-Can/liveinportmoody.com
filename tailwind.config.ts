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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
