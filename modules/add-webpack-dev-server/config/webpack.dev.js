const HtmlWebpackPlugin = require('html-webpack-plugin');
//tag::content[]
const { resolve, join } = require('path');

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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
  //tag::content[]
  // ...
  devServer: {
    contentBase: join(__dirname, '../dist'),
    // show / overlay errors in browser
    overlay: true,
  },
};
//end::content[]
