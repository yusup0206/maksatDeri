/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
        },
        cBlack: {
          100: "#333",
        },
        primaryTransparent: "var(--primaryTransparent)",
      },
    },
  },
  plugins: [],
};
