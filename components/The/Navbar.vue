<template>
  <div class="navbar header__navbar menuTransform__navbar">
    <nav class="navbar__nav menuTransform__nav">
      <nuxt-link
        v-for="(link,i) in links"
        :key="i"
        :to="link.path"
        :class="{ active: isActive(link.path) }"
        @click="chooseMenu"
      >
        {{ link.name }}
      </nuxt-link>
    </nav>
    <div class="navbar__delivery">
      <nuxt-link
        class="navbar__delivery-phone flex"
        to="tel: 19648999119"
      >
        <img
          src="/images/icons/phone-black.svg"
          alt="i"
        >
        <span>+1 (964) 89 99 119</span>
      </nuxt-link>
      <nuxt-link
        to="/deliveryPage"
        class="navbar__delivery-deliv flex"
      >
        <img
          src="/images/icons/delivery-icon-black.svg"
          alt="i"
        >
        <span>Delivery</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'

  export default {
    data () {
      const links = [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Catalog',
          path: '/catalog'
        },
        {
          name: 'Contacts',
          path: '/contacts'
        },
        {
          name: 'Reviews',
          path: '/reviewsPage'
        }
      ]
      return {
        links
      }
    },
    setup () {
      const route = useRoute()

      const isActive = (routePath) => {
        return route.path === routePath
      }
      return {
        isActive
      }
    },
    methods: {
      chooseMenu () {
        this.$emit('close-menuTransform')
      }
      // проверка перехода по роуту, содержащемуся в конкретном route-link
    }
  }

</script>

<style lang="scss" scoped>
.navbar{
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  &__nav{
    display: flex;
    gap: 20px;
  }
  &__delivery{
    display: flex;
    gap: 20px;
  }
}
.active {
  color: #5f909d;
}
@media (max-width: 767px) {
  .navbar{
    justify-content: flex-start;
    align-items: center;
    gap: 30%;
    padding: 20% 0 0 0;

    &__nav{
      flex-direction: column;
      font-size: 20px;
    }
    &__delivery{
      flex-direction: column;
      gap: 20px;
    }
  }
}
.flex{
  gap: 5px;
}

</style>
