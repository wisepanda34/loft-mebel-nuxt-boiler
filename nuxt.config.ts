// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: 'some key',
    public: {
      apiUrl: 'https://jsonplaceholder.typicode.com/'
    }
  },
  modules: [
    '@pinia/nuxt'
  ],
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
