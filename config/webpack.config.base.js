const path = require('path');
const ROOT_PATH = path.resolve(process.env.PWD);

const config = require('./config.json');

require('babel-polyfill');

module.exports = {
  name: config.applicationName,
  entry: {
    app: path.resolve(ROOT_PATH, 'app/src/index.js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      'ringa': path.resolve(__dirname, '../node_modules/ringa'),
      'react-ringa': path.resolve(__dirname, '../node_modules/react-ringa'),
      'ringa-fw-core': path.resolve(__dirname, '../node_modules/ringa-fw-core'),
      'ringa-fw-react': path.resolve(__dirname, '../node_modules/ringa-fw-react')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(md|txt)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?![ringa|react\-ringa|react\-fw\-core|ringa\-fw\-react])/,
        loaders: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            compact: false
          }
        }
      },
      {
        test: /\.png$/,
        loader: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/png',
            name: 'assets/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
};
