<template>
  <div
    v-if="isAuthModal"
    class="auth"
  >
    <div class="auth__wrapper">
      <h3 class="auth__title center">{{ authTitle }}</h3>
      <span
        class="auth__close"
        @click="closeAuth"
      >&#9587;</span>

      <form
        action="#"
        class="auth__form"
        @submit.prevent="submitLogIn"
      >
        <div
          v-if="isRegister"
          class="auth__name"
        >
          <label for="auth-phone">Name</label>
          <my-input
            v-model="userAuthData.name"
            class="auth__input"
            type="text"
            name="auth-name"
          />
        </div>

        <div class="auth__phone">
          <label for="auth-phone">Phone</label>
          <my-input
            v-model="userAuthData.phone"
            class="auth__input"
            type="text"
            name="auth-phone"
          />
        </div>

        <div class="auth__password">
          <label for="auth-password">Password</label>
          <my-input
            v-model="userAuthData.password"
            class="auth__input"
            type="text"
            name="auth-password"
          />
        </div>

        <div
          v-if="isRegister"
          class="auth__confirm_password"
        >
          <label for="auth-confirm-password">Confirm password</label>
          <my-input
            v-model="userAuthData.confirm_password"
            class="auth__input"
            type="text"
            name="auth-confirm-password"
          />
        </div>

        <button
          type="submit"
          class="btn auth__btn"
        >
          {{ btnText }}
        </button>
      </form>
      <div
        v-if="isLoginIn"
        class="auth__register center"
        @click="registerStart"
      >
        Register now
      </div>
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
        userAuthData: {
          name: '',
          phone: '',
          password: '',
          confirm_password: ''
        },
        loading: false,
        isLoginIn: true,
        isRegister: false,
        authTitle: 'Login In',
        btnText: 'Sign in',
        userLoginIn: {
          phone: '',
          password: ''
        },
        userRegister: {
          phone: '',
          password: '',
          date: null
        }
      }
    },
    methods: {
      closeAuth () {
        this.authStore.closeAuthModal()
      },
      submitLogIn () {
        if (this.loading) return // это логика для исключения повторной генерации события handleSubmit в момент отправления данных из формы в хранилище
        this.loading = true

        if (this.isRegister === false && this.isLoginIn === true) {
          this.userLoginIn.phone = this.userAuthData.phone
          this.userLoginIn.password = this.userAuthData.password

          try {
            if (!this.authStore.registerData) {
              console.log('You are not registered!')
              return
            } else if (this.authStore.registerData) {
              if (this.authStore.registerData === this.userLoginIn) {
                this.authStore.isUserAuth = true
                console.log(this.authStore.isUserAuth)
              }
            }
          } catch (e) {
            console.log(e)
          } finally {
            this.loading = false
          }
        } else if (this.isRegister === true && this.isLoginIn === false) {
          this.userRegister.name = this.userAuthData.name
          this.userRegister.phone = this.userAuthData.phone
          this.userRegister.password = this.userAuthData.password
          this.userRegister.date = Date.now()

          try {
            this.authStore.setRegisterData(this.userRegister)
          } catch (e) {
            console.log(e)
          } finally {
            this.loading = false
            this.loginStart()
          }
        }
      },
      registerStart () {
        this.clearFields()
        this.isLoginIn = false
        this.isRegister = true
        this.authTitle = 'Register'
        this.btnText = 'Submit'
      },
      loginStart () {
        this.clearFields()
        this.isLoginIn = true
        this.isRegister = false
        this.authTitle = 'Login In'
        this.btnText = 'Sign in'
      },
      clearFields () {
        this.userAuthData.name = ''
        this.userAuthData.phone = ''
        this.userAuthData.password = ''
        this.userAuthData.confirm_password = ''
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
    color: #245462;
    font-size: 18px;
    cursor: pointer;
    &:hover{
      color: #5f909d;
    }
  }
}
</style>
