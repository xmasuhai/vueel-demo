module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', ['@vue/babel-preset-jsx', {
    compositionAPI: true
    /* 'injectH': false */
  }] // 开启 jsx
  ], plugins: [/*'@vue/babel-plugin-jsx',*/
    ['@babel/plugin-transform-typescript', {
      isTSX: true
    }] // 开启 typescript
  ]
}
