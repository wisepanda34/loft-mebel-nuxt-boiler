<template>
  <section class='service'>
      <div class='service__wrapper'>

        <div class='service__item' v-for="item in services" :key="item.subtitle">
          <h5>{{ item.subtitle }}</h5>
          <p>{{ item.descr }}</p>
          <div class='service__icon'>
            <img :src="item.icon" alt="icon" />
          </div>
        </div>

      </div>
  </section>
</template>

<script>
  import { useServices } from '~/stores/services'

  export default {
    name: "Service",
    setup () {
      const servicesStore = useServices()
      const services = servicesStore.services
      return {
        services
      }
    }
}
</script>

<style lang="scss" scoped>
.service{
  padding: 50px 0 40px 20px;
  &__wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 20px 0;

  }
  &__item{
    position: relative;
    background: #E5E5E5;
    min-height: 70px;
    padding: 20px 10px 20px;
    text-align: left;

    h5{
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: 0.015em;
      color: #414141;
    }
    p{
      font-size: 14px;
      line-height: 1.4;
      color: #686868;
    }
  }
  &__icon{
    position: absolute;
    z-index: 10;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    left: -23px;
    top: -23px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 20px;
      height: 20px;
    }
  }
}

@media (max-width:767px) {
  .service{

    &__wrapper{
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }
    &__item{
      padding: 20px 10px 15px;

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
