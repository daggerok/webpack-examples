const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

// tag::content[]
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: join(__dirname, '../dist'),
    overlay: true,
  },
  // tag::content[]
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
};
// end::content[]
