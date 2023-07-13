<template>
  <div class="site default-layout wrapper">
    <TheHeader class="theHeader" />
    <slot class="slot" />
    <TheFooter class="theFooter" />
    <BaseModal />
  </div>
</template>

<script setup>
  import BaseModal from '~/components/UI/BaseModal.vue'
</script>

<style lang="scss">
  html {
    //color: $c--primary;
    //background-color: $c--secondary;
    font-family: 'Manrope', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
  }
  .slot{
    flex:1 1 auto;
  }
</style>
