<template>
  <div class="site default-layout wrapper">
    <TheHeader class="theHeader" />
    <slot class="slot" />
    <TheFooter class="theFooter" />
    <UIBaseModal />
  </div>
</template>

<script>
  import { useCartList } from '~/stores/cartList'
  import { useFavorites } from '~/stores/favorites'

  export default {
    setup () {
      const cartList = useCartList()
      const favoritesStore = useFavorites()
      return {
        cartList,
        favoritesStore
      }
    },
    mounted () {
      this.cartList.fetchCartList()
      this.favoritesStore.fetchFavorites()
    }
  }
</script>

<style lang="scss">
  html {
    //color: $c--primary;
    //background-color: $c--secondary;
    font-family: 'Manrope', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
  .slot{
    flex:1 1 auto;
  }
</style>
