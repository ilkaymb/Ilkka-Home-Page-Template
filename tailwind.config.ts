import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "card-width-lg": "20rem",
        "card-width-md": "22rem",
        "card-width-sm": "24rem",
        "slide-width": "30rem",
        "big-news-lg": "485.5px",
        "small-news-lg": "180px",
        "big-news-md": "300px",
        "small-news-md": "200px",
      },
    },
  },
  plugins: [],
};
export default config;
