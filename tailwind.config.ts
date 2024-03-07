import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "var(--font-lato)",
        archivo: "var(--font-archivo)",
      },
      colors: {
        applemusic: "#fa586a",
        youtube: "#f00",
        spotify: "#1ed760",
        instagram: "#C13584",
        soundcloud: "#f50",
      },
    },
  },
  plugins: [],
};
export default config;
