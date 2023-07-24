/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontBn: ['"Baloo Da 2"', '"cursive"']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

