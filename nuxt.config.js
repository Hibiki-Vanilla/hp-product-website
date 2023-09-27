import router from './router'

import env from './env'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'POWEHI',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: '7XGSBbO2_P-q94gDVZT31nKQZL6_TQc2pYpLPipXW-I',
      },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        property: 'og:image',
        href: 'https://files.myuwell.com/powehi/powehi-favicon.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://files.myuwell.com/powehi/powehi-favicon.png',
      },
    ],
    script: [
      {
        src: 'https://www.recaptcha.net/recaptcha/api.js?render=explicit',
        async: true,
        defer: true,
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7H85CDY9Z4',
        async: true,
      },
    ],
  },

  server: {
    port: env[process.env.NODE_ENV].port,
    host: env[process.env.NODE_ENV].host,
    // port:11807,
    // host:'127.0.0.1',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/base.less'],
  router,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',

    {
      src: '@/plugins/gtag.js',
      mode: 'client',
    },
    {
      src: '@/plugins/aos.js',
      ssr: false,
    },
    {
      src: '@/plugins/element-ui',
    },
    '@/plugins/router',
    '@/plugins/ctx.js',
    {
      src: '@/plugins/gRecaptcha',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '@nuxtjs/style-resources'],
  sitemap: {
    path: '/sitemap.xml',
    // 正式上线需要修改此地址  zwy
    hostname: "https://www.powehiclub.com/",
    defaults: {
      changefreq: 'always',
      lastmod: new Date(),
    },
    // 路由配置
    routes: () => {
      const routes = [
        {
          url: '/',
          changefreq: 'always',
          lastmod: new Date(), // 最后更新时间
        },
      ]
      return routes
    },
  },

  styleResources: {
    less: '@/assets/css/variables.less',
  },
  axios: {
    proxy: true,
    // prefix: '/api', // 给请求的url加上/api
  },
  proxy: {
    '/u': {
      target: env[process.env.NODE_ENV].target,
      // target:'http://127.0.0.1:11800',
      changeOrigin: true,
      // pathRewrite:{"^/api":'/'} // 把 /api 替换成 /
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    // analyze: true, // 打开打包后可查看资源体积包占比情况
    optimization: {
      // 拆包
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },

    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
    },
    loadingScreen: false,
    transpile: [/^element-ui/],
    extractCSS: {
      allChunks: true,
    },
    extend(config, ctx) {},
  },
}
