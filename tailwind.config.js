/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          warmWhite: '#FDFBF7',
          offWhite: '#F5F5F0',
          ivory: '#FAF9F4',
          stone: '#EAE8E2',
          sand: '#E3DCCD',
          oat: '#E8E1D5',
          softTaupe: '#B9AD9F',
          paleGrey: '#D5D6D2',
          greige: '#C4BEB7',
          mutedMocha: '#8A7B72',
          softCharcoal: '#3A3A3A',
          stoneBlack: '#1C1C1A',
          brushedSilver: '#A2A4A1',
          mutedBronze: '#816F5E',
          softOlive: '#8A8679',
          dustyClay: '#B09C91',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.075em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slow': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1500': '1500ms',
      }
    },
  },
  plugins: [],
}
