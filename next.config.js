const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]'
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: config => {
    config.resolve.extensions.push('.mdx')
    return config
  }
}

module.exports =
  withMDX({ })(
    withCSS(config)
  )
