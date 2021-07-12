const path = require('path');

module.exports = {
  mode: 'production',
  entry: './front/static/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
};
