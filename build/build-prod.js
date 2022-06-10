const path = require('path')
const resolve = require('./resolve')
const pkg = require('../package.json')

const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: resolve('packages/index.js'),
  output: {
    path: resolve('lib'),
    filename: 'index.js',
    chunkFilename: '[id].js',
    library: pkg.name,
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.(less|scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // 使用miniCssExtractPlugin.loader代替style-loader
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss插件
                require('autoprefixer')
              ]
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader'
      //     }
      //   ]
      // }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 打包css
    new MiniCssExtractPlugin({
      filename: 'style/index.css',
      chunkFilename: `style/index.css`
    })
  ]
}
