<template>
  <!--  tabindex="-1"  фокусировка на элементе, для срабатывания esc-->

  <div
    v-if="modalTexts.length"
    ref="modalElement"
    class="modal"
    tabindex="-1"
    @click.self="closeVoiceModal"
    @keydown.esc="closeVoiceModal"
  >
    <div class="modal__white">
      <div class="modal__delete">
        <span @click="closeVoiceModal">&#9587;</span>
      </div>
      <div class="modal__content">{{ modalTexts }}</div>
      <!--      <template v-if="modalStore.isAuthModal">-->
      <!--        auth-->
      <!--      </template>-->
      <slot />
    </div>
  </div>
</template>

<script>
  import { useModal } from '~/stores/modal'

  export default {
    name: 'BaseModal',
    setup () {
      const modalStore = useModal()
      const modalTexts = computed(() => modalStore.modalTexts)
      return { modalTexts, modalStore }
    },
    watch: {
      modalTexts (value) {
        // код внутри $nextTick будет выполнен, когда Vue обновит DOM
        this.$nextTick(() => {
          if (value) {
            this.$refs.modalElement.focus()
          }
        })
      }
    },
    methods: {
      closeVoiceModal () {
        this.modalStore.closeVoiceModal()
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  background: rgba(64, 64, 64, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus{
    outline: none;
  }

  &__white{
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 200px;
    padding:10px 20px;
    background: #FFFFFF;
    opacity: 0.95;
    box-shadow: 8px 13px 9px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
  &__delete{
    text-align: right;

    span{
      font-size: 15px;
      font-weight: 900;
      cursor: pointer;
    }
  }
  &__content{
    flex: 1 1 auto;
    padding: 5px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>
