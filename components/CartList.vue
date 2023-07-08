<template>
  <section class="cartlist">
    <div class="cartlist__wrapper">
      <div class="cartlist__heading">
        <h4>Your cart</h4>
        <h4 v-show="cartList.length"><span>{{ cartListStore.getTotalElements }}</span> items</h4>
      </div>
      <ul
        v-for="item in cartList"
        :key="item.id"
        class="cartlist__list"
      >
        <li>
          <CartProduct :item="item" />
        </li>
      </ul>

      <div
        v-show="!cartList.length"
        class="cartlist__empty"
      >
        The cart is currently empty
      </div>

      <div
        v-show="cartList.length"
        class="cartlist__act"
      >
        <div class="cartlist__act-total">
          The total cost: &nbsp;&nbsp;  <span>{{ cartListStore.getTotalSum }}&nbsp;&#36;</span>
        </div>
        <div>
          <nuxt-link
            to="/"
            class="cartlist__act-btn btn"
          >
            Checkout
          </nuxt-link>
        </div>
      </div>

      <h4 class="">You may like</h4>
      <div class="cartlist__recommendation">
        <OneCard
          v-for="item in recommendList"
          :key="item.id"
          class="no-margin-bottom"
          :item="item"
          :is-btn-show="isBtnShow"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import CartProduct from '~/components/CartProduct.vue'
  import OneCard from '~/components/OneCard.vue'
  import { useCartList } from '~/stores/cartList'
  import { useProducts } from '~/stores/products'

  export default {
    name: 'CartList',
    components: { OneCard, CartProduct },
    data () {
      return {
        isBtnShow: false
      }
    },
    setup () {
      try {
        const cartListStore = useCartList()
        const cartList = cartListStore.cartList
        const productsStore = useProducts()
        const recommendList = productsStore.products

        return { cartList, cartListStore, recommendList }
      } catch (error) {
        console.error('Unhandled error:', error)
      }
    }
  }
</script>

<style lang="scss" scoped>
.cartlist{
  background: #fff;

  &__wrapper{

  }
  &__heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    font-size: 16px;
    line-height: 1.2;
    color: #414141;
  }
  &__list{
    //padding: 30px 0 50px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-inline-start: 0;
  }
  &__act{
    display: flex;
    gap: 25px;
    justify-content: end;
    padding: 20px 0;
    &-btn{
      width: 202px;
      height: 40px;
      background: #245462;
      font-size: 13px;
      line-height: 15px;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover{
        background: #1f4a57;
      }
    }
    &-total{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      line-height: 1.2;
      color: #414141;
      span{
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
  &__empty{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 100px 0 120px;
    color: #718b8f;
  }
  &__recommendation{
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
    margin: 0 ;
    scrollbar-width: thin;
    scrollbar-color: #245462 lightgray;
    padding:0 20px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: lightgray;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #8ba0a2;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #94bcc0;
    }
  }
}
.no-margin-bottom{
  margin-bottom: 10px;
}
@media (max-width: 767px) {
  .cartlist{
    &__list{
      gap: 10px;
    }
    &__empty{
      font-size: 1rem;
    }
    &__heading{
      padding: 10px 0;
      font-size: 12px;
    }
    &__act{
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
