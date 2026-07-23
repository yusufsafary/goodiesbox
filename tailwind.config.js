/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        pp: {
          bg: '#080810',
          card: '#0f0f1a',
          border: '#1e1e35',
          purple: '#7c3aed',
          'purple-light': '#a78bfa',
          amber: '#f59e0b',
          'amber-light': '#fcd34d',
          green: '#10b981',
          pink: '#ec4899',
          receipt: '#fef9f0',
          'receipt-dark': '#f5e6c8',
          muted: '#6b7280',
          text: '#e2e8f0',
          'text-dim': '#94a3b8',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'receipt-print': 'receiptPrint 0.8s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        receiptPrint: {
          from: { opacity: 0, maxHeight: 0 },
          to: { opacity: 1, maxHeight: '2000px' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
