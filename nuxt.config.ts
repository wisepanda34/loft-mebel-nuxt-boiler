// https://nuxt.com/docs/api/configuration/nuxt-config
// import i18nConfig from './i18n.config'
export default defineNuxtConfig({
  // runtimeConfig: {
  //   apiSecret: 'api-key-nuxt-config',
  //   public: {
  //     apiUrl: 'api-url-nuxt-config'
  //   }
  // },
  modules: [
    '@pinia/nuxt', 'nuxt-swiper', '@nuxtjs/i18n'
  ],
  i18n: {
    // module options
    vueI18n: './i18n.config.ts' // if you are using custom path, default
    // strategy: 'prefix_except_default',
    // lazy: true,
    // locales: [
    //   {
    //     code: 'en-UK',
    //     iso: 'en-UK',
    //     name: 'English(UK)',
    //     file: 'en.json'
    //   },
    //   {
    //     code: 'fr-FR',
    //     iso: 'fr-FR',
    //     name: 'French(FR)',
    //     file: 'fr.json'
    //   },
    //   {
    //     code: 'es-ES',
    //     iso: 'es-ES',
    //     name: 'Spanish(ES)',
    //     file: 'es.json'
    //   }
    // ],
    // langDir: 'locales'
  },
  // swiper: {
  //   Swiper options
  //   ----------------------
  //   prefix: 'Swiper',
  //   styleLang: 'css',
  //   modules: ['navigation', 'pagination'], // all modules are imported by default
  // },
  css: [
    '~/assets/scss/_reset.scss',
    '~/assets/scss/_general.scss',
    '~/assets/scss/animations/_transitions.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_mixins.scss";
            @import "@/assets/scss/_variables.scss";
          `
        }
      }
    }
  },
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})
