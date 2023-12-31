import { defineStore } from 'pinia'

export const useFavorites = defineStore('favoritesStore', {
  state: () => ({
    favorites: []
  }),
  getters: {
    getFavoritesLength () {
      return this.favorites.length
    }
  },
  actions: {
    fetchFavorites () {
      if (localStorage) {
        this.favorites = JSON.parse(localStorage.getItem('favoritesStorage')) || []
      }
    },
    addToFavorites (newFavorite) {
      this.favorites.push(newFavorite)
      localStorage.setItem('favoritesStorage', JSON.stringify(this.favorites))
    },
    removeFromFavorites (card) {
      const index = this.favorites.findIndex((favorite) => favorite.id === card.id)

            if (index !== -1) {
              this.favorites.splice(index, 1)
            }
      localStorage.setItem('favoritesStorage', JSON.stringify(this.favorites))
    }
  }
})
