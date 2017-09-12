const path = require('path')
// 管理输出
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// 清除构建目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['lodash']
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  output: {
    // filename: '[name].bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
}