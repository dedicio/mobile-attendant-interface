/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FC7A1E',
        'light-orange': '#F9C784',
        'deep-orange': '#F24C00',
        'light-gray': '#E7E7E7',
        'blue': '#485696',
        'green': '#15803d',
        'yellow': '#fcd34d',
      },
    },
  },
  plugins: [],
}
