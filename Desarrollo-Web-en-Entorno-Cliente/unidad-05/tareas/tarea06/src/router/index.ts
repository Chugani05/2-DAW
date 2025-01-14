import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import UserProfile from '../components/UserProfile.vue'
import Shop from '../components/Shop.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/profile', component: UserProfile },
  { path: '/shop', component: Shop },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!sessionStorage.getItem('authToken')
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
