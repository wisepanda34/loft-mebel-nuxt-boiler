import { defineStore } from 'pinia'

export const useCartList = defineStore('cartListStore', {
  state () {
    const cartListStorage = JSON.parse(localStorage.getItem('cartListStorage')) || []
    return {
      cartList: cartListStorage
    }
  },
  getters: {
    getCartList: state => {
      return this.state.cartList
    },
    getTotalSum: state => {
      return this.state.cartList.reduce((total, item) => { return total + item.price * item.amount }, 0)
    },
    getTotalElements: state => {
      return this.state.cartList.reduce((count, item) => { return count + item.amount }, 0)
    }
  },
  actions: {
    addToCart (card) {
      console.log(card)
      const productIdx = this.state.cartList.findIndex((item) => item.id === card.id) // ищем id продукта, который уже есть в карзине
      const productsCopy = [...this.state.cartList] // создаем копию cartList

      // создаем переменную product и ложим в нее новый продукт и добавляем поле "количество"
      let product = { ...card, amount: 1 }

      // если такой продукт уже есть в карзине - увеличиваем amount этого продукта
      if (productIdx > -1) {
        const amount = productsCopy[productIdx].amount + 1
        product = { ...product, amount } // обновляем значение amount
        productsCopy.splice(productIdx, 1, product) // удаляеем повторяющийся продукт
        this.state.cartList = productsCopy
        return
      }
      this.state.cartList = [...this.state.cartList, product]
      localStorage.setItem('cartListStorage', JSON.stringify(this.state.cartList))
    },
    removeFromCart (cardId) {
      this.state.cartList = this.state.cartList.filter(item => item.id !== cardId)
        localStorage.setItem('cartListStorage', JSON.stringify(this.state.cartList))
    },
    incrementQuantity (itemId) {
      const product = this.state.cartList.find(item => item.id === itemId)
          if (product) product.amount++
          localStorage.setItem('cartListStorage', JSON.stringify(this.state.cartList))
    },
    decrementQuantity (itemId) {
      const product = this.state.cartList.find(item => item.id === itemId)
          if (product && product.amount > 1) {
            product.amount--
          } else {
            this.state.cartList = this.state.cartList.filter(item => item.id !== itemId)
          }
      localStorage.setItem('cartListStorage', JSON.stringify(this.state.cartList))
    },
    clearCartList () {
      this.state.cartList = []
      localStorage.removeItem('cartListStorage')
    }
  }
})
