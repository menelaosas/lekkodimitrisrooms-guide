import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F4EBDA",
        ink: "#2C1A0E",
        sea: "#8B5E3C",
        "sea-d": "#6B4828",
        "sea-l": "#EDE0D4",
        terra: "#C4672A",
        "terra-l": "#FDF1EA",
        warm: "#7A6A5A",
        pb: "#A09080",
        stone: "#2C1A0E",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "480px" },
      borderRadius: { xl: "12px", "2xl": "16px" },
    },
  },
  plugins: [],
};
export default config;
