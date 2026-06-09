/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#1a1f2b',
          950: '#0b0f17',
        },
      },
    },
  },
  plugins: [],
}