const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.p?css$/,
      use: ExtractTextPlugin.extract({
        fallbackLoader: [{
          loader: 'style-loader',
        }],
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
        }],
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};