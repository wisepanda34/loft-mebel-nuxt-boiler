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
          <div v-for="(field, i) in Object.values(userLoginInData)" :key="i">
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
              @click="field.show = !field.show"
            >qwe</span>
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
          >
            <label :for="field.name">{{ field.name }}</label>
            <my-input
              v-model="field.value"
              class="auth__input"
              :class="{
                'inputError': v$?.userRegisterData[Object.keys(userRegisterData)[i]].value?.$error,
                'inputValid': !v$?.userRegisterData[Object.keys(userRegisterData)[i]].value?.$invalid
              }"
              :type="field.type"
              :name="field.name"
              :placeholder="field.placeholder"
              @blur="v$?.userRegisterData[Object.keys(userRegisterData)[i]].value?.$touch()"
            />
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
              number,
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
              number,
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
        // if (this.v$.$invalid) { return }
        if (this.loading) { return } // это логика для исключения повторной генерации события handleSubmit в момент отправления данных из формы в хранилище
        this.loading = true
        console.log('submitLogin')
        console.log(this.getRegisterData)

        if (this.getRegisterData.phone === this.userLoginInData.phone.value && this.getRegisterData.password === this.userLoginInData.password.value) {
          console.log('===')
          this.authStore.isUserAuth = true
          this.loading = false
          alert('you have came in')
          this.clearFields()
          this.closeAuthModal()
        }
      },
      // Режим Register
      submitRegister () {
        console.log('submitRegister')
        // if (this.v$.$invalid) {
        //   return
        // }
        console.log('start')
        if (this.loading) { return } // это логика для исключения повторной генерации события handleSubmit в момент отправления данных из формы в хранилище
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
