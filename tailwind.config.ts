import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFDD",
        ink: "#1A1710",
        gold: "#B98B3E",
        bronze: "#7A5A22",
        husk: "#3E2C1A",
        "brew-blue": "#AEDCEF",
        "shake-teal": "#7FD8C8",
        "mojito-navy": "#4A6FA5",
        "mojito-coral": "#E4572E",
        "food-yellow": "#EFE0A0",
        "dessert-pink": "#F6C9D6",
        "mocktail-navy": "#2E3A59",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
        accent: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(185, 139, 62, 0.25)",
        card: "0 4px 16px 0 rgba(26, 23, 16, 0.06)",
        "card-hover": "0 10px 28px -4px rgba(26, 23, 16, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
