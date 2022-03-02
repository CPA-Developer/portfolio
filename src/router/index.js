import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '@/components/Profile.vue'
import About from '@/components/About.vue'
import Interest from '@/components/Interest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/interest',
    name: 'interest',
    component: Interest
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router
