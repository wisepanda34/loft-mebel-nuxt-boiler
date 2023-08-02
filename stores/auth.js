import { defineStore } from 'pinia'

export const useAuth = defineStore('authStore', {
  state () {
    return {
      isAuthModal: false
    }
  },
  actions: {
    openAuthModal () {
      this.isAuthModal = true
      console.log('openAuthModal')
    },
    closeAuthModal () {
      this.isAuthModal = false
      console.log('closeAuthModal')
    }
  }
})
