import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070A",
        night: "#0B1018",
        ivory: "#F6F1E8",
        gold: "#D7B56D",
        sage: "#8FB7A8"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        halo: "0 0 120px rgba(215,181,109,0.18)",
        quiet: "0 24px 80px rgba(0,0,0,0.34)"
      },
      backgroundImage: {
        halo: "radial-gradient(circle, rgba(215,181,109,0.16), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
