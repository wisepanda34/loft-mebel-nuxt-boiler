import { languages } from '~/locales'

export default defineI18nConfig(() => ({
  legacy: false,
  strategy: 'prefix_except_default',
  // strategy: 'no_prefix',
  lazy: true,
  messages: languages
  // langDir: 'locales'

}))
