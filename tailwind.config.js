/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xxs:['13px', '15px'],
      xs: ['16px', '18px'],
      sm: ['18px', '23px'],
      base: ['17px', '20.5px'],
      lg: ['18.5px', '22.94px'],
      xl: ['20px', '24.38px'],
      'xxl': ['25px', '30px'],
      '2xl': ['30px', '35px'],
      '3xl': ['35px', '40px'],
      '4xl': ['39px', '48px'],
      '5xl': ['48px', '58.33px'],
      '6xl': ['54px', '64px'],
      '7xl': ['80px', '80px'],
      '8xl': ['96px', '96px']
    },
    extend: {
      fontFamily: {
        custom: ['SanFrancisco', 'sans-serif'],
      },
      colors: {
        'turquise': '#09d691',
        'white': '#ffffff',
        'dark-blue': '#0B0D2B',
        'light-gray': '#ACACB7',
        'gray-blue': '#242841',
        'turquise-blue': '#296e85',
        'turquise-blue2': '#155b68',
        'gradient-1': '#072847',
        'purple-blue': '#191a38',
        'card-gray': '#f6f7f9',
        'dark-blue-2': '#090c2b',
        'underline-custom': '#09d691'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(45deg, #0A0B29 45%, #0A1532 58%, #0A203B 67%, #092944 78%, #09304A 87%, #09344E 100%)',
        'gradient2': 'linear-gradient(180deg, #fafbff 30%, #f9fafe 70%, #f8f9fd 100% )' 
      },
      screens: {
        "wide": "1440px",
      },
      padding: {
        '30': '7.5rem',
        '40': '10rem',
        '0.5': '0.5rem',
      },
      height:{
        '34': '136px',
        '110': '440px',
        '85': '340px',
        '90': '360px',
        '100': '400px',
      },
      width:{
        '85': '340px',
        '90': '360px',
        
      },
      keyframes: {
        breathing: {
          '0, 100%': {boxShadow: '0 0 8rem rgb(230, 0, 0)'},  
          '50%': { boxShadow: '0 0 3rem rgb(106,163, 255)'},   
        },
      },
      animation: {
        breathing: 'breathing 2s ease-in-out infinite', 
      },
      screens:{
        "wide": "1440px",
      },
      borderWidth:{
        "70": "70px",
      },
    },
  },
  plugins: [],
};
