<template>
  <header class="header">
    <NuxtLink
      v-for="(item,i) in links"
      :key="i"
      class="header__link"
      :to="item.path"
    >
      {{ item.name }}
    </NuxtLink>
  </header>
</template>

<script setup>
  const links = [
    {
      name: 'Default First',
      path: '/'
    },
    {
      name: 'Default Second',
      path: '/index-second'
    },
    {
      name: 'Custom First',
      path: '/custom-first'
    },
    {
      name: 'Custom Second',
      path: '/custom-second'
    }
  ]
</script>
<style scoped lang="scss">
.header {
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &__link {
    padding: 8px 16px;
    border: 1px solid $c--primary;
  }
}
</style>
