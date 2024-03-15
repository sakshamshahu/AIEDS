/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-background': '#0B121A',
        'secondary-background' : '#7b7b7b29',
        'secondary-white': '#c7c7c7',
        'primary-white': '#FFF',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontFamily: {
        redhat: ['"Red Hat Display"', 'sans-serif'],
        plusjakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'animate-pulse': 'pulse 10s infinite',
      }
    },
  },
  plugins: [],
}

