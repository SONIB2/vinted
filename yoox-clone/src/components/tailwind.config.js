module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', // Make sure this line is included
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#007bff',
        customGray: '#f8f9fa',
      },
      spacing: {
        128: '32rem', // Example of a custom spacing value
      },
    },
  },
  plugins: [],
};
