/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens:{
        md: '1080px'
      }
    },
  },
  plugins: [],
}
