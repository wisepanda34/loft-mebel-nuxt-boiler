import { defineStore } from 'pinia'

export const useFavorites = defineStore('favoritesStore', {
  state () {
    const favoritesDataStorage = JSON.parse(localStorage.getItem('favoritesStorage')) || []
    return {
      favorites: favoritesDataStorage
    }
  }
  // getters:{
  //   getFavorites: state=>state.favorites,
  //   getTotalFavorites: state=>state.favorites.length,
  //
  // },
  // actions:{
  //   addToFavorites({commit, state}, newFavorite){
  //     commit('ADD_NEW_FAVORITE',newFavorite)
  //     localStorage.setItem('favoritesStorage', JSON.stringify(state.favorites))
  //   },
  //   removeFromFavorites({commit, state},card){
  //     commit('REMOVE_FROM_FAVORITES',card)
  //     localStorage.setItem('favoritesStorage', JSON.stringify(state.favorites))
  //
  //   }
  // },
  // mutations:{
  //   ADD_NEW_FAVORITE(state,newFavorite){
  //     state.favorites.push(newFavorite);
  //   },
  //   REMOVE_FROM_FAVORITES(state, card) {
  //     const index = state.favorites.findIndex(
  //       (favorite) => favorite.id === card.id
  //     );
  //     if (index !== -1) {
  //       state.favorites.splice(index, 1);
  //     }
  //   }
  // }
})
