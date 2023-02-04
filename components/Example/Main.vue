<template>
  <div class="example">
    <div class="example__title heading heading_1">{{ $route.name }}</div>
    <div class="example__subtitle heading heading_2">Subtitle</div>
  </div>
</template>

<script>

</script>
<style scoped lang="scss">
.example {
  &__title {
    color: red;
    @include maxWidth992{
      color: blue;
    }
  }
}
</style>
