<template>
  <section class="delivery">
    <div class="delivery__wrapper">
      <h1 class="delivery__title">{{ $t('titleDelivery') }}</h1>
      <p>{{ $t('text1') }}</p>
      <p>{{ $t('text2') }}</p>
      <p>{{ $t('text3') }}</p>

      <a
        class="delivery__phone"
        href="tel: 19648999119"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z"
            stroke="black"
          />
        </svg>

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
      font-size: 30px;
      font-weight: 700;
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
