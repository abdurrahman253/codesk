module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#8BC53F',
        'deep-blue': '#454199',
        'accent-orange': '#F28C38',
        black: '#1D1D1B',
      }
    },
  },
  plugins: [require('daisyui')],
   daisyui: { themes: ['light'] }
}
