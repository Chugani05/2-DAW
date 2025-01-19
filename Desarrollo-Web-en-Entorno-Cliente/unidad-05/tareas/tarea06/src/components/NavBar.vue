<script setup lang="ts">
import { inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const auth = inject<{ isAuthenticated: boolean }>('auth')
const router = useRouter()
const route = useRoute()

function navigate(path: string) {
  router.push(path)
}

function isActiveRoute(path: string): boolean {
  return route.path === path
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Auth</a>
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="navigate('/shop')">Tienda</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="navigate('/profile')">Perfil</button>
          </li>
          <li class="nav-item" v-if="!isActiveRoute('/login')">
            <button class="btn btn-link nav-link" @click="navigate('/login')">Login</button>
          </li>
          <li class="nav-item" v-if="!isActiveRoute('/register')">
            <button class="btn btn-link nav-link" @click="navigate('/register')">Register</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
