const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/adifferentdesign/'
  }
} : {}

module.exports = {
  ...routerBase,
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'A Different Design - Kristof Orts - Freelance web design in Antwerp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Practicando con nuxt http://adifferentdesign.be/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Abel' },
      { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Ropa+Sans' }
    ]
  },
  css: [
    '~/assets/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
