/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9FAFA',
        secondary: '#D1F2E2',
        accent: '#304144',
        highlight: '#8CA19C',
        text: '#76CFA9',
        'custom-gray': '#F5F5F5',
        'custom-gray-2': '#E5E5E5',
        'custom-gray-3': '#D4D4D4',
        'custom-blue': '#2c3e50',
      },
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
    },
  },
  variants: {},
  plugins: [],
};