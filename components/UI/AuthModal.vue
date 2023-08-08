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

      <!--  Form Log In    -->
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
          novalidate
          @submit.prevent="submitLogin"
        >
          <div
            v-for="(field, i) in Object.values(userLoginInData)"
            :key="i"
            class="auth__block"
          >
            <label :for="field.name">{{ field.name }} </label>
            <my-input
              v-model="field.value"
              class="auth__input"
              :class="{
                'inputError': v$?.userLoginInData[Object.keys(userLoginInData)[i]].value?.$error,
                'inputValid': !v$?.userLoginInData[Object.keys(userLoginInData)[i]].value?.$invalid
              }"
              :type="field.type === 'password' && !field.show ? 'password' : 'text'"
              :name="field.name"
              @blur="v$?.userLoginInData[Object.keys(userLoginInData)[i]].value?.$touch()"
            />
            <span
              v-if="field.type === 'password'"
              class="auth__eye"
              @click="field.show = !field.show"
            >
              <svg v-if="!field.show" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z" />
              </svg>
              <svg v-if="field.show" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z" />
              </svg>
            </span>
            <p
              v-for="error of v$.userLoginInData[Object.keys(userLoginInData)[i]].$errors"
              :key="error.$uid"
              class="messageError"
            >
              {{ error.$message }}
            </p>
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
          novalidate
          @submit.prevent="submitRegister"
        >
          <div
            v-for="(field, i) in Object.values(userRegisterData)"
            :key="i"
            class="auth__block"
          >
            <label :for="field.name">{{ field.name }}</label>
            <my-input
              v-model="field.value"
              class="auth__input"
              :class="{
                'inputError': v$?.userRegisterData[Object.keys(userRegisterData)[i]].value?.$error,
                'inputValid': !v$?.userRegisterData[Object.keys(userRegisterData)[i]].value?.$invalid
              }"
              :type="field.type === 'password' && !field.show ? 'password' : 'text'"
              :name="field.name"
              :placeholder="field.placeholder"
              @blur="v$?.userRegisterData[Object.keys(userRegisterData)[i]].value?.$touch()"
            />
            <span
              v-if="field.type === 'password'"
              class="auth__eye"
              @click="field.show = !field.show"
            >
              <svg v-if="!field.show" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z" />
              </svg>
              <svg v-if="field.show" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z" />
              </svg>
            </span>
            <p
              v-for="error of v$?.userRegisterData[Object.keys(userRegisterData)[i]].$errors"
              :key="error.$uid"
              class="messageError"
            >
              {{ error.$message }}
            </p>
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
  import { required, email, sameAs, minLength, maxLength, helpers } from '@vuelidate/validators'
  import { useAuth } from '~/stores/auth'
  import MyInput from '~/components/UI/MyInput.vue'
  import MyButton from '~/components/UI/MyButton.vue'
  const number = helpers.regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
  export default {
    name: 'AuthModal',
    components: { MyButton, MyInput },
    setup () {
      const v$ = useVuelidate()
      const authStore = useAuth()
      const isAuthModal = computed(() => authStore.isAuthModal)
      const getRegisterData = computed(() => authStore.getRegisterData)
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
          phoneLogin: {
            name: 'Phone',
            type: 'text',
            value: ''
          },
          passwordLogin: {
            name: 'Password',
            type: 'password',
            value: ''
          }
        },
        userRegisterData: {
          name: {
            name: 'Name',
            type: 'text',
            placeholder: '4-20 characters',
            value: ''
          },
          phone: {
            name: 'Phone',
            type: 'text',
            placeholder: 'phone number',
            value: ''
          },
          password: {
            name: 'Password',
            type: 'password',
            placeholder: '4-12 characters',
            value: ''
          },
          confirmPassword: {
            name: 'Confirm password',
            type: 'password',
            placeholder: 'repeat password',
            value: ''
          }
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
          phoneLogin: {
            value: {
              required,
              // numeric,
              number: helpers.withMessage('This is not phone', number),
              minLength: minLength(4),
              maxLength: maxLength(20)
            }
          },
          passwordLogin: {
            value: { required }
          }
        },
        userRegisterData: {
          name: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          },
          password: {
            value: { required, minLength: minLength(4), maxLength: maxLength(20) }
          },
          confirmPassword: {
            value: { required, sameAsPassword: sameAs(this.userRegisterData.password.value) }
          },
          email: {
            value: { required, email }
          },
          phone: {
            value: {
              required,
              // numeric,
              number: helpers.withMessage('This is not phone', number),
              minLength: minLength(4),
              maxLength: maxLength(10)
            }
          }
        }
      }
    },
    methods: {
      closeAuth () {
        this.authStore.closeAuthModal()
        this.isProcessAuth = 1
      },
      // Режим Login In
      submitLogin () {
        if (this.loading) { return } // это логика для исключения повторной генерации события handleSubmit в момент отправления данных из формы в хранилище
        this.loading = true
        this.authStore.isUserAuth = true
        this.loading = false
        console.log(this.authStore.isUserAuth, this.loading)

        console.log(this.getRegisterData)

        if (this.getRegisterData.phone === this.userLoginInData.phone.value && this.getRegisterData.password === this.userLoginInData.password.value) {
          this.authStore.isUserAuth = true
          this.loading = false
          alert('you have came in')
          this.clearFields()
          this.closeAuthModal()
        } else {
          alert('login or password is not right((')
        }
      },
      // Режим Register
      submitRegister () {
        if (this.loading) { return } // логика для исключения повторной генерации события submit в момент отправления данных из формы в хранилище
        this.loading = true
        this.userRegisterFromForm.name = this.userRegisterData.name.value
        this.userRegisterFromForm.phone = this.userRegisterData.phone.value
        this.userRegisterFromForm.password = this.userRegisterData.password.value
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
        this.v$.$reset()
      }
    },
    mounted () {
      console.log(this.getRegisterData)
    }
  }
</script>

<style lang="scss" scoped>
.inputError{
  border: 1px solid red;
}
.inputValid{
  border: 1px solid green;
}
.messageError{
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
  &__block{
    position: relative;
  }
  &__input{
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    margin-top: 10px;
    padding-right: 40px;
  }
  &__eye{
    position: absolute;
    top: 45%;
    right: 12px;
    cursor: pointer;
    color: #464646;

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
