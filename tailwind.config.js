/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'home': {
          'dark': '#2b2d42',
          'light': '#edf2f4',
        },
        'footer': {
          'light': '#8ecae6',
        }
      }
    },
  },
  plugins: [],
}
