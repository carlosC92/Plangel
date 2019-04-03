import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HowWork from './views/HowWork.vue'
import Events from './views/Events.vue'
import ContactUs from '@/views/ContactUs.vue'
import Event from '@/views/Event.vue'

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
      path:'/howWork',
      name: 'howwork',
      component: HowWork
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/event/:id',
      name: 'event',
      component: Event
    },
    {
      path: '/contactUs',
      name: 'contactus',
      component: ContactUs
    }
     
  ]
})
