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
        dark: "#0e7490",
      },
    },
  },
  plugins: [],
};
