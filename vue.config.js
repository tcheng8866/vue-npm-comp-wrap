const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false, // 去掉eslint保存检查
  css: {
    extract: false, //强制使用内联样式，这样打包出的插件样式会内置在js中，不需要单独引入
  },
  
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  
  // 扩展 webpack 配置，src
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@examples', resolve('examples'))
  },

  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
