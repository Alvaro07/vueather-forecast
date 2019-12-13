<template>
  <section>

    <SearchForm
      @onSubmit="data => forecastSearch(data)"
      :data="forecast"
      v-model="search"
      :error="error"
    />

    <template v-if="forecast">
      <h3>{{forecast.city}}</h3>
      <ul>
        <HourCard v-for="(item, i) in forecast.timeList" :key="i" :data="item" />
      </ul>
    </template>

    <Loader v-if="isLoading" />

  </section>
</template>

<script>
import axios from 'axios'
import { apiKey } from '../../apiKey'
import SearchForm from '../components/SearchForm'
import Loader from '../components/Loader'
import HourCard from '../components/HourCard'

export default {
  name: 'Forecast',
  components: {
    Loader,
    SearchForm,
    HourCard
  },
  data () {
    return {
      search: '',
      isLoading: false,
      forecast: null,
      error: null
    }
  },
  created () {
    if (this.$route.params.city) this.forecastSearch(this.$route.params.city)
  },
  methods: {

    forecastSearch (data) {
      this.isLoading = true

      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&units=metric&APPID=${apiKey}`)
        .then(response => {
          this.isLoading = false
          const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

          this.forecast = {
            city: response.data.city.name,
            timeList: response.data.list.map(e => {
              return {
                day: new Date(e.dt * 1000).getDay() - 1 === -1 ? weekDays[6] : weekDays[new Date(e.dt * 1000).getDay() - 1],
                hour: `${new Date(e.dt * 1000).getHours()}:00`,
                temp: `${Math.round(e.main.temp)}°C`,
                wind: e.wind,
                weather: { type: e.weather[0].main, description: e.weather[0].description },
                rain: e.rain ? `${e.rain}mm` : '0mm',
                snow: e.snow ? `${e.snow}mm` : '0mm'
              }
            })
          }
        })
        .catch(() => {
          this.isLoading = false
          this.forecast = null
          this.error = 'The city not exists, try again.'
        })
        .finally(() => {
          this.search = ''
          console.log(this.forecast)
        })
    }
  }
}
</script>
