<template>
  <section>

    <SearchForm @onSubmit="data => daySearch(data)" :data="weatherDay" v-model="search" />
    <DayCard v-if="weatherDay" :data="weatherDay"/>

    <!-- <template v-if="forecast">
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
    </template> -->

    <Loader v-if="isLoading" />

  </section>
</template>

<script>
import axios from 'axios'
import { apiKey } from '../../apiKey'
import SearchForm from '../components/SearchForm'
import Loader from '../components/Loader'
import DayCard from '../components/DayCard'

export default {
  name: 'home',
  components: {
    Loader,
    DayCard,
    SearchForm
  },
  data () {
    return {
      search: '',
      isLoading: false,
      weatherDay: null,
      error: null
    }
  },
  methods: {

    // forecastSearch () {
    //   this.isLoading = true

    //   axios
    //     .get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.search}&units=metric&APPID=${apiKey}`)
    //     .then(response => {
    //       this.isLoading = false
    //       const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    //       this.forecast = {
    //         city: response.data.city.name,
    //         timeList: response.data.list.map(e => {
    //           return {
    //             day: new Date(e.dt * 1000).getDay() - 1 === -1 ? weekDays[6] : weekDays[new Date(e.dt * 1000).getDay() - 1],
    //             hour: `${new Date(e.dt * 1000).getHours()}:00`,
    //             temp: `${Math.round(e.main.temp)}°C`,
    //             wind: e.wind,
    //             weather: { type: e.weather[0].main, description: e.weather[0].description },
    //             rain: e.rain ? `${e.rain}mm` : '0mm',
    //             snow: e.snow ? `${e.snow}mm` : '0mm'
    //           }
    //         })
    //       }
    //     })
    //     .catch(() => {
    //       this.isLoading = false
    //       this.forecast = null
    //       this.error = 'The city not exists, try again.'
    //     })
    //     .finally(() => {
    //       this.search = ''
    //       console.log(this.forecast)
    //     })
    // },

    daySearch (data) {
      this.isLoading = true

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&APPID=${apiKey}`)
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
        .catch(() => {
          this.isLoading = false
          this.weatherDay = null
          this.error = 'The city not exists, try again.'
        })
        .finally(() => {
          this.search = ''
          console.log(this.weatherDay)
        })
    }
  }
}
</script>
