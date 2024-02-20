/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peya-blue': '#004ADD',
        'peya-blue-hover': '#0043c7',
        'peya-red': '#FA0050',
        'peya-red-hover': '#c4003f',
        'peya-white': '#FFFFFF',
        'peya-white-hover': '#e6edfc',
        'peya-turquoise': '#00F9D2',
        'peya-yellow': '#FFD100',
        'peya-dark': '#100423',
      },
      borderRadius: {
        'peya': '1.5em',
      },
      spacing: {
        'peya-x': '10%',
      },
      boxShadow: {
        'peya-soft-blue': '0px 0px 90px 5px rgba(28, 155, 212, 0.2)'
      },
      gridTemplateColumns: {
        "travel": "auto 65%",
      },
      gridTemplateRows: {
        "main-page": "min-content 1fr min-content"
      },
      fontFamily: {
        'texta': ['Texta'],
        'texta-bold': ['Texta-Bold'],
        'texta-bolder': ['Texta-Bolder'],
        'texta-italic-bold': ['Texta-Bold-Italic'],
      },
      keyframes: {
        'up-and-down': {
          '0%': {
            transform: 'translateY(-5px)'
          },

          '100%': {
            transform: 'translateY(5px)'
          }
        }
      },
      animation: {
        'soft-bounce': 'up-and-down 1.5s infinite alternate',
      }
    },
  },
  plugins: [],
}
