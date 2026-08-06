/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bettom: {
          blue: '#031A9A',
          'blue-dark': '#031473',
          'blue-navy': '#020E50',
          'blue-deep': '#020931',
          red: '#FF2925',
          bg: '#E8E8E8',
          card: '#FFFFFF',
          sidebar: '#F9F8F8',
          surface: '#F5F5F5',
          border: '#DBDBDB',
          hover: '#E6E6E6',
          odds: '#E8E8E8',
          text: '#000000',
          muted: '#636363',
          subtle: '#828282',
          accent: '#031A9A',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
