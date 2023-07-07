import { defineStore } from 'pinia'

export const useAdvantages = defineStore ('advantagesStore',{
  state () {
    return {
      advantages: [
        {
          title: 'The most "delicious" offers',
          descr: 'We do everything necessary for customers to have access to the latest news, which	represents the American furniture market. Get to know each model compare prices for analogues and choose the best you can right now. Want to be the first to know about the best deals? Then subscribe to newsletter!'
        },
        {
          title: 'Guaranteed quality',
          descr: "All products are accompanied manufacturer's warranty. The catalogs contain only certified	furniture. In-house quality control checks every sample carefully	before sending to the customer. Buyers receive the necessary documents - warranty card and check."
        },
        {
          title: 'Impressive range',
          descr: 'Every day we choose	our catalogs are ideal samples from the product matrix of manufacturers throughout American. Fashionable colors, environmentally friendly materials, reliable accessories - here you will find the furniture of your dreams!'
        }
      ]
    }
  }
})
