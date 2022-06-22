module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgueLayersByDefault: true,
  },
  purgue:[],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'arial': 'Arial'
      },
      fontSize:{
        'titulo': '2rem'
      },
    },
  },
  variants: [],
  plugins: [],
}