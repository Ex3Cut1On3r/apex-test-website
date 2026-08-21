import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          teal: "#00B3A4",
          ink: "#1E2328",
          coral: "#FF6B6B",
          navy: "#0C202B",
          mist: "#F6F8F9",
        },
      },
      boxShadow: {
        apex: "0 24px 70px rgba(30,35,40,.10)",
        teal: "0 18px 48px rgba(0,179,164,.18)",
      },
      keyframes: {
        "apex-float": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        "apex-pulse": {
          "0%, 100%": { opacity: "0.42", transform: "scale(1)" },
          "50%": { opacity: "0.82", transform: "scale(1.04)" },
        },
      },
      animation: {
        "apex-float": "apex-float 7s ease-in-out infinite",
        "apex-pulse": "apex-pulse 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
