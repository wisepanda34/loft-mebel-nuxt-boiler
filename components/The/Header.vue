<template>
  <header class="header">
    <TheNavbar class="header__navbar" />
    <div class="header__main">
      <div
        class="header__burger"
        @click="activeMenu"
      >
        <span />
        <span />
        <span />
      </div>

      <div class="header__logo">
        <nuxt-link to="/">Loft <br> Furniture</nuxt-link>
      </div>

      <div
        ref="searchContainer"
        class="header__search"
      >
        <input
          v-model="searchQuery"
          type="text"
          class="header__search_input"
        >
        <svg
          class="header__search_icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z"
            stroke="black"
          />
        </svg>

        <ul
          v-if="searched.length"
          class="header__search_list"
        >
          <li
            v-for="item in searched"
            :key="item.id"
            class="header__search_item"
          >
            <nuxt-link
              class="header__search_link"
              :to="`/product/${item.id}`"
              @click="closeSearch"
            >
              <div class="header__search_pic">
                <img
                  :src="item.img"
                  alt="img"
                >
              </div>
              {{ item.titleCard }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="header__icons">
        <nuxt-link to="/favoritesPage">
          <div
            class="header__icons_favorite"
            :class="{ active:isActive('/favoritesPage') }"
          >
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z"
                stroke="black"
                stroke-linejoin="round"
              />
            </svg>
            <div
              v-if="favoritesStore.getFavoritesLength"
              class="header__icons_yellow-round"
            >
              {{ favoritesStore.getFavoritesLength }}
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/cart"
          class="header__icons_cart"
          :class="{ active:isActive('/cart') }"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.70653 5.5V4.85714C4.70653 2.7269 6.43343 1 8.56367 1C10.6939 1 12.4208 2.7269 12.4208 4.85714V5.5M2.00802 8.5723L1.00802 17.5723C0.923392 18.3339 1.51957 19 2.28587 19H14.8415C15.6078 19 16.2039 18.3339 16.1193 17.5723L15.1193 8.5723C15.047 7.92117 14.4966 7.42857 13.8415 7.42857H3.28587C2.63073 7.42857 2.08036 7.92117 2.00802 8.5723Z"
              stroke="black"
            />
            <circle
              v-if="cartListStore.getTotalElements"
              cx="16"
              cy="5"
              r="4"
              fill="#D74444"
            />
          </svg>
          <div
            v-if="cartListStore.getTotalElements"
            class="header__icons_red-round"
          >
            {{ cartListStore.getTotalElements }}
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="authStore.isUserAuthed"
          to="/account"
          class="header__icons_account flex-center"
          :class="{ active:isActive('/account') }"
        >
          <svg
            width="17"
            height="22"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2924 4.85714C11.2924 6.98757 9.56458 8.71428 7.43276 8.71428C5.30094 8.71428 3.5731 6.98757 3.5731 4.85714C3.5731 2.72671 5.30094 1 7.43276 1C9.56458 1 11.2924 2.72671 11.2924 4.85714Z"
              stroke="black"
              stroke-linecap="square"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.8655 19H1C1 18.0865 1 17.2174 1 16.4304C1 14.2988 2.72803 12.5714 4.85966 12.5714H10.0059C12.1375 12.5714 13.8655 14.2988 13.8655 16.4304C13.8655 17.2174 13.8655 18.0865 13.8655 19Z"
              stroke="black"
              stroke-linecap="square"
            />
          </svg>
        </nuxt-link>
        <div
          v-if="!authStore.isUserAuthed"
          class="header__icons_account flex-center"
          @click="openAuthModal"
        >
          <svg class="header__icons_unknown" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.745 21.745C5.308 20.722 2 16.747 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.747-3.308 8.722-7.745 9.745L12 24l-2.255-2.255Zm-2.733-3.488a7.953 7.953 0 0 0 3.182 1.539l.56.129L12 21.172l1.247-1.247l.56-.13a7.955 7.955 0 0 0 3.36-1.686A6.979 6.979 0 0 0 12.16 16c-2.036 0-3.87.87-5.148 2.257ZM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634a8 8 0 1 0-12.906.187ZM12 13a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
          </svg>
        </div>
        <div
          v-if="authStore.isUserAuthed"
          class="header__icons_unknown"
          @click="logOutAuth"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 16 15">
            <g fill="currentColor">
              <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1s.5.448.5 1s-.224 1-.5 1z" />
              <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <menu-transform
      class="header__menuTransform"
      :class="{ 'menuTransform-active':isMenuActive }"
      @close-menu="closeMenu"
    />
  </header>
</template>
<script>
  import { useRoute, useRouter } from 'vue-router'
  import { useCartList } from '~/stores/cartList'
  import { useFavorites } from '~/stores/favorites'
  import { useProducts } from '~/stores/products'
  import { useAuth } from '~/stores/auth'

  export default {
    data () {
      return {
        isMenuActive: false,
        searchQuery: ''
      }
    },
    setup () {
      const route = useRoute()
      const router = useRouter()
      const cartListStore = useCartList()
      const favoritesStore = useFavorites()
      const productsStore = useProducts()
      const getProduct = productsStore.getProduct
      const authStore = useAuth()
      const isActive = (routePath) => {
        return route.path === routePath
      }
      return {
        isActive,
        cartListStore,
        favoritesStore,
        getProduct,
        productsStore,
        authStore,
        router
      }
    },
    computed: {
      searched () {
        return this.productsStore.getSearchProduct(this.searchQuery)
      }
    },
    methods: {
      // логика очистки поля при клике вне searchContainer
      handleOutsideClick (event) {
        const searchContainer = this.$refs.searchContainer
        if (!searchContainer) { return }
        if (!searchContainer.contains(event.target)) {
          this.closeSearch()
        }
      },
      closeSearch () {
        this.searchQuery = ''
      },
      activeMenu () {
        this.isMenuActive = true
        document.body.classList.add('no-scroll')
      },
      closeMenu () {
        this.isMenuActive = false
        document.body.classList.remove('no-scroll')
      },
      openAuthModal () {
        this.authStore.openAuthModal()
      },
      logOutAuth () {
        this.authStore.logOutAuth()
        this.router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
.header{
  padding: 0 5px 10px;
  background: lightgray;
  &__main{
    display: flex;
    justify-content: space-between;
  }
  &__burger{
    display: none;
    flex: 0 0 30px;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    width: 100%;
    cursor: pointer;
    order: 1;
    span{
      background: #000;
      height: 1px;
    }
  }
  &__logo{
    flex: 0 1 auto;
    font-size: 24px;
    font-weight: 900;
    font-family: 'Playfair Display', serif;
    line-height: 1.05;
    text-transform: uppercase;
    order: 2;
  }
  &__search{
    position: relative;
    flex: 1 1 auto;
    padding: 0 20px;
    order: 3;
    &_input{
      width: 100%;
      height: 50px;
      padding: 0 20px 0 40px;
      border: 1px solid rgba(230, 230, 230, 1);
      background-color: #fff;
      font-size: 16px;
    }
    &_icon{
      position: absolute;
      top: 16px;
      left: 34px;
      width: 16px;
      height: 16px;
      z-index: 10;
    }
    &_list{
      position: absolute;
      z-index: 100;
      top: 49px;
      left: 20px;
      width: calc(100% - 40px);
      max-height: 50vh;
      overflow-y: scroll;
      background: #fff;
      border: 1px solid rgba(230, 230, 230, 1);
      padding-left: 10px;
      &::-webkit-scrollbar {
        width: 15px;
        height: 8px;
      }

      &::-webkit-scrollbar-track {
        background: #FFFFFF;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #eaeaea;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: lightgray;
      }
    }
    &_item{
      margin: 4px 0;
    }
    &_link{
      display: flex;
      gap: 10px;
      img{
        width: 20px;
        height: 20px;
      }
      &:hover{
        color: #4d91a4;
      }
    }
  }
  &__icons{
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    gap: 30px;
    order:4;
    &_cart{
      position: relative;
      display: flex;
      align-items: center;
    }
    &_favorite{
      position: relative;
      display: flex;
      align-items: center;
    }
    &_yellow-round{
      position: absolute;
      width: 16px;
      height: 16px;
      background: yellow;
      color: #383838;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: 700;
      border-radius: 50%;
      top: -2px;
      left: 15px;
      z-index: 20;
    }
    &_red-round{
      position: absolute;
      width: 15px;
      height: 15px;
      background: #e51c1c;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: 700;
      border-radius: 50%;
      top: -2px;
      left: 9px;
      z-index: 20;
      svg {
        fill: white;
      }
    }
    &_account{
      position: relative;
      cursor: pointer;
    }
    &_unknown{
      color: #4f4f4f;
    }
  }
  &__menuTransform{
    display: none;
  }
}
.header .active svg{
  fill: #79a4b0;
}

@media (max-width:992px){
  .header{
    position: relative;
    padding: 10px 3px;
    &__main{
      flex-wrap: wrap;
    }
    &__burger{
      display: flex;
      order:1;

    }
    &__logo{
      order: 2;
      flex: 0 1 auto;
      font-size: 18px;
      padding: 0 10px;
      margin-top: 0;
    }
    &__search{
      order: 4;
      flex: 0 1 100%;
      margin: 7px 0 0 0;
      padding: 0;

      &_input{
        height: 40px;
      }
      &_icon{
        top: 14px;
        left: 14px;
      }
      &_list{
        top: 39px;
        left: 0;
        width: 100%;
        font-size: 14px;
      }
    }
    &__icons{
      order: 3;
      flex: 0 1 auto;
      gap: 15px;
      margin-top: 0;
    }
    &__navbar{
      display: none;
    }
    &__menuTransform{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 150;
    }
  }
}
</style>
