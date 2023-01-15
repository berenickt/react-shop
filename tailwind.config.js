/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#C69749',
        backDark: '#000000',
        backWhite: 'FFFFFF',
      },
      backgroundImage: {
        banner: `url('../public/img/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
