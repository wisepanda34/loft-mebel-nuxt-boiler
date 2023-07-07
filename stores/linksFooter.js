import { defineStore } from 'pinia'

export const useLinksFooter = defineStore('linksFooterStore', {
  state: () => ({
      linksFooter: [
        {
          href: 'tel:19648999119',
          src: 'images/icons/phone-black.svg',
          value: '+1 (964) 89 99 119'
        },
        {
          href: '#',
          src: 'images/icons/inst.svg',
          value: 'INSTAGRAM'
        },
        {
          href: 'mailto:loft_furniture@gmail.com',
          src: 'images/icons/mail.svg',
          value: 'loft_furniture@gmail.com'
        }
      ]
  }),
  getters: {
    getLinksFooter (state) {
      return this.state.linksFooter
    }
  }
})
