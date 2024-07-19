/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f6f7",
        accent: "#01C394",
        black: "#031317",
        gray: "#656565",
      },
    },
  },
  plugins: [],
};
