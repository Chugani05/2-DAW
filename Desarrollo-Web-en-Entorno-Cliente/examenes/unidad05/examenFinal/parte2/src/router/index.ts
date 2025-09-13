import { createRouter, createWebHistory } from 'vue-router'
import CalendarView from '@/views/CalendarView.vue'
import GestionView from '../views/GestionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CalendarView,
    },
    {
      path: '/gestion',
      name: 'gestion',
      component: GestionView,
    },
  ],
})

export default router
