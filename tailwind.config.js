/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      textColor:[]
    },
    fontFamily: {
      sans: 'Poppins, Noto Sans Thai',
      mc: 'Minecraftia',
      mono: 'Jetbrains Mono'
    }
  },
  plugins: [],
};
