const path = require('path')
module.exports = {
  lintOnSave: false, // 去掉eslint保存检查
  css: {
    extract: false, //强制使用内联样式，这样打包出的插件样式会内置在js中，不需要单独引入
  },
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  devServer: {
    // 环境配置
    host: 'localhost',
    port: 9999,
    https: true,  //是否以https启动
    open: true, //配置自动启动浏览器(按照devServer的配置host:port)
    // proxy: {}
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
}
