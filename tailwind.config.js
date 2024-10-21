/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray:'#1E1E1E',
        blue:'#6CBDE5',
        red:'#F64F52'
      },
      borderWidth: {
        '0.5': '0.5px',
      }
    },
  },
  plugins: [],
}

