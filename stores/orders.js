import { defineStore } from 'pinia'

export const useOrders = defineStore('ordersStore', {
  state () {
    return {
      // orders: JSON.parse(localStorage.getItem('ordersStorage')) || []
      orders: []
    }
  },
  getters: {
    getOrders () {
      return this.orders
    }
  },
  actions: {
    addNewOrder (payload) {
      if (!this.orders) {
        this.orders = []  // Initialize orders if it is not defined
      }
      this.orders.push(payload)
      localStorage.setItem('ordersStorage', JSON.stringify(this.orders))
    }
  }
})
