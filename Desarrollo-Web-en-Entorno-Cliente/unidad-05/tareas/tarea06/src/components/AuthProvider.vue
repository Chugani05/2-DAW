<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue'

const isAuthenticated = ref(false)

function login(token: string) {
  sessionStorage.setItem('authToken', token)
  isAuthenticated.value = true
}

function logout() {
  sessionStorage.removeItem('authToken')
  isAuthenticated.value = false
}

onMounted(() => {
  const token = sessionStorage.getItem('authToken')
  if (token) {
    isAuthenticated.value = true
  }
})

onUnmounted(() => {
  logout()
})

provide('auth', { isAuthenticated, login, logout })
</script>

<template>
  <slot />
</template>
