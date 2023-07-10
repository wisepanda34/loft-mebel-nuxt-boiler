<template>
  <div>
    <Menu />
    <Bonus />
    <Profile />
  </div>
</template>

<script>

  import Bonus from '~/components/Bonus.vue'
  import Menu from '~/components/Menu.vue'
  import Profile from '~/components/Profile.vue'
  export default {
    name: 'Account',
    components: { Menu, Bonus, Profile }
  }
</script>
