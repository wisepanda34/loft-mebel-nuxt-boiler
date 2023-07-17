import { defineStore } from 'pinia'

export const useOrders = defineStore('ordersStore', {
  state () {
    return {
      orders: []
    }
  },
  getters: {
    getOrders () {
      return this.orders
    }
  },
  actions: {
    fetchOrders () {
      if (localStorage) {
        this.orders = JSON.parse(localStorage.getItem('ordersStorage')) || []
      }
    },
    addNewOrder (payload) {
      if (!this.orders) {
        this.orders = []
      }
      this.orders.push(payload)
      localStorage.setItem('ordersStorage', JSON.stringify(this.orders))
    }
  }
})
