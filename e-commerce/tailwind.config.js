/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        second: {
          text: "#737373",
        },
        primary: {
          color: "#23A6F0",
          text: "",
        },
        secondary: {
          1: "",
          2: "",
          text1: "",
          text2: "",
        },
        dark: {
          bg: "",
          text: "",
        },
        light: {
          bg: "",
          text: "",
          gray: "",
          gray1: "",
          gray2: "",
        },
        success: {
          color: "",
          text: "",
        },
        alert: { color: "", text: "" },
        danger: { color: "", text: "" },
        hover: { color: "", text: "" },
        disabled: { color: "", text: "" },
        muted: { color: "", text: "" },
        faded: {
          primary: "",
          secondary: "",
          secondary2: "",
        },
      },
    },
  },
  plugins: [],
});
