<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const auth = inject<{ isAuthenticated: boolean }>('auth')
const router = useRouter()

function navigate(path: string) {
  router.push(path)
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
          <li class="nav-item" v-if="auth?.isAuthenticated">
            <button class="btn btn-link nav-link" @click="navigate('/profile')">Perfil</button>
          </li>
          <li class="nav-item" v-else>
            <button class="btn btn-link nav-link" @click="navigate('/login')">Login</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
