/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
    "./src/**/*.scss"
  ],
  theme: {
    extend: {
      colors: {
        'uoc-backg': "color-mix(in srgb, #73edff, white 70%)",
        'uoc-corporate': '#000078',
        'uoc-masterbrand': '#73edff',
        'white': '#ffffff',
        'lightgrey': '#D3D3D3'
      },
      screens: {
        sm: '360px',
        md: '480px',
        lg: '768px',
      },
      spacing: {
        '15%': '15%',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  plugins: [],
} 