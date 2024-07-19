/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eff5f7",
        accent: "#01C394",
        black: "#031317",
      },
      fontFamily: {
        sans: ['"Inter var", sans-serif'],
      },
      fontSize: {
        s: "26px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
