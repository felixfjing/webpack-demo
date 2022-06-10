const path = require('path')
const resolve = require('./resolve')
const pkg = require('../package.json')
const entry = require('./component_entry')

const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    path: resolve('lib'),
    filename: '[name]/index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
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
      filename: '[name]/style.css',
      chunkFilename: `[name]/style.css`
    })
  ]
}
