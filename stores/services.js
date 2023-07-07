import { defineStore } from 'pinia'

export const useServices = defineStore('servicesStore', {
  state () {
    return {
      services: [
        {
          subtitle: 'Special conditions for wholesalers',
          descr: 'Number of our wholesalers	buyers is steadily increasing and all because we were able to offer	owners of furniture stores the most favorable conditions.',
          icon: 'images/icons/handshake.svg'
        },
        {
          subtitle: 'Prompt delivery',
          descr: 'Own courier service	will quickly bring the purchased furniture to the specified address. Delivery to the Russian regions is carried out by transport companies.',
          icon: 'images/icons/delivery-box.svg'
        },
        {
          subtitle: 'Attentive service',
          descr: 'Qualified managers 	online store will answer all questions on the range and provided	opportunities, as well as help to place an orders and control the implementation of client wishes when ordering furniture.',
          icon: 'images/icons/support.svg'
        },
        {
          subtitle: 'Every fifth customer orders from us again!',
          descr: 'And we thank everyone who took advantage of our unique offer, ordered furniture quickly and inexpensively and recommended it to friends and	acquaintances.',
          icon: 'images/icons/reorder.svg'
        }
      ]
    }
  }
})
