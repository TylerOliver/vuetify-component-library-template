module.exports = {
  configureWebpack: {
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue',
      },
      vuetify: {
        commonjs: 'vuetify',
        commonjs2: 'vuetify',
        amd: 'vuetify',
        root: 'Vuetify',
      },
    },
  },
};
