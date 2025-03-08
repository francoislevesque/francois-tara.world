import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Event from '../pages/Event.vue'
import Location from '../pages/Location.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    }
  ]
})

export default router
