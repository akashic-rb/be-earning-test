/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004DFF",
        secondary: "#BBCFFB",
        green: "#04B800",
        "light-gray": "#D3D7DB",
        error: "#FF0366",
      }
    },
  },
  plugins: [],
}
