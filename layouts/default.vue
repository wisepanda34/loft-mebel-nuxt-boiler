<template>
  <div class="site default-layout wrapper">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
</script>

<style lang="scss">
  html {
    color: $c--primary;
    background-color: $c--secondary;
    font-family: 'Manrope', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
</style>
