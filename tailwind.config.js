/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fira Code': ['Fira-Code', 'Sans-Serif']
      }
    },
  },
  plugins: [],
}

