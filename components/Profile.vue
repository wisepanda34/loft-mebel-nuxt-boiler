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
          @submit.prevent="handleSubmit"
        >
          <div class="profile__personal-grid">
            <div
              v-for="(field, i) in Object.keys(userInfo)"
              :key="i"
              :class="`profile__personal-grid-${field}`"
            >
              <label :for="`input_${field}`">{{ field }}
                <my-input
                  v-model="userInfo[field]"
                  :name="`input_${field}`"
                />
                <!--                @input="`v$.userInfo.${field}.$touch()`"-->
              </label>
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

        <div class="profile__orders-btn">See all</div>
      </div>
    </div>
  </section>
</template>

<script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, minLength, maxLength, numeric } from '@vuelidate/validators'
  import Vue3EasyDataTable from 'vue3-easy-data-table'
  import MyInput from '~/components/UI/MyInput.vue'
  import MyButton from '~/components/UI/MyButton.vue'
  import 'vue3-easy-data-table/dist/style.css'
  import { useUser } from '~/stores/user'
  import { useOrders } from '~/stores/orders'

  export default {
    name: 'Profile',
    components: { MyButton, MyInput, Vue3EasyDataTable },

    data () {
      return {
        userInfo: {
          name: '',
          surname: '',
          email: '',
          phone: '',
          city: '',
          street: '',
          house: '',
          flat: ''
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
      const userData = userStore.userData
      const orders = ordersStore.orders
      return { userStore, userData, orders, ordersStore, v$ }
    },
    validations () {
      return {
        userInfo: {
          name: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          },
          surname: {
            value: { required, minLength: minLength(2), maxLength: maxLength(20) }
          },
          email: {
            value: { required, email }
          },
          phone: {
            value: { required, numeric, minLength: minLength(4), maxLength: maxLength(10) }
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
      async handleSubmit () {
        if (this.loading) {
          return
        }
        this.loading = true
        try {
          await this.userStore.updateUserData(this.userInfo)
        } catch (e) {
          console.error('Profile handleSubmit error', e)
          console.log(e)
        } finally {
          this.loading = false
        }
      },
      checkError (name) {
        return this.v$.userInfo[name]?.$invalid
      }
    },
    mounted () {
      // преобразование данных из store в массив,
      // который перебирается и копирует значения в объект userData.
      Object.keys(this.userStore.getUserData).forEach((key) => {
        const userValue = this.userStore.getUserData[key]
        if (userValue) {
          this.userInfo[key] = userValue
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
    //flex: 0 1 46%;
    padding-bottom: 5%;

    &-grid{
      display: grid;
      grid-template-columns:0.6fr 0.4fr 1fr;
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
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &-mail{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &-surname{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &-phone{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &-city{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      &-street{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-row-end: 5;
      }
      &-build{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 5;
        grid-row-end: 6;
      }
      &-apart{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 6;
      }
    }
    &-btn{
      width: 101px;
      height: 40px;
      display: block;
      margin: 20px 0 0 auto;
    }
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

      &-product{
        // grid-column: 1/2;

      }
    }
    &-btn{
      display: block;
      font-size: 12px;
      line-height: 14px;
      color: #245462;
      margin-top: 20px;
      text-align: end;
      &:hover{
        color: #4bbbdd;
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
        display: grid;
        grid-template-columns:1fr 1fr;
        column-gap:10px;
        row-gap: 10px;

        &-name{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        &-surname{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        &-mail{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 4;
        }
        &-phone{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 4;
          grid-row-end: 5;
        }
        &-city{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 5;
          grid-row-end: 6;
        }
        &-street{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 6;
          grid-row-end: 7;
        }
        &-build{
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 7;
          grid-row-end: 8;
        }
        &-apart{
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 7;
          grid-row-end: 8;
        }

      }
      &-btn{
        width: 101px;
        height: 40px;
        display: block;
        margin: 20px 0 0 auto;
      }
    }

    &__orders{
      //flex: 0 1 50%;
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

        &-product{
          // grid-column: 1/2;

        }
      }
      &-btn{
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: #245462;
        margin-top: 20px;
        text-align: end;
        &:hover{
          color: #4bbbdd;
        }
      }
    }
  }
}
</style>
