import { defineStore } from 'pinia'

export const useClient = defineStore('clientStore', {
  state () {
    return {
      clientData: []
    }
  },
  actions: {
    addNewClient (newClient) {
      this.clientData = [...this.clientData, newClient]
      localStorage.setItem('clientStorage', JSON.stringify(this.clientData))
    },
    fetchClientData () {
      if (localStorage) {
        this.clientData = JSON.parse(localStorage.getItem('clientStorage')) || []
      }
    }
  }
})
