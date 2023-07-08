import { defineStore } from 'pinia'

export const useModal = defineStore('modalStore', {
  state () {
    return {
      modalTexts: ''
    }
  },
  actions: {
    openVoiceModal (modalTexts) {
      this.modalTexts = modalTexts
      setTimeout(() => {
        this.modalTexts = ''
      }, 300)
    },
    closeVoiceModal () {
      this.modalTexts = ''
    }
  }
})
