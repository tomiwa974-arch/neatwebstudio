/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00D9FF',
          blue: '#0EA5E9',
          purple: '#A855F7',
          pink: '#EC4899',
        }
      },
    },
  },
  plugins: [],
}
