import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gare from '../views/Gare.vue'
import Favoris from '../views/Favoris.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/gare/:id',
    name: 'gare',
    component: Gare
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: Favoris
  }
]

const router = new VueRouter({
  routes
})

export default router
