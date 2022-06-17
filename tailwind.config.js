/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': {max: '600px'},
      'sm': { min: '600px', max: '900px' },
      'md': { min: '900px'}, 
      'lg': { min: '1200px' },
      'xl': { min: '1536px' }, 
    },
    extend: {},
  },
  plugins: [],
}

