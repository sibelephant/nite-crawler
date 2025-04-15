/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/kanyeesq.jpeg')",
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { 
            transform: 'translateX(-100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideRight: 'slideRight 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInDelay1: 'fadeIn 0.5s ease-out 100ms forwards',
        fadeInDelay2: 'fadeIn 0.5s ease-out 200ms forwards',
        fadeInDelay3: 'fadeIn 0.5s ease-out 300ms forwards',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};