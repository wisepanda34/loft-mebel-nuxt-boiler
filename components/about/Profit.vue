<template>
  <section class="profit">
    <div class="profit__wrapper">
      <h3 class="profit__title center">Buy profitably!</h3>
      <div class="profit__block">
        <div
          v-for="item in profits"
          :key="item.id"
          class="profit__item"
        >
          <div class="profit__icon">
            <img
              :src="item.icon"
              alt="icon"
            >
          </div>
          <div class="profit__content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.descr }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {useProfits} from '~/stores/profits'

  export default {
    name: 'Profit',
    setup (){
      const profitsStore = useProfits()
      const profits = profitsStore.profits
      return {
        profits
      }
    }
  }
</script>

<style lang="scss" scoped>
.profit{
  &__wrapper{
    padding:0 0 40px 0;
  }
  &__title{
    padding: 80px 0;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;
    color: #414141;
  }
  &__block{
    display: flex;
    justify-content: space-between;
    row-gap: 80px;
    flex-wrap: wrap;
  }
  &__item{
    flex:0 1 45%;
    display: flex;
    gap: 30px;
  }
  &__icon img{
    padding-top: 10px;
    width: 70px;
    height: 70px;
  }
  &__content{

    h5{
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: 0.015em;
      color: #414141;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
    p{
      font-size: 14px;
      line-height: 1.4;
      color: #686868;
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
      text-align: left;
    }
  }
}
@media (max-width: 767px) {
  .profit{
    &__block{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__title{
      padding: 10px 0;

    }

    &__icon{
      img{
        width: 38px;
      }
    }
    &__content{

      h5{
        font-size: 14px;

      }
      p{
        font-size: 12px;

      }
    }
  }
}
</style>
