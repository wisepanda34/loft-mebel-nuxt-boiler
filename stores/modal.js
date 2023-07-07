import { defineStore } from 'pinia'

export const modal = defineStore('modalStore', {
  state () {
    return {
      modalTexts: ''
    }
  },
  getters: {
    getModalText (state) {
      return this.state.modalTexts
    }
  }
  // actions:{
  //   openVoiceModal({commit},payload){
  //     commit('SET_MODAL_TEXTS', payload)
  //   },
  //   closeVoiceModal({commit}){
  //     commit('SET_MODAL_TEXTS','')
  //   }
  // },
  // mutations:{
  //   SET_MODAL_TEXTS(state, modalTexts) {
  //     state.modalTexts = modalTexts;
  //     setTimeout(() => {
  //       state.modalTexts = '';
  //     }, 600);
  //   }
  // }
})
