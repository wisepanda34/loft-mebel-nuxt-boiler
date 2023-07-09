<template>
  <section class="bonus">
    <div class="bonus__wrapper">
      <div class="bonus__headline">
        <h5>Bonus program</h5>
        <div class="bonus__headline-info">
          <div>You have <span>0</span> bonus points</div>
          <nuxt-link
            to="/"
            class="bonus__headline-rules"
          >
            Bonus program rules
          </nuxt-link>
        </div>
      </div>

      <div class="bonus__footline">
        <div
          v-for="(item,i) in bonusContent"
          :key="i"
          class="bonus__cash"
        >
          <img
            :src="item.src"
            alt="i"
            class="bonus__icon"
          >{{ item.text }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Bonus',
    data () {
      return {
        bonusContent: [
          {
            src: 'images/icons/cashback.svg',
            text: 'We return up to 7% to the bonus account'
          },
          {
            src: 'images/icons/cashback.svg',
            text: '1 bonus = 1 dollar'
          },
          {
            src: 'images/icons/gift.svg',
            text: 'Pay with bonuses up to 20% of the purchase'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.currency-icon {
  height: 18px;
  color: #000;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
}
.bonus{
  &__wrapper{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  &__headline{
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h5{
      font-size: 16px;
      line-height: 19px;
      color: #414141;
    }
    &-info{
      font-size: 12px;
      line-height: 14px;
      color: #414141;
    }
    div{
      display: inline-block;
      margin-right: 20px;
      margin-top: 5px;
    }
    span{
      color: #245462;
    }
    &-rules{

      &:hover{
        color: #4bbbdd;
      }
    }
  }
  &__footline{
    min-height: 57px;
    display: flex;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
    background: #F8F8F8;
  }
  &__cash{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    line-height: 130%;
    color: #414141;
    text-align: left;
  }
  &__icon{
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 992px) {
  .bonus{
    &__footline{
      flex-direction: column;
      gap: 10px;
      padding: 10px 0 10px 30%;
      align-items: start;
    }
  }
}
@media (max-width: 767px) {
  .bonus{
    &__footline{
      padding: 10px 0 10px 20%;
      font-size: 14px;
    }
  }
}
@media (max-width: 576px) {
  .bonus{
    &__headline{
      min-height: 50px;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
    }
    &__footline{
      padding: 10px 0 10px 5%;
    }
  }
}
</style>
