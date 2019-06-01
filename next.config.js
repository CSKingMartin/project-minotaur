const webpack = require('webpack');
const path = require('path');
const pkgpath = require('packpath');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx');

// grab what we need from package.json
const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));
const source = (...paths) => path.resolve(pkgpath.self(), directories.source, ...paths);

const config = {
  target: 'serverless',
  cssModules: false,
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config, { dev }) => {
    config.resolve.extensions.push('.mdx')
    config.resolve.alias = {
      utilities: path.resolve(path.join(__dirname, 'lib/utilities')),
      '@atoms': source('atoms'),
      '@molecules': source('molecules'),
      '@organisms': source('organisms'),
      '@templates': source('templates'),
      '@hanga': source('hanga'),
      '@static': source('static'),
      ...config.resolve.alias
    }
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
        useState: ['react', 'useState'],
        useEffect: ['react', 'useEffect'],
        PropTypes: 'prop-types',
        utilities: 'utilities',
        StatefulContext: 'react-stateful-context'
      }),
      new CopyWebpackPlugin([{
        from: source('static'),
        to: 'assets/static'
      }], {
        ignore: ['README.md']
      })
    )
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [{
        loader: 'url-loader'
      }]
    });

    return config
  }
}

module.exports = withMDX({ })(withCSS(config));
