module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1b0525",
        "dark-green": "#212505",
        "dark-navy": "#051525",
        "dark-navy-2": "#111827",
        "baby-blue": "#03cffe",
        "white": "#fff",
        "gray":"#8f8f8f",
        "light-gray": "#f7f7f7",
        "white-smoke": "#f7f5f4",
        "charcoal": "#3e3f3f",
        "purple": "#6303fe",
        "almost-black": "#1d1d1f"
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
