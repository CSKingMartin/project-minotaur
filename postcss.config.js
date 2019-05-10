module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-nested'),
    require('postcss-custom-media')({
      preserve: true,
      importFrom: 'src/static/variables/breakpoints.css'
    }),
    require('postcss-preset-env')({
      stage: 1,
      preserve: true
    })
  ]
}
