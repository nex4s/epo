module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '25': '25px', // Mobile height
        '50': '50px', // Tablet height
      },
      fontFamily: {
        'custom': ['"pixel-font"', 'sans-serif'], // Add your custom font here
      },
    },
    screens: {
      'phone': '640px',
      'tablet': '768px',
      'laptop': '1024px',
    },
  },
  plugins: [],
};
