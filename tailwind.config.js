const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(badge|image|table|checkbox|form|spacer).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),nextui(),heroui()],
}