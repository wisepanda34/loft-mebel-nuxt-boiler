// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // runtimeConfig: {
  //   apiSecret: 'api-key-nuxt-config',
  //   public: {
  //     apiUrl: 'api-url-nuxt-config'
  //   }
  // },
  modules: [
    '@pinia/nuxt', 'nuxt-swiper'
  ],
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
