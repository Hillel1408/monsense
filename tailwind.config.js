const plugin = require("tailwindcss/plugin");
const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
        },
        ".scroll-bar": { overflowY: "auto" },
        ".scroll-bar::-webkit-scrollbar": {
          backgroundColor: "#e6e6e6",
          width: "10px",
        },
        ".scroll-bar::-webkit-scrollbar-button": {
          display: "none",
        },
        ".scroll-bar::-webkit-scrollbar-thumb": {
          backgroundColor: "#b0bac1",
        },
        ".scroll-bar::-webkit-scrollbar-track": {
          backgroundColor: "#e6e6e6",
        },
        ".scroll-bar::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#b0bac1",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};
