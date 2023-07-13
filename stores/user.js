import { defineStore } from 'pinia'

export const useUser = defineStore('userStore', {
  state () {
    return {
      // userData: JSON.parse(localStorage.getItem('userDataStorage')) || {}
      userData: {}
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
        }, 1000)
      })
      this.userData = payload
      // localStorage.setItem('userDataStorage', JSON.stringify(this.userData))
    }
  }
})
