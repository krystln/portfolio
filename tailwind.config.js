/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        flicker: {
          'from': {
            opacity: 1,
          },
          'to': {
            opacity: 0,
          }
        }
      },
      animation: {
        flicker: 'flicker 1s cubic-bezier(1,0,0,1) infinite',
      },
      fontFamily: {
        sans: ['Exo\\ 2', 'sans-serif'],
        mono: ['Space\\ Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
