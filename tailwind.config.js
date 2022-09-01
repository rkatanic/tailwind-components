/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: "hsl(214, 6%, 98%)",
          100: "hsl(214, 6%, 96%)",
          200: "hsl(214, 6%, 90%)",
          300: "hsl(214, 6%, 78%)",
          400: "hsl(214, 6%, 62%)",
          500: "hsl(214, 6%, 34%)",
          600: "hsl(214, 6%, 24%)",
          700: "hsl(214, 6%, 16%)",
          800: "hsl(214, 6%, 14%)",
          900: "hsl(214, 6%, 12%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
