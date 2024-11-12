/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          'clash': ['"Clash Grotesk"', 'sans-serif'],
          'gotham': ['"Gotham"', 'sans-serif'],
          'serif': ['"Serif"', 'serif'],
        },
      },
    },
  },
  plugins: [],
}

