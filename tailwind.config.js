/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Include JSX files for Tailwind to scan
  ],
  theme: {
    extend: {
      colors: {
        dark: '#333333', // Define your custom dark color
      },
      animation: {
        "gradient-anim": "gradient 5s ease infinite",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  darkMode: 'class', // This enables dark mode based on a class
  plugins: [],
}