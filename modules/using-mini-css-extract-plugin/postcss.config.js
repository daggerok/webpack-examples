const plugins = {
  'postcss-preset-env': {},
  'autoprefixer': {
    browsers: [
      'last 100 versions', // ;P)
    ]
  },
  'precss': {},
};

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
  plugins['cssnano'] = {};
}

module.exports = {
  plugins,
};
