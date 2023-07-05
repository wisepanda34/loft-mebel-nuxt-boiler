
<template>
  <section class='cards'>
    <div class='container'>
      <div class='cards__wrapper'>
        <OneCard :isBtnShow="isBtnShow" v-for="item in products" :key="item.id" :item="item"/>
      </div>
    </div>
  </section>
</template>

<script>
import OneCard from "@/components/OneCard.vue"
import {mapGetters} from "vuex";
export default {
  name: "Cards",
  components: {OneCard},
  data(){
    return {
      isBtnShow: true
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getProducts'
    })
  },
}
</script>


<style lang="scss" scoped>
.cards{
  &__wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px 0 20px 0;
  }
}
@media (max-width: 1120px) {
  .cards {
    &__wrapper {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (max-width: 830px) {
  .cards {
    &__wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 550px) {
  .cards {
    &__wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>