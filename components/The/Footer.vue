<template>
  <footer class="footer">
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__navigation">
          <h4 class="footer__navigation-title">Navigation</h4>
          <!--          <div class="footer__navigation-container">-->
          <ul class="footer__navigation-list">
            <li
              v-for="item in menuList"
              :key="item.title"
              class="footer__navigation-item"
            >
              <nuxt-link to="/">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
          <!--          </div>-->
        </div>

        <div class="footer__address">
          <div class="footer__address-block">
            <div class="footer__address-logo">LF</div>
            <div class="footer__address-addr">
              Boston, Lincoln avenue, 45 <br>Lincoln center, 2 floor
            </div>
          </div>

          <ul class="footer__address-list">
            <li
              v-for="(link,i) in linksFooter"
              :key="i"
            >
              <a
                :href="link.href"
                class="footer__address-link"
              >
                <img
                  :src="link.src"
                  alt="i"
                >
                <div>{{ link.value }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </footer>
</template>

<script>
  import { useMenuList } from '~/stores/menuList'
  import { useLinksFooter } from '~/stores/linksFooter'

  export default {
    name: 'Footer',
    setup () {
      const menuListStore = useMenuList()
      const menuList = menuListStore.menuList
      const linksFooterStore = useLinksFooter()
      const linksFooter = linksFooterStore.linksFooter
      return {
        menuList,
        linksFooter
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer{
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);
  background:#ffffff;
  &__wrapper{
    display: flex;
    justify-content: space-between;
    padding:30px 10px;
    font-size: 14px;
    line-height: 1.27;
    color: #414141;
  }

  &__navigation{
    flex:0 1 440px;
    &-title{
      font-weight: 500;
      font-size: 14px;
      line-height: 1.27;
      color: #000;
      padding: 0;
      margin: 0 0 20px 0;
      text-align: left;
    }
    &-list{
      display: grid;
      grid-template-columns: repeat(3, 140px);
      gap: 10px;
    }
    &-item{
      display: block;
      font-size: 14px;
      line-height: 1.27;
      color: #414141;
      &:hover{
        color: #3dadcc;
        text-decoration: underline;
      }
    }
    &-bottom-list{
      display: flex;
      gap: 30px;
      padding-inline-start: 0;
    }
    &-bottom-item{
      font-size: 14px;
      line-height: 1.27;
      color: #414141;
    }
  }

  &__address{
    flex:0 1 auto;
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    &-block{
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: right;
    }
    &-logo{
      font-family: 'Playfair Display', sans-serif;
      color: #000;
      font-size: 30px;
      font-weight: 900;
      padding-right: 50px;
    }
    &-list{
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      padding-left: 0;
    }
    &-link{
      display: flex;
      gap: 10px;
      img{
        height: 17px;
      }
    }
  }
}
@media(max-width: 992px){
  .footer{
    &__address{
      &-list{
        flex-direction: column;
        gap: 20px;
      }
    }
    &__navigation{
      max-width: 70vw;
    }
  }
}
@media(max-width: 767px){
  .footer{
    &__wrapper{
      padding: 30px 0;
    }
    &__navigation{
      display: none;
    }
    &__address{
      flex:1 1 100%;
      &-block{
        flex-direction: row;
        justify-content: space-between;
      }
      &-logo{
        font-size: 35px;
      }
      &-addr{
        font-size: 10px;
        align-self: center;
      }
      &-list{
        flex-direction: row;
        justify-content: center;
        padding-inline-start: 0;
        font-size: 10px;
        gap:20px;

      }
      &-link{

        gap:5px;
        img{
          height: 12px;
        }
      }
    }

  }
}
@media(max-width: 425px){
  .footer{
    &__address{
      &-list{
        flex-direction: column;
        padding-left: 30%;
      }

    }
  }
}
</style>
