/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Sofia: ['Sofia', 'cursive'],
        PlayfairDisplay: ['PlayfairDisplay', 'serif'],
        OpenSans: ['OpenSans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
