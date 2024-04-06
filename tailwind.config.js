/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'handwriting': ['"Reenie Beanie"', 'cursive'],
        'serif': ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
}

