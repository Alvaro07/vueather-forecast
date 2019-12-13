<template>
  <li class="c-hour-card">
    <p>{{ data.day }}</p>
    <p>{{ data.hour }}</p>
    <p>{{ data.temp }}</p>
    <p>{{ data.wind }}</p>
    <p>{{ data.rain }}</p>
  </li>
</template>

<script>
export default {
  name: 'HourCard',
  props: ['data']
}
</script>

<style lang="scss">
.c-hour-card {
  display: flex;
  padding: 15px;
  border:1px solid $darkGrey;
}
</style>
