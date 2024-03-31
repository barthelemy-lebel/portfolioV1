/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Oswald", "sans-serif"],
      },
      colors: {
        custom: {
          'mainGrey': '#1B1B1B',
        },
      },
    },
  },
  plugins: [],
}
