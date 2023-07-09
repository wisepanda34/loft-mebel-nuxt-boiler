<template>
  <div class="v-select">
    <p
      class="v-select__default center"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </p>
    <div
      v-if="areOptionsVisible"
      class="v-select__options"
    >
      <p
        v-for="option in options"
        :key="option.value"
        class="v-select__item center"
        @click="sortedOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VSelect',
    props: {
      options: {
        type: Object,
        default: () => {}
      },
      selected: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        areOptionsVisible: false
      }
    },
    methods: {
      sortedOption (option) {
        this.$emit('select', option)
        this.areOptionsVisible = false
      },
      hideSelect () {
        this.areOptionsVisible = false
      }
    },
    mounted () {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy () {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style lang="scss" >
.v-select{
  position: relative;
  width: 150px;
  height: 26px;
  cursor: pointer;
  border: 1px solid #e7e7e7;
  font-size: 14px;
  &__default{
    height: 30px;
    padding: 3px 0;
  }
  &__options{
    position: absolute;
    top: 24px;
    left: -1px;
    width:calc(100% + 2px) ;
    background: #FFFFFF;
    border: 1px solid #e7e7e7;
    z-index: 50;
  }
  &__item{
    text-align: center;
    padding: 7px 0;
    font-size: 14px;

    &:hover{
      background: lightgray;
    }
  }
}
</style>
