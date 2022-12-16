

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
      'auto': `repeat(auto-fit, minmax(20px, 200px));`
    },

    extend: {
      fontFamily: {
        Abel: ['"Abel", sans-serif;'],
      },
      screens: {
        sm: "840px",
        md: "1080px",
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
      fadeIn: {
        "0%": {
          opacity: "0%",
        },
        "100%": {
          opacity: "100%",
        },
      },
      fadeOut: {
        "0%": {
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
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
      fade: {
        "0%":{
          transform: "rotateY(0deg)",
          
         
        },
        "25%":{
          transform: "rotateY(90deg)",
       
        },
        "75%":{
          transform: "rotateY(90deg)",
       
        },
        "100%": {
          transform: "rotateY(0deg)",
        
        }
      }
  
    },
    animation: {
      pulseShadow: "pulse 1.25s ease-in-out infinite",
      fadeIn: "fadeIn 1s ease-in infinite",
      fadeOut: "fadeOut 1s ease 1",
      fade: "fade 1000ms ease 1",
      rotateRight: "rotateRight 1s linear infinite"
    },
  },
  plugins: [],
};
