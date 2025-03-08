/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['orpheuspro', 'serif'],
        'handwriting': ['"Reenie Beanie"', 'cursive'],
        'serif': ['adobe-garamond-pro', 'serif'],
      },
    },
  },
  plugins: [],
}

