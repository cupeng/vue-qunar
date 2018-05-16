import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home/'
import City from '@/container/City/'
import Detail from '@/container/Detail/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
