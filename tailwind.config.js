const colors = {
  blue: {
    'very-light': '#ECF2FF',
    light: '#CAC9FF',
    normal: '#1125D6',
  },
  green: {
    normal: '#00BB8F',
  },
  navy: {
    dark: '#303B59',
  },
  red: {
    normal: '#FF5555',
  },
  yellow: {
    normal: '#FFB21E',
  },
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      screens: {
        xmd: '480px',
        tb: '992px',
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
