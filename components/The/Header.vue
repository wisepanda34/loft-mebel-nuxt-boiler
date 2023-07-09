<template>
  <div class="header">
    <div class="container">
      <TheNavbar class="header__navbar" />
      <div class="header__main">
        <div class="header__burger">
          <span />
          <span />
          <span />
        </div>
        <!--        @click="activeMenu"-->

        <div class="header__logo">
          <nuxt-link to="/">Loft <br> Furniture</nuxt-link>
        </div>

        <div
          ref="searchContainer"
          class="header__search"
        >
          <input
            v-model="searchQuery"
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

          <!--          <ul-->
          <!--            v-if="searched.length"-->
          <!--            class="header__search_list"-->
          <!--          >-->
          <!--            <li-->
          <!--              v-for="item in searched"-->
          <!--              class="header__search_item"-->
          <!--            >-->
          <!--              <nuxt-link-->
          <!--                class="header__search_link"-->
          <!--                :to="`/product/${item.id}`"-->
          <!--              >-->
          <!--                &lt;!&ndash;                @click="closeSearch"&ndash;&gt;-->
          <!--                <div class="header__search_pic">-->
          <!--                  <img-->
          <!--                    :src="item.img"-->
          <!--                    alt="img"-->
          <!--                  >-->
          <!--                </div>-->
          <!--                {{ item.titleCard }}-->
          <!--              </nuxt-link>-->
          <!--            </li>-->
          <!--          </ul>-->
        </div>

        <div class="header__icons">
          <nuxt-link to="/favoritesPage">
            <div class="header__icons_favorite">
              <!--              :class="{active:isActive('/favoritesPage')}"-->
              <img
                src="images/icons/wishlist-icon.svg"
                alt="i"
              >
              <!--              <div-->
              <!--                v-if="totalFavorites"-->
              <!--                class="header__icons_yellow-round"-->
              <!--              >-->
              <!--                {{ totalFavorites }}-->
              <!--              </div>-->
            </div>
          </nuxt-link>
          <nuxt-link to="/cart">
            <div class="header__icons_cart">
              <!--              :class="{active:isActive('/cart')}"-->
              <img
                src="images/icons/bag.svg"
                alt="i"
              >
              <!--              <div-->
              <!--                v-if="totalElements"-->
              <!--                class="header__icons_red-round"-->
              <!--              >-->
              <!--                {{ totalElements }}-->
              <!--              </div>-->
            </div>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="header__icons_account flex-center"
          >
            <!--            :class="{active:isActive('/account')}"-->
            <img
              src="images/icons/profile-icon.svg"
              alt="i"
            >
          </nuxt-link>
        </div>
      </div>

      <!--      <menu-transform class="header__menuTransform" :class="{'menuTransform-active':isMenuActive}" @close-menu="closeMenu"/>-->
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isMenuActive: false,
        // windowWidth: window.innerWidth,
        searchQuery: ''
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
      top: 33px;
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
    }
    &_account{
      position: relative;
    }
  }
  &__menuTransform{
    display: none;
  }
}
.header .active{
  &:after{
    content: '';
    position: absolute;
    top: 24px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #5f909d;
  }
}
@media (max-width:992px){
  .header{
    &__main{
      padding: 0;
    }
    &__logo{
      order: 2;
      margin-top: 0;
    }
    &__search{
      order: 3;
      margin: 0 20px 0 20px;
    }
    &__icons{
      order: 4;
      margin-top: 0;
    }
  }
}

@media (max-width:767px){
  .header{
    position: relative;
    padding: 10px 0;
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
        top: 25px;
        left: 0;
        width: 100%;
        font-size: 14px;
      }
    }
    &__icons{
      order: 3;
      flex: 0 1 auto;
      gap: 15px
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
