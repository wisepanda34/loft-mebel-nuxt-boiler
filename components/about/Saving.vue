<template>
  <section class='saving'>
      <h4 class='saving__title center'>We can help you save time, effort and money!</h4>

      <div class='saving__wrapper'>

        <div class='saving__item' v-for="item in savings" :key='item.subtitle'>
          <img :src="'images/icons/check_around.svg'" alt="i">
          <div class="saving__block">
            <h6>{{ item.subtitle }}</h6>
            <p>{{ item.descr }}</p>
          </div>

        </div>

      </div>

      <h4 class='saving__title center'>
        Why don't we save?<br />
        At your comfort and furniture quality!
      </h4>

  </section>
</template>

<script>
  import { useSavings } from '~/stores/saving'

  export default {
    name: "Saving",
    setup (){
      const savingStore = useSavings()
      const savings = savingStore.savings
      return {
        savings
      }
    }
}
</script>

<style lang="scss" scoped>
.saving{
  padding-bottom: 70px;
  &__wrapper{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-left: 30px;
  }
  &__title{
    font-size: 24px;
    margin: 60px 0;
    padding: 0 20px;
  }
  &__item{
    position: relative;
    max-width: 260px;
    text-align: left;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 15px;
    img{
      width: 14px;
    }
    h6{
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #414141;
    }
    p{
      font-size: 14px;
      line-height: 140%;
      color: #414141;
    }
  }
}

@media (max-width:992px){
  .saving{
    &__title{
      margin: 30px 0;
    }
  }
}
@media (max-width:767px){
  .saving{
    padding-bottom: 50px;
    &__wrapper{
      flex-direction: column;
      gap: 0;
    }
    &__title{
      font-size: 18px;
    }
    &__item{
      max-width: 500px;
      margin: 0 auto 30px 0;
      font-size: 12px;
    }
  }
}

</style>
