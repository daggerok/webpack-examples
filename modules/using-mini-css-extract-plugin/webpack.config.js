const { resolve } = require('path');
const dist = resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// tag::content[]
const mode = process.env.NODE_ENV || 'production';
const isProduction = mode === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode,
  // ...
  // end::content[]
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name]-[hash:8].js',
    path: dist,
  },
  devServer: {
    contentBase: dist,
    overlay: true,
  },
  // tag::content[]
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          // 'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
        ],
      },
      // end::content[]
      {
        test: /\.less$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.sass$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(ico|jpg|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      // tag::content[]
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash:8].css',
    }),
    // end::content[]
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      minify: isProduction ? {
        minifyJS: true,
        minifyCSS: true,
        quoteCharacter: '"',
        decodeEntities: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true
      } : {},
    }),
    // tag::content[]
  ],
};
// end::content[]
