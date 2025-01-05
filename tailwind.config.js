/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'cursive'], // Define 'kalam' as a custom font family
      },
    },
  },
  plugins: [],
};
