/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FDFCFA',
          100: '#FAF9F7',
          200: '#F5F3EF',
          300: '#EDEBE6',
          400: '#E0DDD6',
          500: '#D4D0C8',
        },
        charcoal: {
          900: '#1a1a1a',
          800: '#2D2D2D',
          700: '#3D3D3D',
          600: '#4A4A4A',
          500: '#6B6B6B',
          400: '#8A8A8A',
          300: '#A3A3A3',
        },
        copper: {
          400: '#d4a574',
          500: '#c4935e',
          600: '#b07d45',
          700: '#8e6437',
        },
        gold: {
          400: '#d4b896',
          500: '#c9a87c',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        reveal: 'reveal 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
