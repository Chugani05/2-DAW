<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue'
import ConnectToDB from '@/firebase/firebaseConfig.js'

const database = new ConnectToDB()
const isAuthenticated = ref(false)

function validate(email: string, password: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&_]).{8,}$/

  if (!emailRegex.test(email)) {
    alert('El correo no tiene un formato válido')
    return false
  }
  if (!passwordRegex.test(password)) {
    alert(
      'La contraseña debe tener al menos 8 caracteres, un número, una letra mayúscula y un carácter especial',
    )
    return false
  }
  return true
}

function loginWithGeneratedToken() {
  const token = Math.random().toString(36).substring(2)
  sessionStorage.setItem('authToken', token)
  isAuthenticated.value = true
}

async function createUser(data: object) {
  await database.create(data)
}

function logout() {
  sessionStorage.removeItem('authToken')
  isAuthenticated.value = false
}

// async function getUser(email: string, password: string) {
//   const user = await database.getUser(email, password)
//   provide('user', {user} )
// }

onMounted(() => {
  const token = sessionStorage.getItem('authToken')
  if (token) {
    isAuthenticated.value = true
  }
})

onUnmounted(() => {
  logout()
})

provide('auth', { isAuthenticated, loginWithGeneratedToken, logout, validate, createUser })
</script>

<template>
  <slot />
</template>
