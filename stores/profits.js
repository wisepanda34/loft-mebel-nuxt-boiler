import { defineStore } from 'pinia'

export const useProfits = defineStore('profitsStore' ,{
  state: () => {
    return {
      profits: [
        {
          title: 'Best price',
          descr: 'We offer prices close to wholesale, which make it possible to purchase furniture cheaper than in retail stores and showrooms.',
          icon: 'images/icons/profit.svg'
        },
        {
          title: 'Direct deliveries',
          descr: 'From leading furniture factories reduce the time fulfillment of your orders, even if we are talking about the manufacture of items according to individual project.',
          icon: 'images/icons/direct_delivery.svg'
        },
        {
          title: 'Time saving',
          descr: 'Did not find the best option or not time to search? Leave an online application with the criteria and we will offer you some decent examples.',
          icon: 'images/icons/time.svg'
        },
        {
          title: 'Customization',
          descr: 'We accept orders for production	furniture according to a personal design project from buyers from anywhere in Russia. Please be prepared to pay in advance for personal orders.',
          icon: 'images/icons/production.svg'
        }
      ]
    }
  }
})
