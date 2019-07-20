import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HowWork from './views/HowWork.vue'
import Events from './views/Events.vue'
import ContactUs from '@/views/ContactUs.vue'
import Event from '@/views/Event.vue'
import ReserveProcess from '@/views/ReserveProcess.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AdminReservation from '@/views/AdminReservation.vue'
import Invitados from '@/views/admin/Invitados.vue'
import Asistentes from '@/views/admin/Asistentes.vue'
import CallCenter from '@/views/admin/CallCenter.vue'
import CuentaMaestra from '@/views/admin/CuentaMaestra.vue'

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
    },
    {
      path: '/reserveProcess',
      name: 'reserveProcess',
      component: ReserveProcess
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/adminReservation',
      name: 'adminReservation',
      component: AdminReservation
    },
    {
      path: '/admin/invitados',
      name: 'invitados',
      component: Invitados
    },
    {
      path: '/admin/asistentes',
      name: 'asistentes',
      component: Asistentes
    },
    {
      path: '/admin/callCenter',
      name: 'callCenter',
      component: CallCenter
    },
    {
      path: '/admin/cuentaMaestra',
      name: 'cuentaMaestra',
      component: CuentaMaestra
    }
     
  ]
})
