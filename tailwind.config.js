module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "matrix-green": "#22b455",
        "matrix-green-primary": "#008F11",
        "matrix-green-secondary": "#003B00",
        "matrix-green-hover": "#92e5a1",
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
