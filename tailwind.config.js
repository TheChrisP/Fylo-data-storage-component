module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gradiantA: "hsl(6, 100%, 80%)",
        gradiantB: "hsl(335, 100%, 65%)",
        PaleBlue: "hsl(243, 100%, 93%)",
        GrayishBlue: "hsl(229, 7%, 55%)",
        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue: "hsl(229, 57%, 11%)",
      },
      fontFamily: {
        Raleway: ["Raleway"],
      },
      borderRadius: {
        extraLarge: "6rem",
      },
      backgroundImage: {
        mobile: "url('./src/images/bg-mobile.png')",
        desktop: "url('./src/images/bg-desktop.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
