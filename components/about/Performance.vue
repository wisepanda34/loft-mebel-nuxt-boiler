<template>
  <section class="performance">
    <div class="performance__wrapper">
      <div class="performance__shop">
        <span>about shop</span>
        <h3 class="performance__title">
          Online store "Loft Furniture": <br>
          buy a good one furniture in one click!
        </h3>
        <p>
          The unique format of the online store will allow you to buy the best
          furniture of the largest American factories as quickly and as possible
          favorable price!
        </p>
        <p>
          We thank for the trust of more than a dozen manufacturers who gave
          us the opportunity to present the best samples of their products in
          American Internet space. Direct supply contracts
          furniture from factories provide the most attractive conditions for
          our buyers.
        </p>
      </div>

      <div class="performance__pic">
        <img
          :src="'images/img/performance_sofa.png'"
          alt="img"
        >
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Performance'
  }
</script>

<style lang="scss" scoped>
.performance{

  &__wrapper{
    display: flex;
  }
  &__shop{
    flex: 0 1 50%;
    // padding: 100px 0 100px 100px;
    padding: 10% 0 10% 10%;
    text-align: left;
    span{
      position: relative;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #245462;
      display: block;

      &::before{
        content: '';
        position: absolute;
        width: 208px;
        height: 1px;
        left: -230px;
        top: 6px;
        background: #D7E8ED;
      }
    }
    p{
      font-size: 14px;
      line-height: 20px;
      color: #686868;
    }
  }
  &__title{
    font-size: 24px;
    line-height: 28px;
    color: #414141;
  }
  &__pic{
    position: relative;
    flex: 0 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
      position: absolute;
      content: '';
      z-index: 8;
      width: 200%;
      height: 100%;
      left: 45%;
      top: 0;
      background: #D7E8ED;
    }

    img{
      position: relative;
      width: 100%;
      z-index: 10;
    }
  }
}

@media (max-width: 767px) {
  .performance{
    &__wrapper{
      flex-direction: column-reverse;
    }
    &__shop{
      padding: 25px 0 ;

      span{
        font-size: 10px;
        &::before{
          display: none;
        }
      }
      p{font-size: 12px;}
    }
    &__title{
      font-size: 18px;
      line-height: 21px;
    }
    &__pic{

      &::after{
        // display: none;
        position: absolute;
        content: '';
        z-index: 8;
        width: 55%;
        height: 100%;
        right: 0;
        top: 0;
        margin-right: -20px;
        background: #D7E8ED;
      }
    }
  }
}
</style>
