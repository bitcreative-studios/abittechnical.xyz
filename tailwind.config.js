const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['ruddy', ...defaultTheme.fontFamily.sans],
        text: ['adelle-sans', ...defaultTheme.fontFamily.sans],
        heading: ['meloche', ...defaultTheme.fontFamily.sans],
        display: ['museo', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: '#ff0844',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
