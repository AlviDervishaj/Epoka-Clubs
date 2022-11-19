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
          'dark': '#014185',
          'light': '#219ebc',
        },
        'footer': {
          'light': '#8ecae6',
        }
      }
    },
  },
  plugins: [],
}
