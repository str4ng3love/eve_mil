/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    boxShadow:{
      'backShadow': "0rem 1rem 1rem black",
      'link': "0rem 0rem 1rem white",
      'linkB': "0rem 0rem 0.5rem white",
      'wrapperShadow': '0rem 0rem 1rem black',
    },
    
    extend: {
  
      fontFamily: {
        
        Abel: ['"Abel", sans-serif;'],
      },
      screens:{
        sm: '840px',
        md: '1080px'
      }
    },
    keyframes: {
      pulse: {
        '0%, 100%' : {
          boxShadow: '0rem 0rem 1rem white'
        },
        '50%': {
          boxShadow: '0rem 0rem 0.5rem white'
      }
    },
    },
    animation: {
      pulseShadow: 'pulse 1.25s ease-in-out infinite'
    }
  },
  plugins: [],
}
