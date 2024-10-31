/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        libre: ['"Libre Baskerville"', "serif"],
        dancing: ['"Dancing Script"', "cursive"],
      },
      colors: {
        beige: "#F5F5DC",
        "dark-brown": "#3E2C2C",
        "burnt-orange": "#D2691E",
        gold: "#DAA520",
        "forest-green": "#228B22",
        maroon: "#800000",
        "charcoal-black": "#333333",
        "soft-ivory": "#FFFFF0",
      },
      fontSize: {
        "hero-title": "4.5rem",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
