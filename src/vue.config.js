module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@':'src',
        'assets': 'src/assets',
        'common': 'src/common',
        'views': 'src/views',
        'store': 'src/store',
        'components':'src/components'
      }
    }
  }
}