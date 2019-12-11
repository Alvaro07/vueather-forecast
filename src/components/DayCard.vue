<template>
  <section class="card-day">
      <h2 class="card-day__city">{{ this.data.city }}</h2>
      <v-icon :name="weatherIcon" class="card-day__icon" />
      <p class="card-day__description">{{ this.data.weather.description }}</p>
      <h5 class="card-day__hour">{{ this.data.day }} {{ new Date().getHours() }}:{{new Date().getMinutes()}}</h5>
      <h3 class="card-day__temp">{{ this.data.temp }}</h3>

  </section>
</template>

<script>
export default {
  name: 'DayCard',
  props: ['data'],
  computed: {
    weatherIcon () {
      switch (this.data.weather.type) {
        case 'Clouds':
          return 'cloud'

        case 'Clear':
          return 'sun'

        case 'Rain':
          return 'cloud-rain'

        case 'Snow':
          return 'snowflake'

        default:
          return 'wrench'
      }
    }
  }
}
</script>

<style lang="scss" >
.card-day {
  text-align: center;

  &__city {
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    font-size: 3.8rem;
    letter-spacing: -1px;
    padding-bottom: 30px;
  }

  &__icon   {
    width: auto;
    height: 60px;
  }

  &__description {
    font-size: 1.6rem;
    padding-top: 30px;
  }

  &__hour {
    font-size: 1.6rem;
    padding-bottom: 15px;
  }

  &__temp {
    font-size: 4rem;
  }
}
</style>
