import { defineStore } from 'pinia'

export const useComments = defineStore('commentsStore', {
  state: () => ({
    userComments: [],
    apiComments: []
  }),
  // Ошибку возникает из-за использования стрелочной функции в геттере getComments
  // в вашем хранилище commentsStore. В стрелочной функции, this ссылается на глобальный контекст,
  // а не на экземпляр хранилища. Чтобы исправить ошибку, замените стрелочную функцию на обычную функцию:
  // getters: {
  //   getComments: () => [...this.userComments, ...this.apiComments]
  // },
  getters: {
    getComments: function () {
      return [...this.userComments, ...this.apiComments]
    }
  },
  actions: {
    addUserComment (payload) {
      this.userComments = [payload, ...this.userComments]
    },
    addApiComments (payload) {
      this.apiComments = [...this.apiComments, ...payload]
    }
  }
})
