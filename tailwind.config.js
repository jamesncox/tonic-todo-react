module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "matrix-green": "#22b455",
        "matrix-green-primary": "#008F11",
        "matrix-green-text": "#003B00",
        "matrix-green-secondary": "#006400",
        "matrix-green-light": "#92e5a1",
        "matrix-green-hover": "#00ff2b",
      },
      fontFamily: {
        mono: ["courier"],
      },
      backgroundImage: (theme) => ({
        "matrix-code":
          "url('https://media.giphy.com/media/AOSwwqVjNZlDO/giphy.gif')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      margin: ["last"],
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
