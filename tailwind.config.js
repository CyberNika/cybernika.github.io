/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      brand: '#be123c',
      // brand: '#475569',
      light: {
        soft: '#fffef7',
      },
      divider: {
        light: '#475569',
        dark: '#e2e8f0',
      },
    },
    extends: {
      animation: {
        keyframes: {
          sway: {
            from: { transform: 'translate3d(-20px,0,0)' },
            to: { transform: 'translate3d(20px,0,0)' },
          },
        },
        animation: {
          sway: 'sway 3s ease-in-out infinite',
        },
      },
    }
  },
  plugins: [],
}
