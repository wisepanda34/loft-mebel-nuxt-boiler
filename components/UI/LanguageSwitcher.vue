<template>
  <div>switch lang</div>
<!--  <select v-model="language">-->
<!--    <option v-for="item in locales"-->
<!--            :key="item.code"-->
<!--            :value="item.code"-->
<!--    >-->
<!--      {{item.name}}-->
<!--    </option>-->
<!--  </select>-->
</template>

<script setup>
  // import { locales, locale, setLocale } from useI18n()

  // const language = computed({
  //   get: () => locale.value,
  //   set: (value) => {
  //     setLocale(value)
  //   }
  // })

  // export default defineI18nConfig(() => ({
  // legacy: false,
  //   globalInjection: true,
  //   strategy: 'prefix_except_default',
  //   lazy: true,
  //   localDir: 'locales',
  //   locales: [
  //   {
  //     code: 'en',
  //     iso: 'en-UK',
  //     name: 'en',
  //     file: 'en.json'
  //   },
  //   {
  //     code: 'fr',
  //     name: 'fr',
  //     iso: 'fr-FR',
  //     file: 'fr.json'
  //   },
  //   {
  //     code: 'es',
  //     iso: 'es-ES',
  //     name: 'es',
  //     file: 'es.json'
  //   }
  // ],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //   fallbackLocale: 'en'
  // }
  // }))

</script>

<style>

</style>
