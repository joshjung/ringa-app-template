const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

const path = require('path');
const ROOT_PATH = path.resolve(process.env.PWD);

baseConfig.module.loaders.push({
  test: /\.s?css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    //resolve-url-loader may be chained before sass-loader if necessary
    use: ['css-loader', 'sass-loader']
  })
});

module.exports = Object.assign({
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(ROOT_PATH, 'dist/'),
    filename: 'ringa-app.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RingaJS Application Template',
      template: path.resolve(ROOT_PATH, 'app/src/templates/index.ejs'),
      inject: false
    }),
    new ExtractTextPlugin({
      filename: 'ringa-app.css',
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /ringa-app.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: {
        except: ["$controller","$customEvent","$detail","$lastEvent","$lastPromiseError","$lastPromiseResult","$ringaEvent","$target","$thread","EventExecutor","FunctionExecutor","I18NController","I18NModel","IifExecutor","ModelWatcher","RingaEvent","Thread","ThreadFactory","_executor","done","event","fail","finalUrl","id","inspectModel","modalContainerModel","modalModel","overlay","overlayContainerModel","resume","stop","url"]
      }
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
}, baseConfig);
