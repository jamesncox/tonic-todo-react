module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "matrix-green": "#03A062",
      },
      fontFamily: {
        mono: ["courier"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
