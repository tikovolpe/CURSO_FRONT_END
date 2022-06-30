/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgueLayersByDefault: true,
  },
  purgue:[],
  // darkMode: false, // or 'media' or 'class'
  // darkMode: 'media',
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: [],
  plugins: [
    require('@tailwindcss/forms')
  ],
}