/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft earthy color palette
        earth: {
          50: '#faf9f6',
          100: '#f4f1ea',
          200: '#e8e2d4',
          300: '#dac9b3',
          400: '#c9ad8f',
          500: '#b8926d',
          600: '#a67c5a',
          700: '#8b6548',
          800: '#70523c',
          900: '#5c4433',
        },
        sage: {
          50: '#f7f8f7',
          100: '#eef0ed',
          200: '#dde1d9',
          300: '#c4cbbf',
          400: '#a7b29f',
          500: '#8c9783',
          600: '#727d6a',
          700: '#5d6556',
          800: '#4d5347',
          900: '#41453c',
        },
        sand: {
          50: '#fdfcfa',
          100: '#faf7f1',
          200: '#f3ede1',
          300: '#e9ddc8',
          400: '#dcc7a4',
          500: '#cfb082',
          600: '#be9763',
          700: '#a47d4f',
          800: '#886744',
          900: '#70563a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

