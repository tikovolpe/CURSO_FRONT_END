/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgueLayersByDefault: true,
  },
  purgue:[],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': 'url(../img/bg_cidade.jpg)',
        'logo': 'url(../img/tailwind.png)'
      })
    },
  },
  variants: [],
  plugins: [],
}
