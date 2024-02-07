/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
          white: 'hsl(0, 0%, 100%)',
          grey: 'hsl(0, 0%, 20%)',
          darkGrey: 'hsl(0, 0%, 12%)',
          offBlack: 'hsl(0, 0%, 8%)',
          green: 'hsl(75, 94%, 57%)'
      },
    fontFamily: {
      'sans': ['Inter',]
    }
    },
  },
  plugins: [],
}

