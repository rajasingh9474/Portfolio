/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        dark: {
          bg: '#090d16',
          card: 'rgba(17, 24, 39, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: '#111827',
        },
        light: {
          bg: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.8)',
          border: 'rgba(0, 0, 0, 0.08)',
          subtle: '#f1f5f9',
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 35px -5px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.4)',
      }
    },
  },
  plugins: [],
}
