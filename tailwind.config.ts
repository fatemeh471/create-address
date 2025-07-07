/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#00BFA5",
        },
        gray: {
          100: "#37474F",
          200: "#D4D4D4",
          300: "#B6B6B6",
          400: "#9B9B9B",
          500: "#757575",
        },
        warning: {
          100: "#F29C1F",
        },
        red: {
          500: "#E61236",
        },
      },
    },
  },
  plugins: [],
};
