<template>
  <section class="connect">
    <div class="connect__title">Connect with us</div>
    <div class="connect__wrapper">
      <form
        class="connect__form"
        @submit="handleSubmit"
      >
        <!--        =================================================    -->

        <div class="connect__form_inputs">
          <div class="connect__form_name">
            <label for="input_name">Your name
              <my-input
                v-model.trim="connectName"
                class="connect__form_input"
                name="input_name"
              />
            </label>
          </div>

          <!--        =================================================    -->
          <div class="connect__form_phone">
            <label for="input_phone">Your phone
              <my-input
                v-model.trim="connectPhone"
                class="connect__form_input connect__form_input-phone"
                name="input_phone"
                type="tel"
              />
            </label>
          </div>
        </div>

        <div class="connect__form_textarea">
          <label>Message
            <textarea
              name="textarea_message"
            />
          </label>
        </div>

        <div class="connect__form_buttons">
          <my-button
            class="connect__form_attach"
            type="file"
            multiple
          >
            Attach file
          </my-button>
          <my-button
            class="connect__form_submit"
            type="submit"
          >
            Send
          </my-button>
        </div>
      </form>

      <div class="connect__contacts">
        <ul class="connect__contacts_list">
          <li
            v-for="(link,i) in linksFooter"
            :key="i"
            class="connect__contacts_item"
          >
            <a
              :href="link.href"
              class="connect__contacts_link"
            >
              <img
                :src="`${link.src}`"
                alt="i"
              >
              <div>{{ link.value }}</div>
            </a>
          </li>
        </ul>

        <div class="connect__contacts_address">
          Boston, Lincoln avenue, 45 Lincoln center, 2 floor
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import { computed } from '@vue/composition-api'
  // import { useVuelidate } from '@vuelidate/core'
  import { required, numeric } from '@vuelidate/validators'
  import { useLinksFooter } from '~/stores/linksFooter'
  import { useClient } from '~/stores/client'
  import MyInput from '@/components/UI/MyInput.vue'
  import MyButton from '@/components/UI/MyButton.vue'

  export default {
    name: 'Connect',
    components: { MyInput, MyButton },
    setup () {
      try {
        // const v$ = useVuelidate()
        const linksFooterStore = useLinksFooter()
        const clientStore = useClient()
        const linksFooter = computed(() => linksFooterStore.linksFooter)
        return { linksFooter, linksFooterStore, clientStore }
      } catch (e) {
        console.log('error Connect setup', e)
      }
      return {}
    },
    data () {
      return {
        connectName: '',
        connectPhone: '',
        connectText: ''
      }
    },
    validations () {
      return {
        connectName: { required },
        connectPhone: { required, numeric },
        connectText: { required }
      }
    },
    methods: {
      // ...mapActions('clients',['addNewClient']),
      handleSubmit (event) {
        event.preventDefault()

        const name = event.target.elements.input_name.value
        const phone = event.target.elements.input_phone.value
        const message = event.target.elements.textarea_message.value
        const newClient = { name, phone, message }
        // Проверка валидации полей
        this.v$?.value.$touch()
        // Проверка валидности всей формы
        if (this.v$?.value.$invalid) {
          return
        }
        this.addNewClient(newClient)
        event.target.reset()
      },
      addNewClient (newClient) {
        this.clientStore.addNewClient(newClient)
      }
    }
  }
</script>

<style lang="scss" scoped>
.reqInput{
  background: rgba(250, 97, 70, 0.7);
}
.feedback{
  color: tomato;
  padding: 5px;
}
.connect{
  // min-height: 400px;
  &__title{
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    padding: 1.5rem 0;
  }
  &__wrapper{
    display: flex;
  }
  &__contacts{
    flex: 0 1 auto;
    padding: 15px 0 0 100px;

    &_list{
      display: flex;
      column-gap:37px;
      row-gap:23px;
      flex-wrap: wrap;
      padding-left: 0;
    }

    &_link{
      display: flex;
      gap:10px;
    }
    &_address{
      text-align: left;
      margin-top: 25px;
    }
  }
  &__form{
    flex: 0 1 457px;
    display: flex;
    flex-direction: column;

    &_inputs{
      display: flex;
      gap:10px;
    }
    &_input{
      display: block;
      outline: none;
      width: 207px;
      height: 38px;
      border: 1px solid #c4c4c4;
      border-radius: 3px;
    }
    &_name,&_phone,&_textarea{
      label{
        display: block;
        margin-bottom: 0.25rem;
        text-align: start;
        color: #969696;
        font-size: 12px;
        line-height: 14px;
      }
    }
    &_input-phone{
      width: 240px;
    }
    &_textarea{
      textarea{
        display: block;
        width: 100%;
        height: 142px;
        resize: none;
        outline: none;
        background: #FCFCFC;
        border: 1px solid #c4c4c4;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
        box-sizing: border-box;
        border-radius: 3px;
        padding: 10px;
      }
    }
    &_buttons{
      display: flex;
      gap: 20px;
      margin-top: 15px;
    }
    &_attach{
      width: 149px;
      height: 40px;
      background: #FFFFFF;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
      color: #414141;
      &:hover{
        background: lightgray;
      }
    }
    &_submit{
      width: 106px;
      height: 40px;
    }

  }
}

@media (max-width: 992px) {
  .connect{
    &__contacts{
      padding-left: 20px;
    }
  }
}

@media (max-width: 767px) {
  .connect{
    &__wrapper{
      flex-direction: column;
    }
    &__contacts{
      padding: 20px 0;
      &_list{
        justify-content: center;

      }
      &_address{
        text-align: center;
      }
    }
    &__form{
      flex: 1 1 auto;
      width: 100%;
      &_inputs{
        display: block;
        width: 100%;
      }
      &_input{
        width:  100%;
      }
      &_buttons{
        justify-content: center;
      }
      &_attach{
        width: 106px;
      }
    }
  }
}
</style>
