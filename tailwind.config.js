// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        primary: "rgb(179, 179, 179, 0.35)",
        secondary: "rgb(196, 196, 196, 0.35)",
      }),
    },
  },
  variants: {},
  plugins: [],
};
