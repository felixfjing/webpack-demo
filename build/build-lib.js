const path = require('path')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

const resolve = (p) => path.resolve(__dirname, '../', p)

module.exports = {
  mode: "production",
  entry: resolve('func/index.js'),
  output: {
    filename: 'index.js',
    path: resolve('lib'),
    library: 'vp-utils',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options:{
            //   plugins: ["@babel/plugin-transform-runtime"]
            // }
          }
        ]
        // options: {
        //   // 预设：指示babel做怎么样的兼容性处理
        //   presets: [
        //     '@babel/preset-env'
        //     // [
        //     //   '@babel/preset-env',
        //     //   {
        //     //     // 按需加载
        //     //     useBuiltIns: 'usage',
        //     //     // 指定core-js版本
        //     //     corejs: {
        //     //       version: 3
        //     //     },
        //     //     // 指定兼容性做到哪个版本浏览器
        //     //     targets: {
        //     //       chrome: '60',
        //     //       firefox: '60',
        //     //       ie: '9',
        //     //       safari: '10',
        //     //       edge: '17'
        //     //     }
        //     //   }
        //     // ]
        //   ]
        // }
      }
    ]
  },
  plugins: [
    new ProgressBarWebpackPlugin(),
  ]
}
