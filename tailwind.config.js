/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f5',
          100: '#e8f3ee',
          200: '#d1e7df',
          300: '#a2cfbf',
          400: '#73b79f',
          500: '#449f80',
          600: '#368768',
          700: '#276f50',
          800: '#006241', // Starbucks primary green
          900: '#004f35',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};