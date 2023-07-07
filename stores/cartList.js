import { defineStore } from 'pinia'

export const useCartList = defineStore('cartListStore', {
  state () {
    const cartListStorage = JSON.parse(localStorage.getItem('cartListStorage')) || []
    return {
      cartList: cartListStorage
    }
  }
  // getters:{
  //   getCartList(state){
  //    return this.state.cartList
  //   }
    // getTotalSum: state => {
    //   return state.cartList.reduce((total, item) => {
    //     return total + item.price * item.amount;
    //   }, 0);
    // },
    // //количество всех элементов заказа
    // getTotalElements: state=>{
    //   return state.cartList.reduce((count,item)=>{
    //     return count + item.amount;
    //   },0)
    // },
  // },
  // actions: {
  //   //это логика вызова мутации 'ADD_TO_CART' из компонента
  //   addToCart({ commit,state }, card) {
  //     commit('ADD_TO_CART', card);
  //     localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))
  //   },
  //   removeFromCart({ commit }, cardId) {
  //     commit('REMOVE_FROM_CART', cardId);
  //
  //   },
  //   incrementQuantity({commit},itemId) {
  //     commit('INCREMENT_ONE_PIECE',itemId)
  //   },
  //   decrementQuantity({commit},itemId) {
  //     commit('DECREMENT_ONE_PIECE',itemId)
  //
  //   },
  //   clearCartList({commit}){
  //     commit('CLEAR_CARTlIST')
  //   }
  // },
  // mutations: {
  //   ADD_TO_CART(state, payload) {
  //     const productIdx = state.cartList.findIndex((item) => item.id === payload.id) //ищем id продукта, который уже есть в карзине
  //     const productsCopy = [...state.cartList] //создаем копию
  //
  //     //создаем переменную product и ложим в нее новый продукт и добавляем поле "количество"
  //     let product = {...payload, amount: 1}
  //
  //     //если такой продукт уже есть в карзине - увеличиваем amount этого продукта
  //     if (productIdx > -1) {
  //       const amount = productsCopy[productIdx].amount + 1
  //       product = {...product, amount}    //обновляем значение amount
  //       productsCopy.splice(productIdx, 1, product) //удаляеем повторяющийся продукт
  //       state.cartList = productsCopy
  //       return
  //     }
  //     state.cartList = [...state.cartList, product]
  //   },
  //   REMOVE_FROM_CART(state, cardId) {
  //     state.cartList = state.cartList.filter(item => item.id !== cardId);
  //     localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))
  //   },
  //   INCREMENT_ONE_PIECE(state,itemId){
  //     const product = state.cartList.find(item => item.id === itemId)
  //     if(product) product.amount++
  //     localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))
  //   },
  //   DECREMENT_ONE_PIECE(state,itemId){
  //     const product = state.cartList.find(item => item.id === itemId)
  //     if(product && product.amount>1) {
  //       product.amount--
  //     }else{
  //       state.cartList=state.cartList.filter(item=>item.id !==itemId)
  //     }
  //     localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))
  //   },
  //   CLEAR_CARTlIST(state){
  //     state.cartList=[]
  //     localStorage.removeItem('cartListStorage');
  //   }
  // }
})
