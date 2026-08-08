import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F6F5F2",
        ivory: "#EEECE7",
        charcoal: "#191A1D",
        jet: "#111214",
        accent: "#4F9E8B"
      }
    }
  },
  plugins: []
};

export default config;
