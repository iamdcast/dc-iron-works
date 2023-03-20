/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#152938",
        secondary: "#f7fafb",
        accent: "#cbb5a1",
        accent2: "#ce6445",
      },
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      cursive: ["Gruppo", "cursive"],
      serif: ["Barlow", "Georgia"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
