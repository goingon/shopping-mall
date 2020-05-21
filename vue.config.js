module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'commonjs': '@/commonjs',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
