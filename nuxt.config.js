export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Школа разработки IT проектов',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Образовательный проект от студентов студентам, призванный распространить любовь к современным технологиям и IT-разработке, передать опыт, знания и просто с пользой провести время!'
      },
      {name: "msapplication-TileColor", content: "#ffffff"},
      {name: "msapplication-TileImage", content: "ms-icon-144x144.png"},
      {name: "theme-color", content: "#ffffff"},
      {property: "og:title", content: "Школа разработки IT-проектов"},
      {property: "og:url", content: "https://bonch.dev"},
      {
        property: "og:description",
        content: "Образовательный проект от студентов студентам, призванный распространить любовь к современным технологиям и IT-разработке, передать опыт, знания и просто с пользой провести время!"
      },
      {property: "og:image", content: "https://bonch.dev/og.image.logo.png"},
      {property: "og:video:width", content: "461"},
      {property: "og:video:height", content: "196"},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "icon", type: "image/svg+xml", href: "favicon.svg"},
      {rel: "mask-icon", href: "favicon.svg", color: "white"},
      {rel: "apple-touch-icon", sizes: "57x57", href: "apple-icon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: "apple-icon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: "apple-icon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "76x76", href: "apple-icon-76x76.png"},
      {rel: "apple-touch-icon", sizes: "114x114", href: "apple-icon-114x114.png"},
      {rel: "apple-touch-icon", sizes: "120x120", href: "apple-icon-120x120.png"},
      {rel: "apple-touch-icon", sizes: "144x144", href: "apple-icon-144x144.png"},
      {rel: "apple-touch-icon", sizes: "152x152", href: "apple-icon-152x152.png"},
      {rel: "apple-touch-icon", sizes: "180x180", href: "apple-icon-180x180.png"},
      {rel: "icon", type: "image/png", sizes: "192x192", href: "android-icon-192x192.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "96x96", href: "favicon-96x96.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png"},
      {rel: "manifest", href: "manifest.json"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    {src: '~/assets/scss/fonts.scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/main'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: 55018264,
        options: {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
