/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#00B98E',
          600: '#00A67C',
        },
      },
    },
  },
  plugins: [],
};