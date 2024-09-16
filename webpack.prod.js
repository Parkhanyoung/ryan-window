const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          publicPath: './assets/',
          outputPath: 'assets/',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      publicPath: './',
    }),
    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*\.webp$/, 
          attributes: {
            as: 'image', 
            type: 'image/webp', 
          },
        },
      ],
    })
  ]
});
