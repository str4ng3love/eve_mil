const plugin= require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      backShadow: "0rem 1rem 1rem black",
      link: "0rem 0rem 1rem white",
      linkB: "0rem 0rem 0.5rem white",
      wrapperShadow: "0rem 0rem 1rem black",
    },
    gridTemplateColumns: {
      'grid-col-1': 'repeat(1, minmax(0, 1fr));',
      'grid-col-2': 'repeat(2, minmax(0, 1fr));',
      'auto': `repeat(auto-fit, minmax(200px, 1fr));`
    },

    extend: {
      transitionProperty:{
        'height': 'height',
        'width': 'width'
      } ,
      fontFamily: {
        Abel: ['"Abel", sans-serif;'],
      },
      screens: {
        sm: "840px",
        md: "1080px",
        custom: "900px"
      },
    },
    keyframes: {
      pulse: {
        "0%, 100%": {
          boxShadow: "0rem 0rem 1rem white",
        },
        "50%": {
          boxShadow: "0rem 0rem 0.5rem white",
        },
      },
      rotateRight: {
        "0":{
          transform: "rotateZ(0deg)"
        },
        "50%":{
          transform: "rotateZ(180deg)"
        },
        "100%":{
          transform: "rotateZ(360deg)"
        }
      },
  
    },
    animation: {
      pulseShadow: "pulse 1.25s ease-in-out infinite",
      rotateRight: "rotateRight 1s linear infinite"
    },
  },
  plugins: [
    plugin(function({addUtilities, matchUtilities, addComponents, theme}) {
      addUtilities({
        '.transform-3d':{
          'transform-style':'preserve-3d'
        }
      }),
      matchUtilities({
        'translate-z': (value)=>({
          '--tw-translate-z':value,
          transform:  ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
        
        })
      }, { values: theme('translate'), supportsNegativeValues: true })
    })
  ],
};
