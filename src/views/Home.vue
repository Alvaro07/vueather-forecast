<template>
  <div class="home">
    <form @submit.prevent="daySearch">
      <input type="text" v-model="search" />
      <button>Buscar</button>
    </form>

    <template v-if="forecast">
      <h3>{{forecast.city}}</h3>
      <ul>
        <li v-for="(item, i) in forecast.timeList" :key="i">
          <ul>
            <li>{{ item.day }}</li>
            <li>{{ item.hour }}</li>
            <li>{{ item.temp }}</li>
            <li>{{ item.wind }}</li>
            <li>{{ item.rain }}</li>
          </ul>
        </li>
      </ul>
    </template>

    <div v-if="isLoading">Cargando ...</div>
     <pre>{{$data}}</pre>
  </div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { apiKey } from '../../apiKey'

export default {
  name: 'home',
  data () {
    return {
      search: '',
      isLoading: false,
      weatherDay: null,
      forecast: null
    }
  },
  methods: {
    forecastSearch () {
      this.isLoading = true

      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.search}&units=metric&APPID=${apiKey}`)
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
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
        .finally(() => {
          this.search = ''
        })
    },

    daySearch () {
      this.isLoading = true

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.search}&units=metric&APPID=${apiKey}`)
        .then(response => {
          this.isLoading = false
          const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
          const data = response.data

          this.weatherDay = {
            city: data.name,
            day: new Date(data.dt * 1000).getDay() - 1 === -1 ? weekDays[6] : weekDays[new Date(data.dt * 1000).getDay() - 1],
            hour: `${new Date(data.dt * 1000).getHours()}:00`,
            temp: `${Math.round(data.main.temp)}°C`,
            wind: data.wind,
            weather: { type: data.weather[0].main, description: data.weather[0].description },
            rain: data.rain ? `${data.rain}mm` : '0mm',
            snow: data.snow ? `${data.snow}mm` : '0mm'
          }
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
        .finally(() => {
          this.search = ''
        })
    }
  }
}
</script>
