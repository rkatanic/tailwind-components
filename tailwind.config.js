/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(213, 14%, 12%)",
        gray: {
          50: "hsl(213, 36%, 98%)",
          100: "hsl(213, 24%, 96%)",
          200: "hsl(213, 12%, 88%)",
          300: "hsl(213, 6%, 61%)",
          400: "hsl(213, 4%, 51%)",
          500: "hsl(213, 12%, 48%)",
          600: "hsl(213, 12%, 28%)",
          700: "hsl(213, 12%, 22%)",
          800: "hsl(213, 12%, 15%)",
          900: "hsl(213, 12%, 14%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
