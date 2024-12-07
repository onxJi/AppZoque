/** @type {import('tailwindcss').Config} */
const {
  iconsPlugin,
  dynamicIconsPlugin,
} = require("@egoist/tailwindcss-icons");
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), iconsPlugin(), dynamicIconsPlugin()],
};

