<script setup lang="ts">
import { inject } from 'vue'

const auth = inject<{ isAuthenticated: boolean }>('auth')
</script>

<template>
  <div class="container mt-5">
    <div v-if="auth?.isAuthenticated">
      <h1 class="text-center">Tienda</h1>
      <p class="text-center">Bienvenido a la tienda.</p>
    </div>
    <div v-else class="alert alert-warning text-center">
      <strong>Debes autenticarte para acceder a la tienda.</strong>
    </div>
  </div>
</template>
