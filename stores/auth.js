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
    getRegisterData () {
      return this.registerData
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
      localStorage.setItem('authStorage', JSON.stringify(this.registerData))
    },
    confirmRegisterData (payload) {
      console.log('confirmRegisterData', payload)
      const getUserData = payload
      if (this.registerData.phone === getUserData.phone && this.registerData.password === getUserData.password) {
        this.isUserAuth = true
      }
    }
  }
})
