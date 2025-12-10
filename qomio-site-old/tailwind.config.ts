import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#030303',
        'dark-secondary': '#0A0A0A',
        'dark-tertiary': '#1A1A1A',
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.8s ease-out forwards',
        'beam-v': 'beamV 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'beam-h': 'beamH 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'beam-h-rev': 'beamHRev 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        beamV: {
          '0%': { top: '-150px', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        beamH: {
          '0%': { left: '-150px', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        beamHRev: {
          '0%': { right: '-150px', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { right: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
