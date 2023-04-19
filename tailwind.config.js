/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#CBA053",
        PrimaryLight: "#F3C76D",
        PrimaryDark: "#A87C3C",
        Secondary: "#2C3083",
      },
    },
  },
  plugins: [],
};
