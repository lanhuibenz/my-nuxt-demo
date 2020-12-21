import axiosData from './config/axios'
const proxyList = require('./config/proxy-list')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins is just like needs to install by Vue, as. Vue.install(elementUI)... and the elementUI is a plugin
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/rap2',
    '@/plugins/dayjs'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],
  axios: axiosData,

  proxy: proxyList,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    extend(config, { isDev, isClient }) {
      if (isDev) {
        config.devtool = isClient ? 'eval-source-map' : 'inline-source-map'
      }
    }
  }

}
