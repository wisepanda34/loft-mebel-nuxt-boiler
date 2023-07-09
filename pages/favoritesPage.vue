<template>
  <section class="favoritesList">
    <div class="favoritesList__wrapper">
      <h3>Your favorites</h3>
      <h4 v-show="favorites.length !==0"><span>{{ favorites.length }}</span> items</h4>

      <h2
        v-show="favorites.length===0"
        class="favoritesList__empty"
      >
        Favorites list is currently empty
      </h2>

      <div class="favoritesList__cards">
        <OneCard
          v-for="item in favorites"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script >
  import OneCard from '@/components/OneCard.vue'
  import { useFavorites } from '~/stores/favorites'

  export default {
    name: 'FavoritesPage',
    components: { OneCard },
    setup () {
      const favoritesStore = useFavorites()
      const favorites = favoritesStore.favorites
      return { favorites }
    }
  }
</script>

<style lang="scss" scoped>
.favoritesList{
  &__wrapper{
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }
  &__empty{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 100px 0 120px;
    color: #718b8f;
  }
  &__cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px 0;
  }
}
@media (max-width: 1120px) {
  .favoritesList {
    &__cards {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (max-width: 830px) {
  .favoritesList {
    &__cards {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 767px) {
  .favoritesList {
    &__empty{
      font-size: 1rem;
    }
  }
}

@media (max-width: 550px) {
  .favoritesList {
    &__cards {
      grid-template-columns: 1fr;
    }
  }
}
</style>
