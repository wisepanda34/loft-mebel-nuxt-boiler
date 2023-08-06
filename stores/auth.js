import { defineStore } from 'pinia'

export const useAuth = defineStore('authStore', {
  state () {
    return {
      registerData: {},
      isAuthModal: false,
      isUserAuth: false
    }
  },
  getters: {
    getRegisterData (state) {
      return state.registerData
    }
  },
  actions: {
    fetchRegisterData () {
      if (localStorage) {
        this.registerData = JSON.parse(localStorage.getItem('authStorage')) || {}
      }
    },
    openAuthModal () {
      this.isAuthModal = true
    },
    closeAuthModal () {
      this.isAuthModal = false
    },
    setRegisterData (payload) {
      this.registerData = payload
      console.log(payload)
      localStorage.setItem('authStorage', JSON.stringify(this.registerData))
    }
  }
})
