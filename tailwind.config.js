/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#6765C8',
        secondary: '#F9FBFE',
        accent: '#BA9CDC ',
        highlight: '#8ACAEE',
        text: '#E374F0',
        'custom-gray': '#F5F5F5',
        'custom-gray-2': '#E5E5E5',
        'custom-gray-3': '#D4D4D4',
        'custom-blue': '#2c3e50',
      },
    },
  },
  variants: {},
  plugins: [],
};