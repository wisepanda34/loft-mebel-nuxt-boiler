<template>
  <div>
    <Performance />
    <Profit />
    <Advantage />
    <Service />
    <Saving />
  </div>
</template>

<script setup>
  import Performance from '~/components/about/Performance.vue'
  import Profit from '~/components/about/Profit.vue'
  import Advantage from '~/components/about/Advantage.vue'
  import Service from '~/components/about/Service.vue'
  import Saving from '~/components/about/Saving.vue'
  // TODO страница рендерит компоненты только после дополнительного обновления страницы браузера
</script>

<style scoped>

</style>
