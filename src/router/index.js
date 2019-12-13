import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Forecast from '../views/Forecast'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forecast',
    name: 'Forecast',
    component: Forecast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
