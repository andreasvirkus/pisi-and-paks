import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import(/* webpackChunkName: "feed" */ './views/Feed.vue')
    },
    {
      path: '/spot',
      name: 'spot',
      component: () => import(/* webpackChunkName: "spot" */ './views/Spot.vue')
    }
  ]
})
