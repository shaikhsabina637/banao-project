/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom_purple:
          '#850F8D',
        custom_blue:
          '#52D3D8'
      },
      screens: {
        'xs': {'max': '700px'}, 
      },
      fontFamily: {
        inter: ['Inter', 'Roboto'],
      },
    },
  },
  plugins: [],
}