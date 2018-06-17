const { resolve, join } = require('path');
// tag::content[]
// const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  /*
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
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
  */
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'html-loader' },
        ],
      },
      {
        test: /\.(ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
// end::content[]
