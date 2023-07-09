<template>
  <section class="mapcomponent">
    <div class="mapcomponent__wrapper">
      <h3 class="mapcomponent__title">Our company address</h3>
      <div class="mapcomponent__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5897.075832092171!2d-71.0687803883834!3d42.35237418429347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37082879072e1%3A0x252a16d2d10df221!2sState%20Street%20Financial%20Center!5e0!3m2!1sru!2sru!4v1684607787812!5m2!1sru!2sru&q=State%20Street%20Financial%20Center"
          width="auto"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MapComponent',
    data: () => ({
      MapComponent: null
    })
  }
</script>

<style lang="scss" scoped>
.mapcomponent{
  padding: 50px 0;
  width: 100%;
  &__wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__title{
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    text-align: left;
    margin:0 0 30px 0;
  }
  &__map{
    width: 100%;
    height: 400px;
    iframe{
      width: 100%;
      height: 100%;
    }
  }
}
@media (max-width:992px) {
  .mapcomponent{
    &__map{
      height: 300px;
    }
  }
}
</style>
