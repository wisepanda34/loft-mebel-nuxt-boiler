import { defineStore } from 'pinia'

export const useCartList = defineStore('cartListStore', {
  state () {
    return {
      // cartList: JSON.parse(localStorage.getItem('cartListStorage')) || []
      cartList: []
    }
  },
  getters: {
    getCartList (state) {
      return this.cartList
    },
    getTotalSum (state) {
      return this.cartList.reduce((total, item) => { return total + item.price * item.amount }, 0)
    },
    getTotalElements (state) {
      return this.cartList.reduce((count, item) => { return count + item.amount }, 0)
    }
  },
  actions: {
    addToCart (card) {
      // console.log(card)
      const productIdx = this.cartList.findIndex((item) => item.id === card.id) // ищем id продукта, который уже есть в карзине
      const productsCopy = [...this.cartList] // создаем копию cartList

      // создаем переменную product и ложим в нее новый продукт и добавляем поле "количество"
      let product = { ...card, amount: 1 }

      // если такой продукт уже есть в карзине - увеличиваем amount этого продукта
      if (productIdx > -1) {
        const amount = productsCopy[productIdx].amount + 1
        product = { ...product, amount } // обновляем значение amount
        productsCopy.splice(productIdx, 1, product) // удаляеем повторяющийся продукт
        this.cartList = productsCopy
        return
      }
      this.cartList = [...this.cartList, product]
      // localStorage.setItem('cartListStorage', JSON.stringify(this.cartList))
    },
    removeFromCart (cardId) {
      this.cartList = this.cartList.filter(item => item.id !== cardId)
        // localStorage.setItem('cartListStorage', JSON.stringify(this.cartList))
    },
    incrementQuantity (itemId) {
      const product = this.cartList.find(item => item.id === itemId)
          if (product) product.amount++
          // localStorage.setItem('cartListStorage', JSON.stringify(this.cartList))
    },
    decrementQuantity (itemId) {
      const product = this.cartList.find(item => item.id === itemId)
          if (product && product.amount > 1) {
            product.amount--
          } else {
            this.cartList = this.cartList.filter(item => item.id !== itemId)
          }
      // localStorage.setItem('cartListStorage', JSON.stringify(this.cartList))
    },
    clearCartList () {
      this.cartList = []
      // localStorage.removeItem('cartListStorage')
    }
  }
})
