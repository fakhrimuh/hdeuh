/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // ...
      orange: {
        light: "#ffffff",
        default: "#FFB444",
        dark: "#000000",
        gray: "#B9B9B9",
      },
    },
  },
  plugins: [],
};
