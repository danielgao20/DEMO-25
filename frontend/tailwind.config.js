/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#c2410c', // Your custom color
        customGrey: '#050506', // Your custom color
      },
    },
  },
  plugins: [],
}