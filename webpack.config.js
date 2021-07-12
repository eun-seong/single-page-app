const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './front/static/js/index.js',
    about: './front/static/js/about.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
