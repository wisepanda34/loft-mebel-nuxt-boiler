<template>
  <select
    class="select"
    :value="modelValue"
    @change="changeOption($event.target.value)"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'MySelect',
    props: {
      modelValue: {
        type: String,
        default: () => ''
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      changeOption (value) {
        this.$emit('update:modelValue', value)
      }
    },
    mounted () {
      if (this.options.length > 0) {
        this.changeOption(this.options[0].value)
      }
    }
  }
</script>

<style scoped lang="scss">
.select {
  outline: none;
  border: none;
  width: 166px;
  padding-left: 10px;
}
</style>
