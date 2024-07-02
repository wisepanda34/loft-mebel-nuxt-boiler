<template>
  <section
    itemscope
    itemtype="https://schema.org/Product"
    class="cardPage"
  >
    <h6

      class="cardPage__comeback"
      @click="comeBack"
    >
      Come back
    </h6>

    <h1 itemprop="name" class="cardPage__title center">{{ currentProduct.titleCard }}</h1>
    <div class="cardPage__wrapper">
      <div class="cardPage__picture">
        <img
          itemprop="image"
          :src="currentProduct.img"
          :alt="currentProduct.titleCard"
        >
      </div>
      <div class="cardPage__subtitle">
        <p>Name: <span>{{ currentProduct.titleCard }}</span></p>
        <p>Kind: <span>{{ currentProduct.kindProduct }}</span></p>
        <p>Category: <span>{{ currentProduct.category }}</span></p>
        <p>Type: <span>{{ currentProduct.typeProduct }}</span></p>
        <p>Price: <span>{{ currentProduct.price }}</span>$</p>
      </div>
      <div class="cardPage__descr">
        <h4>Size</h4>
        <div class="cardPage__descr_size">
          <div><span>width</span><p>{{ currentProduct.width }} sm</p></div>&#9587;<div><span>deep</span><p>{{ currentProduct.deep }} sm</p></div>&#9587;<div><span>height</span><p>{{ currentProduct.height }} sm</p></div>
        </div>
        <div itemprop="description">
          <p>Amet asperiores dignissimos error explicabo fugit, hic neque optio quisquam, quo ratione rem, sed sunt temporibus ut voluptatum? Adipisci aspernatur dolorem molestias?</p>
          <p>Consectetur adipisicing elit. Alias at facilis iure labore minima natus nesciunt, odit perferendis porro provident quaerat quas repellat sapiente tempora ut velit voluptatem! Accusantium aperiam architecto aspernatur autem consequuntur, cumque cupiditate eligendi ipsam iusto necessitatibus nemo, obcaecati, quaerat quia quibusdam quidem ratione repellendus ut vero.</p>
          <p>Ad in nulla obcaecati possimus quae quibusdam tempore. Aliquid dignissimos dolores eveniet, non perferendis rerum temporibus voluptatem! Aperiam autem, consequuntur cupiditate debitis dolores ducimus ex incidunt laborum nam qui reiciendis totam voluptate.</p>
        </div>
      </div>
    </div>
    <h6
      class="cardPage__comeback"
      @click="comeBack"
    >
      Come back
    </h6>
  </section>
</template>
<script>
  import { useProducts } from '~/stores/products'

  definePageMeta({
    layout: 'custom'
  })
  export default {

    setup () {
      const productsStore = useProducts()
      const getProduct = productsStore.getProduct
      return {
        getProduct,
        productsStore
      }
    },
    computed: {
      currentProduct () {
        return this.getProduct(this.$route.params.id) || {}
      }
    },
    methods: {
      comeBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
.cardPage{
  padding: 20px 0;
  &__comeback{
    cursor: pointer;
    text-align: end;
    color: #4c6062;
    text-decoration: underline;
    &:hover{
      color: #68c0ee;
    }
  }
  &__wrapper{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
  }
  &__picture{
    flex:0 1 60%;
    display: flex;
    justify-content: center;
    img{
      width: 80%;
    }
  }
  &__title{
    margin: 30px 0 20px;
    font-size: 30px;
  }
  &__subtitle{
    flex:0 1 40%;
    font-size: 18px;
    padding-left: 20px;
    span{
      font-weight: 700;
    }
    p{
      margin: 7px 0;
    }
  }
  &__descr{
    flex:0 1 100%;
    line-height: 1.5;
    p{
      text-indent: 30px;
    }
    &_size{
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 12px;
      margin-bottom: 20px;
      p{
        text-indent: 0;
      }
      span{
        display: block;
        text-align: center;
      }
    }
  }
}
@media (max-width: 767px) {
  .cardPage{
    h6{
      font-size: 12px;
    }
    &__title{
      font-size: 18px;
    }
    &__wrapper{
      flex-direction: column;
      gap: 20px;
      padding-top: 0;
    }
    &__picture{
      width: 100%;
    }
    &__subtitle{
      width: 100%;
      font-size: 14px;
    }
    &__descr{
      font-size: 12px;
      &_size{
        font-size: 10px;
        padding-left: 20px;
      }
      h4{
        padding-left: 20px;
      }
    }
  }
}
</style>
