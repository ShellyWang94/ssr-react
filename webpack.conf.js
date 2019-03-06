const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-plugin');
const path = require('path');
const fse = require('fs-extra');
const appDir = './build';
fse.emptyDirSync(appDir, err => {
  if(err) console.log(err);
  console.log('clean build file···');
})
module.exports = {
  entry: {
    index: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, appDir),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)/,
        exclude: '/node_modules',
        loader: require.resolve('babel-loader')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      filename: 'pageindex.html'
    })
  ]
}