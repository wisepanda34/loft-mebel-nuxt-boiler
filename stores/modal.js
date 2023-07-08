import { defineStore } from 'pinia'

export const useModal = defineStore('modalStore', {
  state () {
    return {
      modalTexts: ''
    }
  },
  actions: {
    openVoiceModal (modalTexts) {
      this.state.modalTexts = modalTexts
          setTimeout(() => {
            this.state.modalTexts = ''
          }, 600)
    },
    closeVoiceModal () {
      this.state.modalTexts = ''
      // commit('SET_MODAL_TEXTS','')
    }
  }
})
