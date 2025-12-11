import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: '#FAFAF8', // Warm off-white
        surface: '#FFFFFF',
        primary: '#1A1A1A', // Deep charcoal
        secondary: '#525252', // Medium grey
        accent: '#2563EB', // Blue-600 - Bold and professional
        'accent-warm': '#60A5FA', // Blue-400 (Light blue accent)
        'accent-deep': '#1E40AF', // Blue-800 (Deep blue)
        line: '#E5E5E0' // Subtle warm grey
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
