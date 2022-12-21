/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'landscape': "url('../img/landscape.jpg')",
        'hotels': "url('../img/hotels.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4B',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4B',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }
    },
  },
  variants: {
    width: ["responsive",],
  },
  plugins: [],
};
