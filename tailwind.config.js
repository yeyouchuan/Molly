const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-fraunces)', ...fontFamily.serif],
      },
    },
    keyframes: {
      scale: {
        from: { transform: 'scale(0.5)' },
        to: { transform: 'scale(1)' },
      },
    },
    animation: {
      scale: 'scale 50ms ease-in-out',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addVariant }) {
      addVariant('data-delayed-open', "&[data-state='delayed-open']");
    }),
  ],
};
