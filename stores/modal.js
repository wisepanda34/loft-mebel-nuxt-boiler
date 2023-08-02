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
      // console.log('openVoiceModal', this.modalTexts)

      // setTimeout(() => {
      //   this.closeVoiceModal()
      // }, duration)
    },
    closeVoiceModal () {
      this.modalTexts = ''
    }
  }
})
