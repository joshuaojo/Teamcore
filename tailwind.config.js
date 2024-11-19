/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgba(255, 102, 0, 1)', 
        customwhite: 'rgba(196, 196, 196, 1)', 
        customorangeg: ' rgba(255, 240, 229, 1)',
        Custombrown: 'rgba(255, 240, 229, 1)',
        customgrey: 'rgba(166, 166, 166, 1)', 


      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(246, 246, 246, 1), rgba(246, 246, 246, 0))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}
 