/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        headerNote: '1fr 1fr 1fr 1fr 1.1fr 0.9fr',
        tableNote: '1fr 1fr 1fr 1fr 1fr 1fr',
        doubleFr: '1fr 1fr',
        tripleFr: '1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
};
