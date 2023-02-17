/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--lora-font)", ...fontFamily.sans],
        serif: ["var(--lora-font)", ...fontFamily.serif],
        bebas: ["var(--bebas-font)", ...fontFamily.serif],
        yusei: ["var(--yusei-font)", ...fontFamily.serif],
        tokyo: ["var(--tokyo-font)", ...fontFamily.sans],
        changa: ["var(--changa-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("daisyui")],
};
