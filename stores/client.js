import { defineStore } from 'pinia'

export const useClient = defineStore('clientStore', {
  state () {
    return {
      clientData: {}
    }
  },
  actions: {
    addNewClient (newClient) {
      this.clientData = newClient
    }
  }
})
