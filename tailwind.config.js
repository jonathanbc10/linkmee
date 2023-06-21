/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
      },
      screens: {
        xs: '450px'
      }
    },
  },
  plugins: [],
}

