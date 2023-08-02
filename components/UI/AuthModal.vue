<template>
  <div
    v-if="isAuthModal"
    class="auth"
  >
    <div class="auth__wrapper">
      <h3 class="auth__title center">Login In</h3>
      <span
        class="auth__close"
        @click="closeAuth"
      >&#9587;</span>

      <form
        action="#"
        class="auth__form"
      >
        <div class="auth__phone">
          <label for="auth-phone">Phone</label>
          <my-input
            class="auth__input"
            type="text"
            name="auth-phone"
          />
        </div>

        <div class="auth__password">
          <label for="auth-password">Password</label>
          <my-input
            class="auth__input"
            type="text"
            name="auth-password"
          />
        </div>

        <button
          type="submit"
          class="btn auth__btn"
        >
          Sign in
        </button>
      </form>
      <div class="auth__register center">Register now</div>
    </div>
  </div>
</template>

<script>
  import { useAuth } from '~/stores/auth'
  import MyInput from '~/components/UI/MyInput.vue'

  export default {
    name: 'AuthModal',
    components: { MyInput },
    setup () {
      const authStore = useAuth()
      const isAuthModal = computed(() => authStore.isAuthModal)
      return {
        isAuthModal,
        authStore
      }
    },
    data () {
      return {
        userData: { email: '', phone: '' },
        loading: false
      }
    },
    methods: {
      closeAuth () {
        this.authStore.closeAuthModal()
      }
    }
  }
</script>

<style lang="scss" scoped>
.auth{
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
  &__wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 200px;
    padding:20px 20px;
    background: #FFFFFF;
    box-shadow: 8px 13px 9px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
  &__title{
    font-size: 24px;
    font-weight: 700;
    color: #1f4a57;

  }
  &__close{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  &__form{
    padding: 30px 0;
  }
  &__input{
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  &__btn{
    width: 150px;
    height: 50px;
    margin: 10px auto 0;
    font-size: 16px;
  }
  &__register{
    text-decoration: underline;
    color: #5c0aaf;
    font-size: 18px;
  }
}
</style>
