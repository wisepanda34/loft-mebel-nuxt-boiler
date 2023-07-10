<template>
  <section class="profile">
    <div class="profile__wrapper">
      <div class="profile__personal ">
        <h4>Personal data</h4>

        <!--          <Form @submit="onSubmit">-->

        <!--            <p><field type="email" name="email" :rules="validateEmail"/></p>-->
        <!--            <ErrorMessage name="email" />-->

        <!--           <p> <field type="text" name="nameUser" :rules="validateUserName"/></p>-->
        <!--            <ErrorMessage name="nameUser" />-->

        <!--            <button>Sign up for newsletter</button>-->
        <!--          </Form>-->

        <form
          class="profile__form"
          :class="{
            'disabled_class': loading
          }"
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

      <!--      <div class="profile__orders">-->
      <!--        <h4>My orders</h4>-->

      <!--        <Vue3EasyDataTable-->
      <!--          class="dataTable"-->
      <!--          :headers="headers"-->
      <!--          :items="tableItems"-->
      <!--          border-cell-->
      <!--        />-->

      <!--        <div class="profile__orders-btn">See all</div>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<script>
  import MyInput from '~/components/UI/MyInput.vue'
  import MyButton from '~/components/UI/MyButton.vue'
  import Vue3EasyDataTable from 'vue3-easy-data-table'
  import { useUser } from '~/stores/user'

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
          { text: '#', value: 'number', fixed: true, width: 30 },
          { text: 'Product', value: 'product', fixed: true },
          { text: 'Kind', value: 'kindProduct' },
          { text: 'Date', value: 'date' },
          { text: 'ID order', value: 'id' },
          { text: 'Amount', value: 'amount', width: 50 },
          { text: 'Price', value: 'price', width: 50 },
          { text: 'Status', value: 'status' }
        ],
        tableItems: []
      }
    },
    setup () {
      const userStore = useUser()
      const userData = userStore.userData
      return { userStore, userData }
    },
    computed: {
      // ...mapGetters({
      //   getUserData: 'user/getUserData',
      //   getOrders: 'orders/getOrders'
      // })
    },
    methods: {
      // ...mapActions({
      //   updateUserData: 'user/updateUserData'
      // }),
      getRandomStatus () {
        const statuses = ['process', 'canceled', 'delivered', 'paid']
        const randomIndex = Math.floor(Math.random() * statuses.length)
        return statuses[randomIndex]
      },
      // это логика для исключения повторной генерации события handleSubmit
      // в момент отправления данных из формы в хранилище
      async handleSubmit () {
        if (this.loading) return
        this.loading = true
        try {
          await this.userStore.updateUserData(this.userInfo)
          // this.setStorage(this.userData)
        } catch (e) {
          console.error('Profile handleSubmit error', e)
          console.log(e)
        } finally {
          this.loading = false
        }
      }
      // функция отправки данных в localStorage
      // setStorage (val) {
      //   this.$root.userData = val // Передаем данные в корневой компонент
      //   localStorage.setItem('userDataStorage', JSON.stringify(val))
      // }
    // onSubmit(values) {
    //   console.log(JSON.stringify(values, null, 2));
    // },
    // validateEmail(value) {
    //   // if the field is empty
    //   if (!value) {
    //
    //     console.log('value is empty')
    //
    //     return 'This field is required';
    //   }
    //   // if the field is not a valid email
    //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //   if (!regex.test(value)) {
    //     console.log('value is an incorrect')
    //     return 'This field must be a valid email';
    //   }
    //   // All is good
    //   console.log('All is good')
    //   return true;
    // },
    // validateUserName(value) {
    //   // if the field is empty
    //   if (!value) {
    //
    //     console.log('This field is required')
    //
    //     return 'This field is required';
    //   }
    //   // if the field is not a valid userName
    //   const regex = /^[a-zA-Z0-9_-]{3,16}$/i;
    //
    //   if (!regex.test(value)) {
    //     console.log('value is an incorrect')
    //     return 'This field must be a valid userName';
    //   }
    //   // All is good
    //   console.log('All is good')
    //   return true;
    // },
    },
    mounted () {
      // преобразование данных из геттера getUserData в массив,
      // который перебирается и копирует значения в объект userData.
      Object.keys(this.userData).forEach(key => {
        const userValue = this.userData[key]
        if (userValue) {
          this.userInfo[key] = userValue
        }
      })

      // let i = 1
      // this.tableItems = this.getOrders.flatMap(order =>
      //   order.orderProducts.map((product) => ({
      //     number: i++,
      //     product: product.titleCard,
      //     kindProduct: product.kindProduct,
      //     price: product.price,
      //     amount: product.amount,
      //     id: order.orderId,
      //     date: new Date(order.orderId).toUTCString(),
      //     status: this.getRandomStatus()
      //   }))
      // )
    }
  }
</script>

<style lang="scss" scoped>
.dataTable{
  //&--easy-table-header-font-size{
  //  font-size: 16px;
  //}
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
    flex: 0 1 46%;
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
    flex: 0 1 50%;
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
      flex: 0 1 50%;
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
