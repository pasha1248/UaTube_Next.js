/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const plugins = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7652',
        purple: '#6C5ECF',
        'light-blue': '#32A8E2',
      },
    },
    keyframes: {
      fade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      fade: 'fade 0.4s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out',
    },
  },
  plugins: [
    plugins(({ addComponents }) => {
      addComponents({
        '.shadow-block': {
          display: 'block',
          boxShadow:
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          animation: 'scaleIn 0.35s ease-in-out',
          backgroundColor: '#272532',
        },
      })
    }),
  ],
}
