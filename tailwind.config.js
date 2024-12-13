/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pantone-blue": "#0061D1", // Pantone Classic Blue
        "pantone-blue-dark": "#003D8A",
      },
    },
  },
  plugins: [],
};
