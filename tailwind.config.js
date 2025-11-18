export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D94F2B",   // MakeBurger brand orange
        dark: "#1A1A1A",
        light: "#F5F5F5",
      },
      fontFamily: {
        apricot: ['Apricot', 'cursive'],
        display: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};