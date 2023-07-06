<template>
  <div class="example">
    <!--    <div class="example__title heading heading_1">Route name - {{ route.name }}</div>-->
    <!--    <div class="example__subtitle heading heading_2"> API_URL - {{ apiUrl }}</div>-->
  </div>
</template>

<script setup>
  // const route = useRoute()
  // const {
  //   apiUrl
  //   // apiSecret
  // } = useRuntimeConfig()
  // console.log('Api url', apiUrl)
  // console.log('Secret key:', apiSecret)
  // console.log('Is server', process.server)
  // console.log('Is browser', process.client)

</script>
<style scoped lang="scss">
.example {
  &__title {
    color: red;
    @include maxWidth992{
      color: blue;
    }
  }
}
</style>
