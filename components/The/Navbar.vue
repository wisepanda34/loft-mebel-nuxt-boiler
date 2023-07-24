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
        @click="chooseMenu"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z"
            stroke="black"
          />
        </svg>
        <span>+1 (964) 89 99 119</span>
      </nuxt-link>
      <nuxt-link
        to="/deliveryPage"
        class="navbar__delivery-deliv flex"
        @click="chooseMenu"
      >
        <svg
          width="29"
          height="17"
          viewBox="0 0 29 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.85418 14.5H5.43751C5.10401 14.5 4.83334 14.2293 4.83334 13.8958C4.83334 13.5623 5.10401 13.2917 5.43751 13.2917H7.85418C8.18768 13.2917 8.45834 13.5623 8.45834 13.8958C8.45834 14.2293 8.18768 14.5 7.85418 14.5Z"
            fill="none"
          />
          <path
            d="M27.4896 14.5H25.9792C25.6457 14.5 25.375 14.2293 25.375 13.8958C25.375 13.5623 25.6457 13.2917 25.9792 13.2917H26.9881L27.8026 8.95133C27.7917 6.73042 25.8946 4.83333 23.5625 4.83333H19.5956L17.6731 13.2917H21.1459C21.4794 13.2917 21.75 13.5623 21.75 13.8958C21.75 14.2293 21.4794 14.5 21.1459 14.5H16.9167C16.733 14.5 16.559 14.4166 16.4442 14.2728C16.3294 14.1303 16.2859 13.9418 16.327 13.7629L18.5238 4.09625C18.5866 3.81954 18.8307 3.625 19.1134 3.625H23.5625C26.5604 3.625 29 6.06463 29 9.0625L28.0829 14.007C28.0297 14.2934 27.7808 14.5 27.4896 14.5Z"
            fill="black"
          />
          <path
            d="M23.5625 16.9167C21.8974 16.9167 20.5417 15.5621 20.5417 13.8958C20.5417 12.2295 21.8974 10.875 23.5625 10.875C25.2276 10.875 26.5833 12.2295 26.5833 13.8958C26.5833 15.5621 25.2276 16.9167 23.5625 16.9167ZM23.5625 12.0833C22.5632 12.0833 21.75 12.8965 21.75 13.8958C21.75 14.8951 22.5632 15.7083 23.5625 15.7083C24.5618 15.7083 25.375 14.8951 25.375 13.8958C25.375 12.8965 24.5618 12.0833 23.5625 12.0833Z"
            fill="black"
          />
          <path
            d="M10.2708 16.9167C8.60576 16.9167 7.25001 15.5621 7.25001 13.8958C7.25001 12.2295 8.60576 10.875 10.2708 10.875C11.9359 10.875 13.2917 12.2295 13.2917 13.8958C13.2917 15.5621 11.9359 16.9167 10.2708 16.9167ZM10.2708 12.0833C9.27155 12.0833 8.45834 12.8965 8.45834 13.8958C8.45834 14.8951 9.27155 15.7083 10.2708 15.7083C11.2701 15.7083 12.0833 14.8951 12.0833 13.8958C12.0833 12.8965 11.2701 12.0833 10.2708 12.0833Z"
            fill="black"
          />
          <path
            d="M7.85417 3.625H3.02084C2.68734 3.625 2.41667 3.35433 2.41667 3.02083C2.41667 2.68733 2.68734 2.41667 3.02084 2.41667H7.85417C8.18767 2.41667 8.45834 2.68733 8.45834 3.02083C8.45834 3.35433 8.18767 3.625 7.85417 3.625Z"
            fill="black"
          />
          <path
            d="M7.85418 7.25H1.81251C1.47901 7.25 1.20834 6.97933 1.20834 6.64583C1.20834 6.31233 1.47901 6.04167 1.81251 6.04167H7.85418C8.18768 6.04167 8.45834 6.31233 8.45834 6.64583C8.45834 6.97933 8.18768 7.25 7.85418 7.25Z"
            fill="black"
          />
          <path
            d="M7.85417 10.875H0.604167C0.270667 10.875 0 10.6043 0 10.2708C0 9.93733 0.270667 9.66667 0.604167 9.66667H7.85417C8.18767 9.66667 8.45833 9.93733 8.45833 10.2708C8.45833 10.6043 8.18767 10.875 7.85417 10.875Z"
            fill="black"
          />
          <path
            d="M16.9167 14.5L12.6875 14.5C12.354 14.5 12.0833 14.2293 12.0833 13.8958C12.0833 13.5623 12.354 13.2917 12.6875 13.2917H16.4346L19.1799 1.20833H5.43751C5.10401 1.20833 4.83334 0.937667 4.83334 0.604167C4.83334 0.270667 5.10401 0 5.43751 0H19.9375C20.1212 0 20.2952 0.0833752 20.41 0.227167C20.5248 0.36975 20.5683 0.55825 20.5272 0.737083L17.5063 14.0287C17.4435 14.3055 17.1982 14.5 16.9167 14.5Z"
            fill="black"
          />
        </svg>
        <span>Delivery</span>
      </nuxt-link>
      <div class="navbar__delivery-lang">
        <UIVSelect
          class="navbar__delivery-select"
          :selected="selectedLang"
          :options="langOptions"
          @select="sortedLang"
        />
      </div>
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
        links,
        selectedLang: '',
        langOptions: [
          { value: 'en', name: 'en' },
          { value: 'fr', name: 'fr' },
          { value: 'sp', name: 'sp' }
        ]
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
      },
      sortedLang (option) {
        this.selectedLang = option.value
      }
    },
    mounted () {
      if (this.langOptions.length > 0) { this.selectedLang = this.langOptions[0].value }
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
    &-deliv, &-phone{
      align-items: center;
    }
    &-select{
      width: 30px;
    }
  }
}
.navbar .active {
  color: #5f909d;
}
.navbar .router-link-active span{
  color: #54838f;
}
.navbar .router-link-active svg path{
  fill: #54838f;
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
