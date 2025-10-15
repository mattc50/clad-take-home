/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['30px', { lineHeight: '38px', fontWeight: '600' }],
        h2: ['24px', { lineHeight: '32px', fontWeight: '500' }],
        text: ['16px', { lineHeight: '24px', fontWeight: '500' }],
        input: ['16px', { lineHeight: '20px', fontWeight: '400' }],
        supporting: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        date: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        button: ['14px', { lineHeight: '20px', fontWeight: '600' }],
      },
      colors: {
        black: '#000000',
        grey: {
          300: '#D0D5DD',
          500: '#667085',
          600: '#475467',
          700: '#344054',
        },
        error: {
          500: '#F04438',
        }
      },
      boxShadow: {
        xs: '0 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
  },
  plugins: [],
};
