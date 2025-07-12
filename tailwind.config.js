/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // ← This enables dark mode using a CSS class
  content: ['./app/**/*.{js,ts,jsx,tsx}'],  // ← This tells Tailwind where your files live
  theme: { extend: {} },
  plugins: [],
};
