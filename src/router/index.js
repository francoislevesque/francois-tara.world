import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Event from '../pages/Event.vue'
import Location from '../pages/Location.vue'
import Crossword from '../pages/Crossword.vue'
import MusicSuggestion from '../pages/MusicSuggestion.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
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
    },
    {
      path: '/crossword',
      name: 'crossword',
      component: Crossword
    },
    {
      path: '/music-suggestion',
      name: 'music-suggestion',
      component: MusicSuggestion
    }
  ]
})

export default router
