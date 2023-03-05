/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily : {
        "primary" : ['Hanken Grotesk', 'sans-serif'],
        "secondary" : ['Saira Extra Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
