<template>
  <!-- v-model="value"  =  :value="modelValue" @input="handleInput"  -->
  <input
    v-model="value"
    type="text"
    class="input"
  >
</template>

<script>
  export default {
    name: 'MyInput',
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
      value: {
        get () {
          return this.modelValue
        },
        set (value) {
          this.$emit('update:modelValue', value)
        }
      }
    },
    methods: {
      // handleInput(e){
      //   this.$emit('update/modelValue', e.target.value)
      // }
    }

  }
</script>

<style lang="scss" scoped>
  .input{
    background: #FCFCFC;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 0 10px;
  }
</style>
