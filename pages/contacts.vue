<template>
  <div>
    <Menu />
    <Connect />
    <MapComponent />
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  import Connect from '@/components/Connect.vue'
  import MapComponent from '@/components/MapComponent.vue'

  export default {
    name: 'Contacts',
    components: { MapComponent, Connect, Menu }
  }
</script>

<style scoped>

</style>
