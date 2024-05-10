/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login':"linear-gradient(to bottom, #33A3AA, #138188);"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        inter: '"Inter Variable", sans-serif;',
        roboto: 'Roboto, sans-serif;'
      }
    },
  },
  plugins: [],
}

