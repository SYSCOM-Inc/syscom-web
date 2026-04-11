/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        card: '#FFFFFF',
        border: '#E2E8F0',
        cyan: '#0891B2',
        purple: '#7C3AED',
        emerald: '#059669',
        rose: '#E11D48',
        amber: '#D97706',
        white: '#111827',
        muted: '#4B5563',
      },
      fontFamily: {
        heading: ['"Space Mono"', 'monospace'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-1': 'fadeUp 0.7s ease-out 0.1s forwards',
        'fade-up-2': 'fadeUp 0.7s ease-out 0.2s forwards',
        'fade-up-3': 'fadeUp 0.7s ease-out 0.3s forwards',
        'fade-up-4': 'fadeUp 0.7s ease-out 0.4s forwards',
        'fade-up-5': 'fadeUp 0.7s ease-out 0.5s forwards',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'chat-slide': 'chatSlide 0.3s ease-out',
        'bounce-dot': 'bounce 1.2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'width-grow': 'widthGrow 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        chatSlide: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        bounce: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        widthGrow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--target-width)' },
        },
      },
    },
  },
  plugins: [],
};
