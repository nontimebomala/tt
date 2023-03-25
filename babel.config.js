module.exports = {
  presets: ['@vue/app'],
  env: {
    test: {
      plugins: [ 'istanbul', '@babel/plugin-proposal-optional-chaining' ]
    }
  }
}
