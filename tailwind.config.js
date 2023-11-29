/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFCFF",
        "green": "#09A129",
        "yellow": "#FAF33E",
        "red": "#C1292E",
        "purple": "#7E3F8F",
      },
      animation: {
        'rotate': 'rotate 3s linear infinite',
      }
    },
    
  },
  plugins: [],
}