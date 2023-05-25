/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#441231',
        secondary: '#1D1220',
        accent: '#CA527D',
        highlight: '#40D9DC',
        text: '#1F6474',
      },
    },
  },
  variants: {},
  plugins: [],
};