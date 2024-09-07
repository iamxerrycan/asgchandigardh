module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'], 
      },
      borderRadius: {
        '4xl': '2rem', 
      },
      boxShadow: {
        'custom-inset': '0px 4.96px 12.4px 2.48px #00000040 inset', 
        'custom-bottom-left': '5.67px 5.67px 3.78px 0px #00000066', 
      },
    },
  },
  plugins: [],
};
