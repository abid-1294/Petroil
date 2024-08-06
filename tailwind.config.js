/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
      colors: {
        'primary_color': '#F40404',
      },
      fontFamily: {
        'Pops': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}