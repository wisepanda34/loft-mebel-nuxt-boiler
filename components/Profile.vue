<template>
  <section class="profile">
    <div class="profile__wrapper">
      <div class="profile__personal ">
        <h4>Personal data</h4>

        <form
          class="profile__form"
          :class="{
            'disabled_class': loading
          }"
          novalidate
          @submit.prevent="handleSubmitUserData"
        >
          <div class="profile__personal-grid">
            <div
              v-for="(field, i) in Object.values(userInfoData)"
              :key="i"
              :class="`profile__personal-grid-${field.name}`"
            >
              <label :for="`input_${field.name}`">{{ field.name }}
                <my-input
                  v-model="field.value"
                  :name="`input_${field.name}`"
                  @input="v$?.userInfoData[Object.keys(userInfoData)[i]]?.$touch()"
                />
              </label>

              <!--              <p-->
              <!--                v-for="error of v$?.userInfoData[Object.keys(userInfoData)[i]]?.$errors"-->
              <!--                :key="error.$uid"-->
              <!--                class="messageError profile__message-error"-->
              <!--              >-->
              <!--                {{ error.$message }}-->
              <!--              </p>-->
            </div>
          </div>

          <my-button
            type="submit"
            class="profile__personal-btn center"
            :disabled="loading"
          >
            Change
          </my-button>
        </form>
      </div>

      <div class="profile__orders">
        <h4>My orders</h4>

        <Vue3EasyDataTable
          class="dataTable"
          :headers="headers"
          :items="tableItems"
          table-class-name="customize-table"
          header-text-direction="center"
          body-text-direction="center"
          border-cell
          buttons-pagination
          alternating
        />
      </div>
    </div>
  </section>
</template>

<script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
  import Vue3EasyDataTable from 'vue3-easy-data-table'
  import MyInput from '~/components/UI/MyInput.vue'
  import MyButton from '~/components/UI/MyButton.vue'
  import 'vue3-easy-data-table/dist/style.css'
  import { useUser } from '~/stores/user'
  import { useAuth } from '~/stores/auth'
  import { useOrders } from '~/stores/orders'
  import { useRouter } from 'vue-router'
  const number = helpers.regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)

  export default {
    name: 'Profile',
    components: { MyButton, MyInput, Vue3EasyDataTable },
    middleware: 'auth',
    data () {
      return {
        userInfoData: {
          userName: {
            name: 'name',
            type: 'text',
            value: ''
          },
          surname: {
            name: 'surname',
            type: 'text',
            value: ''
          },
          email: {
            name: 'email',
            type: 'email',
            value: ''
          },
          phone: {
            name: 'phone',
            type: 'text',
            value: ''
          },
          city: {
            name: 'city',
            type: 'text',
            value: ''
          },
          street: {
            name: 'street',
            type: 'text',
            value: ''
          },
          house: {
            name: 'house',
            type: 'text',
            value: ''
          },
          flat: {
            name: 'flat',
            type: 'text',
            value: ''
          }
        },
        loading: false,
        headers: [
          { text: '#', value: 'number', fixed: true, width: 22, sortable: true },
          { text: 'Product', value: 'product', fixed: true },
          { text: 'Kind', value: 'kindProduct' },
          { text: 'Date', value: 'date', sortable: true },
          { text: 'ID order', value: 'id' },
          { text: 'Amount', value: 'amount', width: 50, sortable: true },
          { text: 'Price', value: 'price', width: 50, sortable: true },
          { text: 'Status', value: 'status', sortable: true }
        ],
        tableItems: []
      }
    },
    setup () {
      const v$ = useVuelidate()
      const userStore = useUser()
      const ordersStore = useOrders()
      const userData = computed(() => userStore.userData)
      const auth = useAuth()
      const orders = ordersStore.orders
      const router = useRouter()
      return { userStore, userData, orders, ordersStore, v$, router, auth }
    },
    validations () {
      return {
        userInfoData: {
          userName: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          },
          surname: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          },
          email: {
            value: { required, email }
          },
          phone: {
            value: {
              required,
              number: helpers.withMessage('This is not phone', number)
            }
          },
          city: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          },
          street: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          }
        }
      }
    },
    methods: {
      getRandomStatus () {
        const statuses = ['process', 'canceled', 'delivered', 'paid']
        const randomIndex = Math.floor(Math.random() * statuses.length)
        return statuses[randomIndex]
      },
      // это логика для исключения повторной генерации события handleSubmit
      // в момент отправления данных из формы в хранилище
      handleSubmitUserData () {
        if (this.loading) {
          return
        }
        this.loading = true
        this.userStore.updateUserData(this.userInfoData)
        this.loading = false
        // this.router.push('/account')
      }
      // checkError (name) {
      //   return this.v$.userInfo[name]?.$invalid
      // }
    },
    mounted () {
      // преобразование данных из store в массив,
      // который перебирается и копирует значения в объект userData.
      // setTimeout(() => {
      //   Object.keys(this.userData).forEach((key) => {
      //     const userDataFieldValue = this.userData[key].value
      //     if (userDataFieldValue) {
      //       this.userInfoData[key].value = userDataFieldValue
      //     }
      //   })
      // }, 1000)
      Object.keys(this.userData).forEach((key) => {
        const userDataFieldValue = this.userData[key].value
        if (userDataFieldValue) {
          this.userInfoData[key].value = userDataFieldValue
        }
      })
      // вывод данных в таблицу
      let i = 1
      this.tableItems = this.orders.flatMap(order =>
        order.orderProducts.map(product => ({
          number: i++,
          product: product.titleCard,
          kindProduct: product.kindProduct,
          price: product.price,
          amount: product.amount,
          id: order.orderId,
          date: new Date(order.orderId).toUTCString(),
          status: this.getRandomStatus()
        }))
      )
    }
  }
</script>

<style lang="scss" scoped>
.dataTable{
  width: 100%;
  &--easy-table-header-font-size{
    font-size: 16px;
  }
}
.invalidMessage{
  font-size: 12px;
  color: red;
  margin: 10px 0;
}
.customize-table{
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #245462;
  --easy-table-header-background-color: lightgray;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;
}
.profile{
  &__wrapper{
    display: flex;
    flex-direction: column;

    h4{
      font-size: 16px;
      line-height: 1.2;
      color: #414141;
      text-align: left;
    }
  }
  &__personal{
    padding-bottom: 5%;

    &-grid{
      display: grid;
      grid-template-columns:1fr 1fr;
      column-gap:10px;
      row-gap: 10px;
      label{
        display: block;
        font-size: 12px;
        line-height: 1.2;
        color: #969696;
        text-align: left;
      }
      input{
        width: 100%;
        height: 38px;
        color: #686868;
        border: none;
      }
      &-name{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &-email{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &-surname{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &-phone{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &-city{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      &-street{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 5;
      }
      &-house{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      &-flat{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 5;
      }
    }
    &-btn{
      width: 101px;
      height: 40px;
      display: block;
      margin: 20px 0 0 auto;
    }
  }
  &__message-error{
    margin-top: 10px;
  }
  &__orders{
    padding-bottom: 20px;
    &-grid{
      display: grid;
      grid-template-columns: 4fr 1fr 1fr 1fr;
      grid-template-rows: 40px auto;
      grid-auto-rows: auto;
      border-collapse: collapse;

      div{
        border: 1px solid rgba(243, 243, 243, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 147.69%;
        color: #686868;

      }
    }
  }
}

.disabled_class {
  opacity: 0.5;
}
@media (max-width: 992px) {
  .profile{
    &__wrapper{
      flex-direction: column;
    }
  }
}
@media (max-width: 575px){
  .profile{
    &__personal{
      width: 100%;

      &-grid{
        display: flex;
        flex-direction: column;
        gap: 10px;

      }
      &-btn{
        width: 101px;
        height: 40px;
        display: block;
        margin: 20px 0 0 auto;
      }
    }

    &__orders{
      &-grid{
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr;
        grid-template-rows: 40px auto;
        grid-auto-rows: auto;
        border-collapse: collapse;

        div{
          border: 1px solid rgba(243, 243, 243, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          line-height: 147.69%;
          color: #686868;

        }
      }
    }
  }
}
</style>
