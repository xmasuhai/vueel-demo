module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', ['@vue/babel-preset-jsx', {
    compositionAPI: true,
    /*'injectH': false*/
  }] // 开启 jsx
  ],
  plugins: [
    /*'@vue/babel-plugin-jsx', // for Vue3 only */
    ['@babel/plugin-transform-typescript', {
      isTSX: true
    }], // 开启 typescript
    /*"@vue/babel-sugar-composition-api-inject-h",*/
    /*"@vue/babel-sugar-composition-api-render-instance",*/
    /*"@vue/babel-sugar-v-model",
    "@vue/babel-sugar-v-on"*/
  ]
}
