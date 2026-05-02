import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#FAF8F3",
        ink: "#1A2E3B",
        sea: "#2A6CA4",
        "sea-d": "#1A4E7A",
        "sea-l": "#E8F2FA",
        terra: "#C4672A",
        "terra-l": "#FDF1EA",
        warm: "#6B7A84",
        pb: "#8C9BA5",
        stone: "#2A3540",
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
