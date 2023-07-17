import { defineStore } from 'pinia'

export const useUser = defineStore('userStore', {
  state () {
    return {
      userData: {}
    }
  },
  getters: {
    getUserData () {
      return this.userData
    }
  },
  actions: {
    fetchUser () {
      if (localStorage) {
        this.userData = JSON.parse(localStorage.getItem('userDataStorage')) || {}
      }
    },
    async updateUserData (payload) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      this.userData = payload
      localStorage.setItem('userDataStorage', JSON.stringify(this.userData))
    }
  }
})
