<template>
  <div class="menuTransform">
    <div class="menuTransform__menu">
      <TheNavbar
        class="menuTransform__navbar"
        @close-menuTransform="$emit('close-menu')"
      />
      <div
        class="menuTransform__close"
        @click="$emit('close-menu')"
      >
        &#9587;
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MenuTransform'
  }
</script>

<style lang="scss" scoped>
.menuTransform{
  display: none;
}
@media (max-width: 767px){
  .menuTransform{
    display: block;
    width: 100vw;
    height: 100vh;
    transition:  0.5s all ease-in-out;
    transform: translateX(-300%);
    &__menu{
      background: #fff;
      opacity: 1;
      position: relative;
      width: 60%;
      height: 100%;
      z-index: 20;
    }
    &-active{
      transform: translateX(0);
    }
    &__navbar{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__close{
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 22px;
      cursor: pointer;
    }
  }
}
@media (max-width:575px){
  .menuTransform{
    &__menu{
      width: 100%;
    }
  }
}

</style>
