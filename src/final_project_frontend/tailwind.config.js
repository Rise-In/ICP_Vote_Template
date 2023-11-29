/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial-at-47-69': `radial-gradient(at 47% 69%, hsla(17,62%,65%,1) 0px, transparent 50%)`,
        'gradient-radial-at-9-32': `radial-gradient(at 9% 32%, hsla(222,75%,60%,1) 0px, transparent 50%)`
      })
    },
    colors: {
      "white": "#FFFCFF",
      "green": "#09A129",
      "yellow": "#FAF33E",
      "red": "#C1292E",
      "purple": "#7E3F8F",
    },
  },
  plugins: [],
}