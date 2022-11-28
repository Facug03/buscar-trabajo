/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexendBold: ['Lexend-Bold'],
      },
      colors: {
        primary: '#2A9DFF',
        'gray-t': '#42484E',
        secondary: '#1ABEE8',
      },
      screens: {
        tb: '695px',
        ph: '490px',
      },
    },
  },
  plugins: [],
}
