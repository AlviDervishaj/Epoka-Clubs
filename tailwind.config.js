/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '1.875rem',
      },
      colors: {
        'home': {
          'dark': '#00458C',
          'light': '#edf2f4',
        },
        'router': {
          'active': '#1d3557',
        },
        'header': {
          'dark': '#2b2d42',
        },
        'buttons': {
          'light': {
            'blue': '#003049',
          },
        },
        'footer': {
          'light': '#8ecae6',
        }
      }
    },
  },
  plugins: [],
}
