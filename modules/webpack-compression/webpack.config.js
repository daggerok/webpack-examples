const { resolve } = require('path');
const dist = resolve(__dirname, 'dist');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const safety = env => env || process.env || {};
const mode = env => safety(env).NODE_ENV || 'production';
const isProduction = env => 'production' === mode(env);

// tag::content[]
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = env => ({
  // ...
  // end::content[]
  entry: {
    main: [
      './src/index.js',
    ],
  },
  mode: mode(env),
  output: {
    filename: '[name]-[contenthash].js',
    path: dist,
  },
  devServer: {
    contentBase: dist,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          'babel-loader',
        ],
        include: resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/i,
        use: [
          isProduction(env) ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          isProduction(env) ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
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
        test: /\.s(a|c)ss$/i,
        use: [
          isProduction(env) ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
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
          isProduction(env) ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
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
              name: '[name]-[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  // tag::content[]
  plugins: [
    // end::content[]
    isProduction(env) ? new BabelMinifyPlugin() : undefined,
    // isProduction(env) ? new UglifyJsPlugin() : undefined,
    isProduction(env) ? new OptimizeCssPlugin() : undefined,
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      minify: isProduction(env) ? {
        minifyJS: true,
        minifyCSS: true,
        quoteCharacter: '"',
        decodeEntities: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true
      } : {},
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode(env)),
      },
    }),
    // tag::content[]
    isProduction(env) ? new CompressionPlugin({ algorithm: 'gzip' }) : undefined,
    isProduction(env) ? new BrotliPlugin() : undefined,
  ].filter(p => !!p),
});
// end::content[]
