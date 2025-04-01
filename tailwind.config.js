
import typography from "@tailwindcss/typography";

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
        'serif': ['adobe-garamond-pro', 'serif'],
        'comic': ['Comic Sans MS', 'cursive'],
      },
      colors: {
        'mint': '#e5e9e5',
        'peppermint': '#324232',
      },
      animation: {
        'spin-fast': 'spin 0.1s linear infinite',
      },
    },
  },
  plugins: [
    typography
  ],
}

