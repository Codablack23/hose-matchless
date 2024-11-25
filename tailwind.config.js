/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"rgba(0, 45, 98, 1)",
        "secondary":"rgba(255, 215, 0, 1)",
        "complementary":"rgba(0, 128, 128, 1)",
      }
    },
  },
  plugins: [],
}