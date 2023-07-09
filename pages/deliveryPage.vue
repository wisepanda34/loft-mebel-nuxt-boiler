<template>
  <section class="delivery">
    <div class="delivery__wrapper">
      <h1 class="delivery__title">Delivery</h1>
      <p>Each client can purchase goods in our store and pick them up in our warehouse, as well as receive goods delivered to their homes with assembly.</p>
      <p>Our specialists will qualitatively assemble the furniture you have chosen. Each client will be satisfied with the purchase. </p>
      <p>Contact phone number for consultation:</p>

      <a
        class="delivery__phone"
        href="tel: 19648999119"
      >
        <img
          src="/images/icons/phone-black.svg"
          alt="i"
        >
        <span>+1 (964) 89 99 119</span>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DeliveryPage'
  }
</script>

<style lang="scss" scoped>
  .delivery{
    height: 100%;
    &__wrapper{
      padding: 40px 0;
      p{
        line-height: 2em;
        text-indent:30px;
        margin: 20px 0;
      }
    }
    &__title{
      text-align: center;
    }
    &__phone{
      display: flex;
      justify-content: center;
      gap: 10px;
      span{
        font-weight: 700;
        font-size: 18px;
      }
      img{
        height: 20px;
      }
      &:hover{
        color: #366a7a;
      }
    }
  }
  @media (max-width: 767px) {
    .delivery{
      font-size: 12px;
      &__wrapper{
        padding: 20px 0;
      }
    }
  }
</style>
