import { defineStore } from 'pinia'

export const useOrders = defineStore('ordersStore', {
  state () {
    return {
      orders: JSON.parse(localStorage.getItem('ordersStorage')) || []
    }
  },
  getters: {
    getOrders () {
      return this.orders
    }
  },
  actions: {
    addNewOrder (payload) {
      this.orders.push(payload)
      localStorage.setItem('ordersStorage', JSON.stringify(this.orders))
    }
  }
})
