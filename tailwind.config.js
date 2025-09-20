/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Dancing Script"', 'cursive'],
        'body': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
