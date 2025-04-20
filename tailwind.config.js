/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // if using /app directory
    './pages/**/*.{js,ts,jsx,tsx}',    // for /pages support
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        logoScroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        logoScroll: 'logoScroll 10s linear infinite',
      },
    },
  },
  plugins: [],
}