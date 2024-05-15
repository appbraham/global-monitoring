/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#28B1B9',
        neutral: '#777777',
        highlight:'#33A3AA',
        input: '#202020',
        'label-mobile': '#A7AFB7',
        'label-web': '#84818A',
      },
      backgroundImage: {
        'login':"linear-gradient(to bottom, #33A3AA, #138188);"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        inter: '"Inter Variable", sans-serif;',
        roboto: 'Roboto, sans-serif;'
      },
      boxShadow: {
        'all-side': '0px 0px 8px .5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

