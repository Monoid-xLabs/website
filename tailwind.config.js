const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'masonary': '1fr auto'
      },
      colors: {
        ...colors,
        primary: '#ffffff',
        secondary: '#81ffd9',
        accent: '#81ffd9',
        background: '#051726',
      },
      backgroundImage: theme => ({
        'logo-white': "url('/assets/image/logo/logo-white.png')"
      })
    },
    fontFamily: {
      sans: [
        "system-ui",
        "sans-serif",
      ],
    },
  },
  variants: {},
  plugins: [],
};
