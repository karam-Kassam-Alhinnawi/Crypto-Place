/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "720px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}