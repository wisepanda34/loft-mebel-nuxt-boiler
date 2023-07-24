<template>
  <section class="mapcomponent">
    <div class="mapcomponent__wrapper">
      <h3 class="mapcomponent__title">Our company address</h3>
      <div class="mapcomponent__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.809134982793!2d-71.06391284644356!3d42.35269147149964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370828f9ffb51%3A0x7f3417a2160f1925!2s19%20Lincoln%20St%2C%20Boston%2C%20MA%2002111%2C%20USA!5e0!3m2!1sen!2sru!4v1690202928241!5m2!1sen!2sru"
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
