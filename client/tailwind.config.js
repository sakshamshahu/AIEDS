/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-background': '#0B121A',
        'secondary-background' : '#7b7b7b29',
        'tertiary-background' : "#0B1823",
        'primary-button-background' : "#87D8D8",
        'secondary-white': '#c7c7c7',
        'primary-white': '#FFF',
        'tertiary-white': '#BABABA',
        'secondary-grey' : '#898080',
        'tertiary-grey' : '#DCC7BC',
        'tertiary-grey-2' : '#E7C4B1',
        'footer-background' : '#11171D',
        'textbox-border' : '#365374',
        'textbox-background' : '#70DADA80',
        'textbox-background-hover' : '#57EEEE80',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontFamily: {
        redhat: ['"Red Hat Display"', 'sans-serif'],
        plusjakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        natosans: ['"Nato Sans Hong Kong"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif']
      },
      animation: {
        'animate-pulse': 'pulse 10s infinite',
      }
    },
  },
  plugins: [],
}

