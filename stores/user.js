import { defineStore } from 'pinia'

export const useUser = defineStore('userStore', {
  state () {
    return {
      userData: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        street: '',
        house: '',
        flat: ''
      }
    }
  },
  getters: {
    getUserData () {
      return this.userData
    }
  },
  actions: {
    async updateUserData (payload) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
      this.userData = payload
    }
  }
})
