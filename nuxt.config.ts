// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
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
    baseURL: '/loft-mebel-nuxt-boiler/',
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  router: {
    middleware: 'redirect'
  }
})
