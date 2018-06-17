const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// tag::content[]
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssContent = new ExtractTextPlugin('[name].css');
const lessContent = new ExtractTextPlugin('[name].less.css');

module.exports = {
  // ...
  // end::content[]
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: join(__dirname, '../dist'),
    overlay: true,
  },
  // tag::content[]
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssContent.extract([
          'css-loader',
        ]),
      },
      {
        test: /\.less$/i,
        use: cssContent.extract([
          'css-loader',
          'less-loader',
        ]),
      },
    ],
  },
  plugins: [
    cssContent,
    lessContent,
    // ...
    // end::content[]
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
};
