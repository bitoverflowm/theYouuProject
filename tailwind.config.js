/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'youu-background': '#221D26',
        'youu-light-green': '#D4FC79',
        'youu-dark-green': '#96E6A1',
        'youu-sky-blue': '#A8EDEA',
        'youu-sky-pink': '#FED6E3',
        'youu-deep-red': '#FF0844',
        'youu-light-pink': '#FFB199',
      },
      keyframes: {
        shiver: {
          '0%, 100%': { transform: 'rotate(-1deg) translateX(0.25%) translateY(0.25%)' },
          '50%': { transform: 'rotate(1deg) translateX(-0.25%) translateY(-0.25%)' },
        }
      },
      animation: {
        shiver: 'shiver 0.25s linear infinite',
      },
    },
  },
  plugins: [],
}