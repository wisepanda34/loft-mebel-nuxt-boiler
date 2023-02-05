<template>
  <div class="example">
    <div class="example__title heading heading_1">Route name - {{ $route.name }}</div>
    <div class="example__subtitle heading heading_2"> API_URL - {{ config.public.apiUrl }}</div>
    <div class="div" />
  </div>
</template>

<script setup>
  const config = useRuntimeConfig()
  console.log('Runtime config:', config)
  console.log('Secret key:', config.apiSecret)
  console.log('Is server', process.server)
  console.log('Is browser', process.client)

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
