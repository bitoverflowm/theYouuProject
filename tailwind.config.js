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
    fontFamily: {
      'title': ['Orelega One', 'serif'],
      'body': ['Inter', 'sans-serif']
    },
    extend: {
      width: {
        '88': '22rem'
      },
      fontSize: {
        'xxs': '0.600rem',
      },
      aspectRatio: {
        '9/16': '56.25%',
      },
      colors: {
        'youu-dark-green': "#0e2d28",
        'youu-lavender': "#D6E3F8",
        'youu-english-violet': '#5C415D',
        'youu-reseda-green': '#6A8D73',
        'youu-ucla-blue': '#427AA1',
        'youu-green': '#86EA46',
        'youu-red': '#F93943',
        'youu-teal': '#86EA46',
        'youu-background': '#221D26',
        'youu-light-green': '#D4FC79',
        'youu-sky-blue': '#A8EDEA',
        'youu-sky-pink': '#FED6E3',
        'youu-deep-red': '#FF0844',
        'youu-light-pink': '#FFB199',
        'primary': '#6171fe',
        'secondary': '#9f6afe',
        'tertiary': '#b79dfe',
        'highlight': '#ddd0fe',
        'light': '#fefefe',
        'dark': '#6658fe',
        'nft-blue': '#2F80ED',
        'nft-glow': '#B2FFDA',
        'nft-purple': '#737DFE',
        'nft-cotton': '#FFCAC9',
        'nft-sky': '#9055FF',
        'nft-aqua': '#13E2DA',
        'nft-orange': '#F06966',
        'nft-orange-light': '#FAD6A6',
        'bito-white': '#EFF0F0',
        'bito-grey': '#ACAFAE',
        'onyx-black': '#1A1B1B',
        'bito-blue': '#FDF5EB',
        'hotAndColdhot': '#EDA7FF',
        'hotAndColdcold': '#9E9CFF',
        'hotAndColdboth': '#F6BC55',
        'hotAndColdNature': '#5DD669',
        'yuuu-blueberry': '#6F2DDB',
      },
      keyframes: {
        shiver: {
          '0%, 100%': { transform: 'rotate(-1deg) translateX(0.25%) translateY(0.25%)' },
          '50%': { transform: 'rotate(1deg) translateX(-0.25%) translateY(-0.25%)' },
        },
        border: {
          '0%': { backgroundPosition: '10% 0%' },
          '50%': { backgroundPosition: '91% 100%' },
          '100%': { backgroundPosition: '10% 0%' }
        },
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        shiver: 'shiver 0.25s linear infinite',
        border: 'border 2s ease-in-out infinite',
        background: 'background 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}