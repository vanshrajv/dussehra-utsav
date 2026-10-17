/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        festival: {
          ink: "#250b16",
          wine: "#54142a",
          saffron: "#ff8a22",
          gold: "#ffd27a",
          cream: "#fff5e7"
        }
      }
    }
  },
  plugins: []
};