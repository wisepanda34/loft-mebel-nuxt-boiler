<template>
  <nuxt-link :to="`/product/${item.id}`">
    <div class="cartProduct">
      <div class="cartProduct__img">
        <img
          :src="item.img"
          alt="img"
        >
      </div>

      <div class="cartProduct__block">
        <div class="cartProduct__main">
          <div class="cartProduct__main-titleCard">{{ item.titleCard }}</div>
          <div class="cartProduct__main-price">{{ item.price }} &#36;</div>
        </div>

        <div class="cartProduct__info">
          <div class="cartProduct__info-color">color: <span>brown</span> </div>

          <div class="cartProduct__info-quantity">
            quantity:
            <button
              class="cartProduct__info-increment flex-center"
              type="button"
              @click.prevent="increment(item.id)"
            >
              +
            </button>
            <span>{{ item.amount }}</span>
            <button
              class="cartProduct__info-decrement flex-center"
              type="button"
              @click.prevent="decrement(item.id)"
            >
              -
            </button>
          </div>

          <div class="cartProduct__info-size">size(w/h/d): <span>{{ item.width }}x{{ item.height }}x{{ item.deep }}</span></div>
        </div>
      </div>

      <div
        class="cartProduct__delete"
        @click.prevent="handlerRemoveProduct(item.id)"
      >
        &#9587;
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  import { useCartList } from '~/stores/cartList'
  import { useModal } from '~/stores/modal'

  export default {
    name: 'CartProduct',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    setup () {
      try {
        const cartListStore = useCartList()
        const modalStore = useModal()
        return { cartListStore, modalStore }
      } catch (error) {
        console.error('Unhandled error:', error)
        console.log('CardProduct setup error')
      }
    },
    methods: {
      handlerRemoveProduct (id) {
        this.cartListStore.removeFromCart(id)
        this.modalStore.openVoiceModal('Product was removed from cart!', 1000)
      },
      increment (id) {
        this.cartListStore.incrementQuantity(id)
      },
      decrement (id) {
        this.cartListStore.decrementQuantity(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.cartProduct{
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
  &__img{
    flex:0 0 140px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100px;
    }
  }
  &__block{
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 5px 10px;
  }
  &__main{
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    &-titleCard{
      font-weight: 500;
      font-size: 16px;
      line-height: 1.2;
      color: #414141;
    }
  }
  &__price{
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: #414141;
  }
  &__info{
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    font-size: 12px;
    line-height: 14px;
    span{
      color: #9E9E9E;
      font-size: 14px;
    }
    &-quantity{
      display: flex;
      gap: 7px;
    }
    &-decrement,&-increment{
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: #518393;
      color: #FFFFFF;
    }
  }
  &__delete{
    flex:0 0 57px;
    min-height: 120px;
    background: #f5f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #C9C9C9;
    cursor: pointer;
  }
}
@media (max-width:576px) {
  .cartProduct{

    &__img{
      flex:0 0 97px;
      height: 50px;
      img{
        width: 67px;
      }
    }
    &__block{

    }
    &__main{
      flex-direction: column;
      gap: 10px;
      font-size: 12px;
    }
    &__info{
      flex-wrap: wrap;
    }
    &__delete{
      flex:0 0 30px;
      background: #FFFFFF;
      align-items: start;
    }
  }
}
</style>
