/*
 * @Descripttion:
 * @version:
 * @Author: yangming
 * @Date: 2021-04-28 11:22:52
 * @LastEditors: yangming
 * @LastEditTime: 2021-04-28 23:41:40
 */
module.exports = {
  // 基本路径 baseURL已经过时
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true)
  },
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 开启 CSS source maps?
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/variable.scss";`, //引入全局变量
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false,
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: true,
    host: '0.0.0.0', //如果是真机测试，就使用这个IP
    port: 8080,
    https: false,
    hotOnly: false,
    // 代理
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
    before: (app) => {},
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
}
