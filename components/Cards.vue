
<template>
  <section class="cards">
    <OneCard
      v-for="item in products"
      :key="item.id"
      :is-btn-show="isBtnShow"
      :item="item"
    />
  </section>
</template>

<script>
  import { useProducts } from '~/stores/products'
  export default {
    name: 'Cards',
    setup () {
      const productsStore = useProducts()
      const products = productsStore.products
      return {
        products
      }
    },
    data () {
      return {
        isBtnShow: true
      }
    }
    // computed: {
    // ...mapGetters({
    //   products: 'products/getProducts'
    // })
    // }
  }
</script>

<style lang="scss" scoped>
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px 0;
}
@media (max-width: 1140px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 880px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 620px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
