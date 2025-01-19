<script setup lang="ts">
import { inject } from 'vue'

const auth = inject<{ logout: () => void }>('auth')
// const user = inject<any>('user')

function logout() {
  auth?.logout()
  window.location.href = '/login'
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center">Perfil de Usuario</h1>
    <div class="card mx-auto mt-4" style="max-width: 400px">
      <div class="card-body">
        <!-- <h5 class="card-title text-center">{{ user.username }}</h5>
        <p class="card-text"><strong>Email:</strong> {{ user.email }}</p> -->
        <button @click="logout" class="btn btn-danger w-100">Cerrar Sesión</button>
      </div>
    </div>
  </div>
</template>
