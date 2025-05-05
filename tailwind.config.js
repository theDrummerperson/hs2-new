// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bm-cross-button',
    'bm-cross'
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/gallery/hbfinalsmb.svg')",
      },
      colors: {
        offwhite: "#F9F6F1", // ✅ this is correct
        charcoal: "#222222",
        oxblood: "#8A0303",
      },
    },
  },
  plugins: [],
}
