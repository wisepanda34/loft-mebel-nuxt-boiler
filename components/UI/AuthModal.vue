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

      <!--  Form Login In    -->
      <div
        v-if="isProcessAuth===1"
        class="auth__loginIn"
      >
        <form
          action="#"
          class="auth__form"
          :class="{
            'disabled_class': loading
          }"
          @submit.prevent="submitLogin"
        >
          <div class="auth__phone">
            <label for="auth-phone">Phone</label>
            <my-input
              id="auth-phone"
              v-model="userLoginInData.phoneLogin"
              class="auth__input"
              name="auth-phone"
              placeholder="input your phone"
              @input="v$.userLoginInData.phoneLogin.$touch()"
            />
            <div
              v-if="checkErrorLoginPhone()"
              class="invalidMessage"
            >
              This field is not a valid
            </div>
          </div>
          <div class="auth__password">
            <label for="auth-password">Password</label>
            <my-input
              id="auth-password"
              v-model="userLoginInData.passwordLogin"
              class="auth__input"
              text="password"
              name="auth-password"
              placeholder="4 - 20 characters"
              @input="v$.userLoginInData.passwordLogin.$touch()"
            />
            <div
              v-if="checkErrorLoginPassword()"
              class="invalidMessage"
            >
              This field is not a valid
            </div>
          </div>
          <my-button
            type="submit"
            class="auth__btn"
          >
            Sign In
          </my-button>
        </form>
      </div>

      <!--  Form Registration    -->
      <div
        v-if="isProcessAuth===2"
        class="auth__registration"
      >
        <form
          action="#"
          class="auth__form"
          :class="{
            'disabled_class': loading
          }"
          @submit.prevent="submitRegister"
        >
          <div
            class="auth__name"
          >
            <label for="auth-phone">Name</label>
            <my-input
              v-model="userRegisterData.name"
              class="auth__input"
              type="text"
              name="auth-name"
              placeholder="3 - 20 characters"
              @input="v$.userRegisterData.name.$touch()"
            />
            <div
              v-if="checkErrorRegName"
              class="invalidMessage"
            >
              This field is not an valid
            </div>
          </div>

          <div class="auth__phone">
            <label for="auth-phone">Phone</label>
            <my-input
              v-model="userRegisterData.phone"
              class="auth__input"
              type="text"
              name="auth-phone"
              placeholder="input your phone"
              @input="v$.userRegisterData.phone.$touch()"
            />
            <div
              v-if="checkErrorRegPhone"
              class="invalidMessage"
            >
              This field is not an valid
            </div>
          </div>

          <div class="auth__password">
            <label for="auth-password">Password</label>
            <my-input
              v-model="userRegisterData.password"
              class="auth__input"
              type="text"
              name="auth-password"
              placeholder="4 - 20 characters"
              @input="v$.userRegisterData.password.$touch()"
            />
            <div
              v-if="checkErrorRegPassword"
              class="invalidMessage"
            >
              This field is not an valid
            </div>
          </div>

          <div
            class="auth__confirm_password"
          >
            <label for="auth-confirm-password">Confirm password</label>
            <my-input
              v-model="userRegisterData.confirm_password"
              class="auth__input"
              type="text"
              name="auth-confirm-password"
              placeholder="4 - 20 characters"
              @input="v$.userRegisterData.confirmPassword.$touch()"
            />
            <div
              v-if="checkErrorRegConfirm"
              class="invalidMessage"
            >
              This field is not an valid
            </div>
          </div>
          <my-button
            type="submit"
            class="auth__btn"
          >
            Submit
          </my-button>
        </form>
      </div>

      <div
        v-if="isProcessAuth===1"
        class="auth__register center"
        @click="registerStart"
      >
        Register now
      </div>
    </div>
  </div>
</template>

<script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, sameAs, minLength, maxLength, numeric, helpers } from '@vuelidate/validators'
  import { useAuth } from '~/stores/auth'
  import MyInput from '~/components/UI/MyInput.vue'
  import MyButton from '~/components/UI/MyButton.vue'

  export default {
    name: 'AuthModal',
    components: { MyButton, MyInput },
    setup () {
      const v$ = useVuelidate()
      const authStore = useAuth()
      const getRegisterData = authStore.getRegisterData
      const isAuthModal = computed(() => authStore.isAuthModal)
      return {
        isAuthModal,
        getRegisterData,
        authStore,
        v$
      }
    },
    data () {
      return {
        userLoginInData: {
          phoneLogin: '',
          passwordLogin: ''
        },
        userRegisterData: {
          name: '',
          phone: '',
          password: '',
          confirmPassword: null
        },
        loading: false,
        // 1 - login In, 2 - registration
        isProcessAuth: 1,
        authTitle: 'Login In',
        userLoginInFromForm: {
          phone: '',
          password: ''
        },
        userRegisterFromForm: {
          phone: '',
          password: ''
        }
      }
    },
    validations () {
      return {
        userLoginInData: {
          phoneLogin: { required, numeric, minLength: minLength(4), maxLength: maxLength(10) },
          passwordLogin: { required, minLength: minLength(4), maxLength: maxLength(20) }
        },
        userRegisterData: {
          name: { required, minLength: minLength(2), maxLength: maxLength(20) },
          password: { required, minLength: minLength(4), maxLength: maxLength(20) },
          confirmPassword: { required, sameAs: sameAs(this.userRegisterData.password) },
          email: { required, email },
          phone: { required, numeric, minLength: minLength(4), maxLength: maxLength(10) }
        }
      }
    },
    methods: {
      checkErrorLoginPhone () {
        return this.v$.userLoginInData.phoneLogin?.$error
      },
      checkErrorLoginPassword () {
        return this.v$.userLoginInData.passwordLogin?.$error
      },
      checkErrorRegName () {
        return this.v$.userRegisterData.name?.$error
      },
      checkErrorRegPhone () {
        return this.v$.userRegisterData.phone?.$error
      },
      checkErrorRegPassword () {
        return this.v$.userRegisterData.password?.$error
      },
      checkErrorRegConfirm () {
        return this.v$.userRegisterData.confirmPassword?.$error
      },
      closeAuth () {
        this.authStore.closeAuthModal()
        this.isProcessAuth = 1
      },
      // Режим Login In
      submitLogin () {
        console.log('submitLogin')
        if (this.loading) { return } // это логика для исключения повторной генерации события handleSubmit в момент отправления данных из формы в хранилище
        this.loading = true

        this.userLoginInFromForm.phone = this.userLoginInData.phone
        this.userLoginInFromForm.password = this.userLoginInData.password

        try {
          if (!this.authStore.getRegisterData.phone || !this.authStore.getRegisterData.password) { return }
          console.log(this.authStore.registerData)
          console.log('registerData.phone', this.authStore.registerData)
          this.authStore.isUserAuth = true
          this.clearFields()
          // if (this.authStore.registerData.phone === this.userLoginInFromForm.phone &&
          //   this.authStore.registerData.password === this.userLoginInFromForm.password) {
          //   console.log('confirm password')
          //   this.authStore.isUserAuth = true
          //   console.log(this.authStore.isUserAuth)
          // }
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = false
        }
      },
      // Режим Register
      submitRegister () {
        if (this.userRegisterData.password !== this.userRegisterData.confirm_password) { return }
        this.userRegisterFromForm.name = this.userRegisterData.name
        this.userRegisterFromForm.phone = this.userRegisterData.phone
        this.userRegisterFromForm.password = this.userRegisterData.password

        try {
          this.authStore.setRegisterData(this.userRegisterFromForm)
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = false
          this.loginStart()
        }
      },
      registerStart () {
        this.clearFields()
        this.isProcessAuth = 2
        this.authTitle = 'Register'
      },
      loginStart () {
        this.clearFields()
        this.isProcessAuth = 1
        this.authTitle = 'Login In'
      },
      clearFields () {
        this.userRegisterData.name = ''
        this.userRegisterData.phone = ''
        this.userRegisterData.password = ''
        this.userRegisterData.confirm_password = ''
        this.userLoginInData.phone = ''
        this.userLoginInData.password = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.invalidMessage{
  font-size: 12px;
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
}
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
    margin: 15px auto 0;
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
