import { defineStore } from 'pinia'

export const useModal = defineStore('modalStore', {
  state () {
    return {
      modalTexts: 'qq',
      isAuthModal: true
    }
  },
  actions: {
    openVoiceModal (modalTexts, duration) {
      this.modalTexts = modalTexts
      // console.log('openVoiceModal', this.modalTexts)

      // setTimeout(() => {
      //   this.closeVoiceModal()
      // }, duration)
    },
    openAuthModal (modalTexts, duration) {
      this.isAuthModal = true
      console.log('openAuthModal')
    },
    closeVoiceModal () {
      this.modalTexts = ''
    }
  }
})
