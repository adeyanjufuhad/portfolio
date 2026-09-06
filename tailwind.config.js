/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ca-surface': 'var(--ca-surface, #fdfdfb)',
        'ca-ink': 'var(--ca-ink, #191510)',
        'ca-gray': 'var(--ca-gray, #857b69)',
        'ca-chrome': 'var(--ca-chrome, #ece3d1)',
        'ca-tick': 'var(--ca-tick, #c0b49d)',
        'ca-blue': 'var(--ca-blue, #2b57d6)',
        'ca-cyan': 'var(--ca-cyan, #b7c6ef)',
        'ca-yellow': 'var(--ca-yellow, #f7c948)',
        'ca-yellow-soft': 'var(--ca-yellow-soft, #f3e2ad)',
        'ca-magenta': 'var(--ca-magenta, #ff4d8d)',
        'ca-green': 'var(--ca-green, #16b06a)',
        'ca-mint': 'var(--ca-mint, #a9dfc6)',
        'ca-pink-soft': 'var(--ca-pink-soft, #ffc6da)',
        'ca-purple': 'var(--ca-purple, #a9dfc6)',
        'ca-orange': 'var(--ca-orange, #ff6a35)',
        'ca-brown': 'var(--ca-brown, #5c3a2e)',
        'ca-star': 'var(--ca-star, #f7c948)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Handjet', 'Archivo Black', 'Anton', 'sans-serif'],
        hand: ['"Just Me Again Down Here"', 'cursive', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      keyframes: {
        'ca-wobble': {
          '0%, 100%': { transform: 'rotate(6deg)' },
          '50%': { transform: 'rotate(-5deg)' }
        },
        'ca-spin': {
          to: { transform: 'rotate(360deg)' }
        },
        'ca-blink': {
          '0%, 91%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.12)' }
        },
        'ca-emoji-swap': {
          '0%, 48%': { opacity: '1' },
          '52%, 98%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'ca-wobble': 'ca-wobble 2.8s ease-in-out infinite',
        'ca-spin-slow': 'ca-spin 9s linear infinite',
        'ca-blink': 'ca-blink 4.4s ease-in-out infinite',
        'ca-emoji-swap': 'ca-emoji-swap 4.4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
