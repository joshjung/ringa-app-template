const path = require('path');
const ROOT_PATH = path.resolve(process.env.PWD);

require('babel-polyfill');

module.exports = {
  name: 'RingaJS Application Template',
  entry: {
    app: path.resolve(ROOT_PATH, 'app/src/index.js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      'ringa': path.resolve(__dirname, '../node_modules/ringa'),
      'react-ringa': path.resolve(__dirname, '../node_modules/react-ringa')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../app/src'),
          path.resolve(__dirname, '../node_modules/ringa'),
          path.resolve(__dirname, '../node_modules/react-ringa'),
        ],
        loaders: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            compact: false
          }
        }
      }
    ]
  }
};
