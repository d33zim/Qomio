import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#F5F5F5',
        surface: '#FFFFFF',
        primary: '#111111',
        secondary: '#555555',
        accent: '#06b6d4', // Cyan-500 for Qomio
        line: '#E0E0E0'
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
