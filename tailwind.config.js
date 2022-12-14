/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDE4F7",
        white: "#FAF2F2",
        brick: "#FCF4F0",
        secondaryTextColor: "#B0938D",
      },
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      '2k': '2048px',
      },
      fontFamily: {
        averia: ['Averia Serif Libre', 'cursive'],
        inter: ['Inter', "sans-serif"]
      }
    },
  },
  plugins: [],
};
