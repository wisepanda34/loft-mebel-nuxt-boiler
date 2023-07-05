<template>
  <section class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <ul class="menu__list">
          <li
            v-for="item in menuList"
            :key="item.title"
            class="menu__item"
          >
            <nuxt-link
              class="menu__link"
              to="/catalog"
            >
              <div class="menu__icon flex-center">
                <img
                  :src="item.icon"
                  alt="i"
                >
              </div>
              <div class="menu__title flex-center">{{ item.title }}</div>
            </nuxt-link>
          </li>
        </ul>

        <div class="menu__points"><span>&#8285;</span></div>
        <!--        @click="openDropdownMenu"-->
        <div
          v-if="isDropdownOpen"
          ref="dropdownMenu"
          class="menu__dropdown"
          tabindex="-1"
        >
          <!--          @keydown.esc="closeDropdownMenu"-->
          <!--          @click.self="closeDropdownMenu"-->
          <div
            class="menu__dropdown_close"
          >
            <!--            @click="closeDropdownMenu"-->

            close
          </div>
          <ul class="menu__dropdown_list">
            <li
              v-for="item in menuList"
              :key="item.title"
              class="menu__dropdown_item"
            >
              <nuxt-link
                class="menu__dropdown_link"
                to="/catalog"
              >
                <div class="menu__dropdown_icon ">
                  <img
                    :src="item.icon"
                    alt="i"
                  >
                </div>
                <div class="menu__dropdown_title center">{{ item.title }}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import {mapGetters} from "vuex";
//   import { mapStores } from 'pinia'
  import { useMenuList } from '~/stores/menuList'

  const menuList = useMenuList()

</script>

<!--<style lang="scss" scoped>-->
<!--.menu{-->
<!--  padding: 10px 0;-->

<!--  &__wrapper{-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    background: #FFFFFF;-->
<!--    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);-->
<!--    position: relative;-->
<!--  }-->
<!--  &__dropdown{-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    width: 100%;-->
<!--    max-height: 80vh;-->
<!--    overflow-y: auto;-->
<!--    scrollbar-width: thin;-->
<!--    scrollbar-color: #245462 lightgray;-->
<!--    background: #fff;-->
<!--    border: 1px solid rgba(230, 230, 230, 1);-->
<!--    z-index: 50;-->
<!--    padding: 20px;-->
<!--    outline: none;-->
<!--    &::-webkit-scrollbar {-->
<!--      width: 8px;-->
<!--      height: 8px;-->
<!--    }-->
<!--    &::-webkit-scrollbar-track {-->
<!--      background: lightgray;-->
<!--    }-->
<!--    &::-webkit-scrollbar-thumb {-->
<!--      background-color: #8ba0a2;-->
<!--      border-radius: 4px;-->
<!--    }-->
<!--    &::-webkit-scrollbar-thumb:hover {-->
<!--      background-color: #94bcc0;-->
<!--    }-->
<!--    &_close{-->
<!--      position: absolute;-->
<!--      top: 10px;-->
<!--      right: 10px;-->
<!--      width: auto;-->
<!--      text-decoration: underline;-->
<!--      cursor: pointer;-->
<!--      color: #4c6062;-->
<!--      &:hover{-->
<!--        color: #68c0ee;-->
<!--      }-->
<!--    }-->
<!--    &_list{-->
<!--      display: flex;-->
<!--      justify-content: start;-->
<!--      gap: 20px;-->
<!--      flex-wrap: wrap;-->
<!--      padding-left: 0;-->
<!--    }-->
<!--    &_item{-->
<!--      width: 150px;-->
<!--      min-height: 100px;-->
<!--      padding-top: 10px;-->
<!--      &:hover{-->
<!--        background: #dfe4e5;-->
<!--        box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);-->
<!--      }-->
<!--    }-->
<!--    &_link{-->
<!--      padding: 10px 0;-->
<!--      &:hover{-->
<!--        background: #94bcc0;-->
<!--        box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);-->
<!--      }-->
<!--    }-->
<!--    &_icon{-->
<!--      img{-->
<!--        width: 30px;-->
<!--        height: 30px;-->
<!--      }-->
<!--    }-->
<!--    &_title{-->
<!--      margin-top: 10px;-->
<!--      font-size: 20px;-->
<!--    }-->
<!--  }-->
<!--  &__list{-->
<!--    min-height: 85px;-->
<!--    flex: 0 1 auto;-->
<!--    display: flex;-->
<!--    gap:50px;-->
<!--    flex-wrap: nowrap;-->
<!--    justify-content: stretch;-->
<!--    align-items: center;-->
<!--    overflow-x: auto;-->
<!--    scrollbar-width: thin;-->
<!--    scrollbar-color: #245462 lightgray;-->
<!--    margin: 5px 0 10px;-->
<!--    padding:0 10px;-->
<!--    &::-webkit-scrollbar {-->
<!--      width: 8px;-->
<!--      height: 8px;-->
<!--    }-->
<!--    &::-webkit-scrollbar-track {-->
<!--      background: lightgray;-->
<!--    }-->
<!--    &::-webkit-scrollbar-thumb {-->
<!--      background-color: #8ba0a2;-->
<!--      border-radius: 4px;-->
<!--    }-->
<!--    &::-webkit-scrollbar-thumb:hover {-->
<!--      background-color: #94bcc0;-->
<!--    }-->
<!--  }-->
<!--  &__item{-->
<!--      height: 70px;-->
<!--      margin-bottom: 10px;-->
<!--      display: inline-flex;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--      &:hover{-->
<!--        background: #dfe4e5;-->
<!--        box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);-->
<!--      }-->
<!--  }-->
<!--  &__link{-->
<!--     display: flex;-->
<!--     gap: 10px;-->
<!--     padding: 14px 10px 10px 10px;-->
<!--     border-radius: 2px;-->
<!--     cursor: pointer;-->
<!--     transition: all 0.2s ease-in;-->
<!--    span{-->
<!--      font-size: 16px;-->
<!--      line-height: 19px;-->
<!--      color: #414141;-->
<!--    }-->

<!--  }-->
<!--  &__icon{-->

<!--    img{-->
<!--      min-height: 25px;-->
<!--      min-width: 25px;-->
<!--    }-->
<!--  }-->
<!--  &__title{-->
<!--    font-size: 16px;-->
<!--  }-->
<!--  &__points{-->
<!--    flex: 0 0 62px;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--    span{-->
<!--      cursor: pointer;-->
<!--      font-size: 20px;-->
<!--      padding: 10px 20px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--@media (max-width:992px){-->
<!--  .menu{-->
<!--    &__list{-->
<!--      gap:35px;-->
<!--    }-->
<!--    &__dropdown{-->
<!--      &_item{-->
<!--        width: 120px;-->
<!--        min-height: 80px;-->
<!--        gap: 10px;-->
<!--      }-->
<!--      &_icon{-->
<!--        img{-->
<!--          width: 25px;-->
<!--          height: 25px;-->
<!--        }-->
<!--      }-->
<!--      &_title{-->
<!--        font-size: 14px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--@media (max-width:767px){-->
<!--  .menu{-->
<!--    &__item{-->
<!--      &:hover{-->
<!--        background: initial !important;-->
<!--        box-shadow: 0 1px 9px rgba(0, 0, 0, 0);-->
<!--      }-->
<!--    }-->
<!--    &__list{-->
<!--      min-height: 105px;-->
<!--      gap: 12px;-->
<!--      justify-content: space-between;-->
<!--      align-items: baseline;-->
<!--    }-->
<!--    &__link{-->
<!--       flex-direction: column;-->
<!--       padding: 14px 1px;-->
<!--    }-->
<!--    &__icon{-->
<!--       width: 50px;-->
<!--       height: 50px;-->
<!--       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);-->
<!--       display: flex;-->
<!--       justify-content: center;-->
<!--       align-items: center;-->
<!--       &:hover{-->
<!--         background: #dfe4e5;-->
<!--         box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);-->
<!--       }-->
<!--    }-->
<!--    &__title{-->
<!--      font-size: 9px;-->
<!--      text-align: center;-->
<!--    }-->
<!--    &__points{-->
<!--      display: none;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
