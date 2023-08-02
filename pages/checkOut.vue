<template>
  <div class="checkOut">
    <div class="checkOut__wrapper">
      <h1 class="checkOut__title center">Placing an orders</h1>

      <form
        class="checkOut__form form"
        :class="{ 'disabled_class': loading }"
        @submit.prevent="handleSubmitOrder"
      >
        <div class="checkOut__block">
          <h3 class="checkOut__form_subtitle">1 Your contact details</h3>
          <div class="checkOut__form_grid">
            <div
              v-for="(field, i) in Object.keys(userData)"
              :key="i"
              :class="`checkOut__form_grid_${field}`"
            >
              <label :for="`input_${field}`">{{ field }}
                <my-input
                  v-model="userData[field]"
                  class="checkOut__form_input input"
                  :name="`input_${field}`"
                />
              </label>
            </div>
          </div>
        </div>

        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="checkOut__block"
        >
          <h3 class="checkOut__form_subtitle">{{ index+2 }} {{ block.title }}</h3>
          <div :class="`checkOut__form_${block.type}`">
            <label
              v-for="option in block.options"
              :key="option.value"
            >
              <input
                v-model="block.selected"
                type="radio"
                :value="option.value"
                class="checkOut__form_radio"
              >
              {{ option.label }}
            </label>
          </div>
        </div>

        <my-button
          type="submit"
          class="checkOut__form_btn btn"
          :disabled="loading"
        >
          Submit order
        </my-button>
      </form>
    </div>
  </div>
</template>

<script>
  import MyInput from '~/components/UI/MyInput.vue'
  import MyButton from '~/components/UI/MyButton.vue'
  import { useCartList } from '~/stores/cartList'
  import { useUser } from '~/stores/user'
  import { useOrders } from '~/stores/orders'
  import { useModal } from '~/stores/modal'

  export default {
    name: 'CheckOut',
    components: { MyButton, MyInput },
    data () {
      return {
        userData: { name: '', surname: '', email: '', phone: '' },
        loading: false,
        blocks: [
          {
            title: 'Delivery',
            type: 'delivery',
            options: [
              { label: 'pickup', value: 'pickup' },
              { label: 'delivery by our company', value: 'company' },
              { label: 'delivery by FedEX', value: 'FedEX' }
            ],
            selected: 'pickup'
          },
          {
            title: 'Payment',
            type: 'payment',
            options: [
              { label: 'bank transfer', value: 'bank transfer' },
              { label: 'cash payment', value: 'cash payment' },
              { label: 'credit', value: 'credit' },
              { label: 'leasing', value: 'leasing' }
            ],
            selected: 'bank transfer'
          }
        ],
        // модель ожидаемого объекта заказа
        order: {
          customer: { name: '', surname: '', email: '', phone: '', deliveryOrder: '', paymentOrder: '' },
          orderId: null,
          orderProducts: []
        }
      }
    },
    setup () {
      try {
        const userStore = useUser()
        const ordersStore = useOrders()
        const cartListStore = useCartList()
        const modalStore = useModal()
        const orders = ordersStore.orders
        const user = userStore.userData
        const cartList = cartListStore.cartList
        const modalTexts = modalStore.modalTexts
        return { userStore, user, orders, ordersStore, cartList, cartListStore, modalTexts, modalStore }
      } catch (error) {
        console.error('checkOut setup error', error)
      }
    },
    methods: {
      handleSubmitOrder () {
        if (this.loading) return // это логика для исключения повторной генерации события handleSubmit в момент отправления данных из формы в хранилище
        this.loading = true

        this.order.customer.name = this.userData.name
        this.order.customer.surname = this.userData.surname
        this.order.customer.email = this.userData.email
        this.order.customer.phone = this.userData.phone
        this.order.customer.deliveryOrder = this.blocks[0].selected
        this.order.customer.paymentOrder = this.blocks[1].selected
        this.order.orderId = Date.now()
        this.order.orderProducts = this.cartList
        console.log('newOrder', this.order)

        try {
          this.ordersStore.addNewOrder(this.order)
          this.cartListStore.clearCartList()
          this.modalStore.openVoiceModal('your order has been placed and sent for processing, we will contact you')
          this.$router.go(-1)
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = false
        }
      }
    },
    mounted () {
      const getUserDataKeys = Object.keys(this.userStore.userData)// массив, включающий keys объекта getUserData
      const thisUserDataKeys = Object.keys(this.userData)// массив полей из шаблона, которые мы хотим вывести на экран

      // ниже логика для вывода тех полей в форме, которые указаны в userData()
      getUserDataKeys.forEach(key => { // перебираем массив
        if (thisUserDataKeys.includes(key)) { // ищем совпадение по ключу
          const userValue = this.user[key] // значение ложим в переменную
          if (userValue) { // если значение не пустое
            this.userData[key] = userValue // то ложим это значение в локальнный объект по ключу
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
.checkOut{
  &__wrapper{
    display: flex;
    flex-direction: column;
    padding: 3% 0;
  }
  &__form{

    &__subtitle{
      margin: 30px 0 40px 0;
    }
    &_grid{
      padding: 20px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    &_input{
      width: 100%;
      height: 38px;
      color: #686868;
    }
    &_delivery, &_payment{
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px 0 30px;
    }
    &_btn{
      width: 150px;
      height: 50px;
      margin: 30px auto;
    }
  }
}
@media (max-width: 576px) {
  .checkOut{
    &__title{
      font-size: 20px;
    }
    &__form{
      &_subtitle{
        font-size: 16px;
      }
      &_grid{
        grid-template-columns: 1fr;
        gap: 10px;
      }
    }
  }
}
</style>
