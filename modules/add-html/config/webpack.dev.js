const { resolve } = require('path');
//tag::content[]
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//end::content[]
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: resolve(__dirname, '../dist'),
  },
  //tag::content[]
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
};
//end::content[]
