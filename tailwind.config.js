/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- Permite alternar el modo oscuro agregando la clase 'dark' en el HTML
  theme: {
    extend: {},
  },
  plugins: [],
}