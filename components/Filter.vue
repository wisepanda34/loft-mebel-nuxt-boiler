<template>
  <section class="filter">
    <div class="filter__head">
      <div
        class="filter__reset"
        @click="resetFilters"
      >
        reset
      </div>
      <div class="filter__title">Filter</div>
      <div
        class="filter__close"
        @click="$emit('close-filter')"
      >
        &#9587;
      </div>
    </div>

    <form class="filter__form">
      <div class="filter__selects">
        <p class="filter__subtitle">Chapter</p>
        <my-select
          v-model="selectedFilter"
          :options="filterOptions"
          class="filter__select"
        />
        <my-select
          v-model="selectedType"
          :options="typeOptions"
          class="filter__select"
        />
        <my-select
          v-model="selectedKind"
          :options="kindOptions"
          class="filter__select"
        />
      </div>

      <div class="filter__price">
        <p class="filter__subtitle">Price</p>
      </div>

      <div class="filter__color">
        <p class="filter__subtitle">Color</p>
        <ul class="filter__color-list">
          <li
            v-for="(item, i) in colorRadios"
            :key="i"
            class="filter__color-item"
          >
            <input
              :id="`${item.i}`"
              type="radio"
              :data-colorname="`${item.name}`"
              :value="`${item.value}`"
            >
            <label
              :id="`${item.name}-label`"
              :for="`${item.i}`"
            />
          </li>
        </ul>
      </div>

      <div class="filter__series">
        <p class="filter__subtitle">Brend</p>
        <ul class="filter__series-list">
          <li
            v-for="(item, i) in brendsArray"
            :key="i"
            class="filter__series-item"
          >
            <input
              type="checkbox"
              name="checkbox-Dins"
            >
            <label :for="`checkbox-${item}`">{{ item }}</label>
          </li>
        </ul>
        <div class="filter__show">Show more</div>
      </div>
    </form>
  </section>
</template>

<script>
  import MySelect from '@/components/UI/MySelect.vue'
  // import VSelect from '@/components/UI/v-select.vue'

  export default {
    name: 'Filter',
    components: { MySelect },
    data () {
      return {
        selectedFilter: '',
        filterOptions: [
          { value: '', name: 'all' },
          { value: 'kitchen', name: 'kitchen' },
          { value: 'living room', name: 'living room' },
          { value: 'bedroom', name: 'bedroom' }
        ],
        selectedType: '',
        typeOptions: [
          { value: '', name: 'all' },
          { value: 'soft', name: 'soft furniture' },
          { value: 'leather', name: 'leather furniture' },
          { value: 'artificial', name: 'artificial material' },
          { value: 'wood', name: 'wood furniture' }
        ],
        selectedKind: '',
        kindOptions: [
          { value: '', name: 'all' },
          { value: 'sofa', name: 'sofa' },
          { value: 'bar stool', name: 'bar stool' },
          { value: 'bed', name: 'bed' },
          { value: 'bufet', name: 'bufet' },
          { value: 'commode', name: 'commode' },
          { value: 'table', name: 'table' },
          { value: 'cupboard', name: 'cupboard' },
          { value: 'kids sofa', name: 'kids sofa' },
          { value: 'bookcase', name: 'bookcase' }
        ],
        colorRadios: [
          { value: '#900000', name: 'red' },
          { value: '#ffea02', name: 'yellow' },
          { value: '#03DBCB', name: 'green' },
          { value: '#808080', name: 'gray' },
          { value: '#a52a2a', name: 'brown' },
          { value: '#000', name: 'black' }
        ],
        brendsArray: ['Dins', 'Koosken', 'Ebby', 'Redgio']
      }
    },
    watch: {
      selectedFilter (newVal) {
        this.$emit('filter-selected', newVal)
      },
      selectedKind (newValue) {
        this.$emit('kind-selected', newValue)
      },
      selectedType (newValue) {
        this.$emit('type-selected', newValue)
      }
    },
    methods: {
      resetFilters () {
        this.selectedFilter = ''
        this.selectedType = ''
        this.selectedKind = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.filter{
  width: 263px;
  height: 100%;
  padding: 0 20px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
  transition: all 0.5s ease-out;
  &__head{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding-bottom: 20px;
  }
  &__title{
    margin: 0 80px 0 55px;
  }
  &__close{
    display: none;
    font-size: 10px;
    cursor: pointer;
  }
  &__reset{
    border: 0.5px solid #7e7e7e;
    color: #7e7e7e;
    border-radius: 6px;
    padding:2px 5px;
    font-size: 12px;
    cursor: pointer;

  }
  &__form{
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
  &__subtitle{
    font-size: 14px;
    line-height: 16px;
    color: #414141;
    text-align: left;
    margin: 25px 0 15px 0;
  }

  &__selects{
    display: flex;
    flex-direction: column;
    gap: 10px;

  }
  &__select{
    width: 223px;
    height: 26px;
    background: #F8F8F8;
    border-radius: 3px;
    font-size: 12px;
    color: #686868;;
  }
  &__price{
    margin-bottom: 50px;
  }
  &__color-list,&__series-list{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    text-align: left;
    padding-inline-start: 0;
  }
  &__color-item{
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: relative;
    input{
      display: none;
    }
    label{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 1px solid #DDDDDD;
      border-radius: 4px;
      cursor: pointer;
    }
    input:checked + label {
      border: 2px solid #880707;
    }
    #red-label{
      background: red;
    }
    #yellow-label{
      background: yellow;
    }
    #green-label{
      background: green;
    }
    #gray-label{
      background: #808080;
    }
    #brown-label{
      background: #a52a2a;
    }
    #black-label{
      background: #000;
    }
  }
  &__series-list{
    flex-direction: column;
  }
  &__series-item{
    input{
      vertical-align: middle;
      border: 1px solid #245462;
      border-radius: 3px;
      width: 15px;
      height: 15px;
      margin: 0;
    }
    label{
      margin: 0 auto 0 10px;
      font-size: 12px;
      line-height: 14px;
      color: #414141;
    }
  }
  &__show{
    font-size: 12px;
    line-height: 14px;
    color: #245462;
    cursor: pointer;
    margin-top: 30px;
    &:hover{
      color: #4199b4;
    }
  }
}
@media (max-width: 860px) {
  .filter{
    &__close{
      display: block;
    }
  }
}
</style>
