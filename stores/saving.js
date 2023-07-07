import { defineStore } from 'pinia'

export const useSavings = defineStore('savingStore',{
  state () {
    return{
      savings: [
        {
          subtitle: 'Time.',
          descr: 'We will accept your application as soon as possible. If necessary. We will select for you worthy options according to the specified criteria.'
        },
        {
          subtitle: 'Forces.',
          descr: 'We will buy in bulk or orders at the factory, saving you from long discussions of the orders with the contractor. We supervise all stages of work on	orders.'
        },
        {
          subtitle: 'Money.',
          descr: 'You will definitely buy furniture cheaper than retail.'
        }
      ]
    }
  }
})
