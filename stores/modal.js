import { defineStore } from 'pinia'

export const useModal = defineStore('modalStore', {
  state () {
    return {
      modalTexts: '',
      isAuthModal: true
    }
  },
  actions: {
    openVoiceModal (modalTexts) {
      this.modalTexts = modalTexts
      // console.log('openVoiceModal', this.modalTexts)

      // setTimeout(() => {
      //   this.closeVoiceModal()
      // }, duration)
    },
    openAuthModal (modalTexts) {
      this.isAuthModal = true
      console.log('openAuthModal')
    },
    closeVoiceModal () {
      this.modalTexts = ''
    }
  }
})
