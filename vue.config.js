const webpack = require('webpack')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false, // 去掉eslint保存检查
  css: {
    extract: false //强制使用内联样式，这样打包出的插件样式会内置在js中，不需要单独引入
  },
  // 基本路径
  publicPath: './',
  devServer: {
    port: 8888,
    open: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  },
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    config.entry.app = ["babel-polyfill", resolve('src/main.js')],
      config.resolve.alias
      .set('@', resolve('src'))
      .set('@packages', resolve('/packages'))
  }
}
