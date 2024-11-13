/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'h1': ['Police-H1', 'sans-serif'],
        'p' : ['Police-P', 'sans-serif'],
      },
    },
    plugins: [],
  }
}
