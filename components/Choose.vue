<template>
  <section class="choose">
    <div class="choose__wrapper">
      <!--      <TransitionGroup name="slide-fade">-->
      <!--      v-if="isFilterOpen"-->
      <aside
        ref="filterWrapper"
        :class="[
          'choose__filterWrapper',
          { 'open': isFilterOpen }
        ]"
        tabindex="-1"
        @click.self="closeFilter"
        @keydown.esc="closeFilter"
      >
        <Filter
          class="choose__filter"
          @filter-selected="onFilterSelected"
          @type-selected="onTypeSelected"
          @kind-selected="onKindSelected"
          @close-filter="closeFilter"
        />
      </aside>
      <!--      </TransitionGroup>-->

      <!--      <aside class="choose__aside">-->
      <!--        <Filter-->
      <!--          class="choose__filter"-->
      <!--          @filter-selected="onFilterSelected"-->
      <!--          @type-selected="onTypeSelected"-->
      <!--          @kind-selected="onKindSelected"-->
      <!--          @close-filter="closeFilter"-->
      <!--        />-->
      <!--      </aside>-->

      <div class="choose__block">
        <div class="choose__options">
          <UIMyButton
            class="choose__btn"
            @click="openFilter"
          >
            Filter
          </UIMyButton>

          <UIVSelect
            :selected="selectedSort"
            :options="sortOptions"
            @select="sorted"
          />
        </div>
        <div class="choose__cards">
          <OneCard
            v-for="item in sortedAndFilteredProducts"
            :key="item.id"
            :is-btn-show="isBtnShow"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Filter from '@/components/Filter.vue'
  import OneCard from '@/components/OneCard.vue'
  import { useProducts } from '~/stores/products'

  export default {
    name: 'Choose',
    components: { OneCard, Filter },
    data () {
      return {
        selectedSort: '',
        sortOptions: [
          { value: 'popular', name: 'by popularity' },
          { value: 'descending', name: 'descending price' },
          { value: 'ascending', name: 'ascending price' }
        ],
        selectedFilter: '',
        selectedType: '',
        selectedKind: '',
        isFilterOpen: false,
        isBtnShow: true
      }
    },
    setup () {
      const productsStore = useProducts()
      const products = productsStore.products
      return { products }
    },
    computed: {
      sortedProducts () {
        if (this.selectedSort === 'ascending') {
          return [...this.products].sort((a, b) => a.price - b.price)
        }
        if (this.selectedSort === 'descending') {
          return [...this.products].sort((a, b) => b.price - a.price)
        }
        return this.products
      },
      sortedAndFilteredProducts () {
        const currentFilter = this.selectedFilter
        const currentType = this.selectedType
        const currentKind = this.selectedKind
        let filteredProducts = this.sortedProducts

        if (currentFilter) {
          filteredProducts = filteredProducts.filter(item =>
            item.category.toLowerCase().includes(currentFilter.toLowerCase())
          )
        }
        if (currentType) {
          filteredProducts = filteredProducts.filter(item =>
            item.typeProduct.toLowerCase().includes(currentType.toLowerCase())
          )
        }
        if (currentKind) {
          filteredProducts = filteredProducts.filter(item =>
            item.kindProduct.toLowerCase().includes(currentKind.toLowerCase())
          )
        }
        return filteredProducts
      }
    },
    watch: {
      isFilterOpen (newValue) {
        if (newValue) {
          this.$nextTick(() => {
            this.$refs.filterWrapper.focus()
          })
        }
      }
    },
    methods: {
      sorted (option) {
        this.selectedSort = option.value
      },
      onFilterSelected (filterValue) {
        this.selectedFilter = filterValue
      },
      onTypeSelected (typeValue) {
        this.selectedType = typeValue
      },
      onKindSelected (kindValue) {
        this.selectedKind = kindValue
      },
      openFilter () {
        this.isFilterOpen = true
        document.body.classList.add('no-scroll')
      },
      closeFilter () {
        this.isFilterOpen = false
        document.body.classList.remove('no-scroll')
      }
    },
    mounted () {
      if (this.sortOptions.length > 0) { this.selectedSort = this.sortOptions[0].value }
    }
  }
</script>

<style lang="scss" scoped>
.choose{
  padding: 20px 0;
  &__wrapper{
    display: flex;
    gap: 10px;
  }
  &__filterWrapper{
    flex:0 0 auto;
  }
  &__block{
    flex:1 1 auto;
  }
  &__options{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__btn{
    display: none;
    width: 138px;
    height: 40px;
    background: #cccccc;
    border:none;
    cursor: pointer;
    transition:all 0.2s ease ;
    &:hover{
      background: #e0dfdf;
    }
  }
  //&__aside{
  //
  //}
  &__select{
    text-align: center;
  }
  &__cards{
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0;
  }
}

@media (max-width: 1140px) {
  .choose{
    &__cards {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 880px) {
  .choose{
    &__wrapper{
      position: relative;
    }
    //&__aside{
    //  display: none;
    //}
    &__filterWrapper{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.5);
      z-index: 20;
      opacity: 0;
      visibility: hidden;
      &.open {
        opacity: 1;
        visibility: visible;
        transition: all 0.5s ease;
      }
    }
    &__block{
      width: 100%;
    }
    &__options{
      justify-content: space-between;
      gap: 25px;
    }
    &__btn{
      display: flex;
    }
    &__cards {
      justify-content: space-around;
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@media (max-width: 576px) {
  .choose {
    &__cards {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
