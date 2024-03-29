// ESLint ignore first line
/* eslint-disable */
const path = require('path')

/*
function resolve(dir) {
  return path.join(__dirname, dir)
}
*/

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue2': path.join(__dirname, './node_modules/vue/dist/vue.esm.js'),
        'vue.2': './node_modules/vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.ts', '.jsx', '.tsx']
    },
    module: {
      rules: [{
        test: /\.(jsx|tsx|ts)$/,
        loader: 'babel-loader'
      }]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueel-demo/'
    : '/',
  lintOnSave: false,
  css: {
    requireModuleExtension: true
  },
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons') // 确定目录
    config.module.rule('svg').uses.clear() //
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/) // .test(/\.(svg)(\?.*)?$/)
      .include.add(dir).end() // 指定 仅包含 icons 的目录
      .use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({extract: false}).end() // 不解析出文件
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({
        ...options,
        plugins: [{removeAttrs: {attrs: 'fill'}}]
      }))
      .end()

    config.plugin('svg-sprite')
      .use(
        require('svg-sprite-loader/plugin'),
        [{plainSprite: true}]
      )

    config.module.rule('svg').exclude.add(dir)// 其他 svg loader 排除 icons 目录
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}
