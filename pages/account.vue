<template>
  <div>
    <Menu />
    <Bonus />
  </div>
</template>

<script>

  import Bonus from '~/components/Bonus.vue'
  import Menu from '~/components/Menu.vue'
  export default {
    name: 'Account',
    components: { Menu, Bonus }
  }
</script>
<!--Profile,-->
