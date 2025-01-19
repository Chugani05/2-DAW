import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import UserProfile from '@/views/UserProfile.vue'
import Shop from '@/views/Shop.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/profile', component: UserProfile },
  { path: '/shop', component: Shop },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!sessionStorage.getItem('authToken')
  if (!isAuthenticated) {
    if (to.path !== '/login' && to.path !== '/register') {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
