import { defineStore } from 'pinia'

export const useAuth = defineStore('authStore', {
  state () {
    return {
      registerData: [],
      isAuthModal: false,
      isUserAuthed: false
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
        this.registerData = JSON.parse(localStorage.getItem('authStorage')) || []
      }
    },
    openAuthModal () {
      this.isAuthModal = true
    },
    closeAuthModal () {
      this.isAuthModal = false
    },
    setRegisterData (payload) {
      this.registerData.push(payload)
      localStorage.setItem('authStorage', JSON.stringify(this.registerData))
    },
    findUser (payload) {
      const foundUser = this.registerData.find(user => user.phone === payload.phoneLogin.value && user.password === payload.passwordLogin.value)
      this.isUserAuthed = !!foundUser // Если foundUser определен, то устанавливаем isUserAuth в true
    },
    logOutAuth () {
      this.isUserAuthed = false
    }
  }
})
