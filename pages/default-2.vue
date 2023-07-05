<template>
  <div class="page page-default-second">
    <button @click="createErrorMessage">create error</button>
    <ExampleMain />
  </div>
</template>

<script setup>
  // definePageMeta({
  //   middleware: 'redirect-me'
  // })
  const createErrorMessage = () => {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }

</script>
