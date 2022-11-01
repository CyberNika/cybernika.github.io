/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#be123c",
        // brand: '#475569',
        light: {
          soft: "#fffef7",
        },
        divider: {
          light: "#475569",
          dark: "#e2e8f0",
        },
      },
      animation: {
        keyframes: {
          sway: {
            from: { transform: "translate3d(-20px,0,0)" },
            to: { transform: "translate3d(20px,0,0)" },
          },
        },
        animation: {
          sway: "sway 3s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
