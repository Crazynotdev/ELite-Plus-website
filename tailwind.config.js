module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'lycee-blue': '#152a6e',
        'lycee-purple': '#6c4edb',
        'lycee-pink': '#e155b9'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
