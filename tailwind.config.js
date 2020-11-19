module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#26b54c',
      'secondary': '#22a3c3',
      
     }),
    fontFamily: {
      'display': ['Public sans'],
      'body': ['Public sans'],
     },
    extend: {
       backgroundImage: theme => ({
         'mobile-background': "url('~@/assets/images/bg-intro-mobile.svg')",
         'desktop-background': "url('~@/assets/images/bg-intro-desktop.svg')",
        })
    },
  },
  variants: {},
  plugins: [],
}
