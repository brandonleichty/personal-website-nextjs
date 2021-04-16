module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1b0525",
        "dark-green": "#212505",
        "dark-navy": "#051525",
        "baby-blue": "#03cffe",
        "white": "#fff"
      },
      fontFamily: {
        Recoleta: ["Recoleta"],
        Gilroy: ["Gilroy"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
