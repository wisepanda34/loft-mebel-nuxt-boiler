<template>
  <div class="site default-layout wrapper">
    <TheHeader class="theHeader" />
    <slot class="slot" />
    <TheFooter class="theFooter" />
    <UIBaseModal />
    <UIAuthModal />
  </div>
</template>

<script>
  import { useCartList } from '~/stores/cartList'
  import { useFavorites } from '~/stores/favorites'
  import { useOrders } from '~/stores/orders'
  import { useUser } from '~/stores/user'
  import { useAuth } from '~/stores/auth'

  export default {
    setup () {
      const cartList = useCartList()
      const favoritesStore = useFavorites()
      const ordersStore = useOrders()
      const userStore = useUser()
      const authStore = useAuth()
      return {
        cartList,
        favoritesStore,
        ordersStore,
        userStore,
        authStore
      }
    },
    mounted () {
      this.cartList.fetchCartList()
      this.favoritesStore.fetchFavorites()
      this.ordersStore.fetchOrders()
      this.userStore.fetchUser()
      this.authStore.fetchRegisterData()
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
    flex: 1 1 auto;
  }
</style>
