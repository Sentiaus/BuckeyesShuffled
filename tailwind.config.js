/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'buckeyes-logo': "url('/Buckeyes Shuffled Logo.jpeg')"
      }
    },
  },
  plugins: [],
}

