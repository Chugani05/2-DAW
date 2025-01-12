<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = inject<{ isAuthenticated: boolean; login: (token: string) => void }>('auth')
const router = useRouter()

function validateLogin() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&_]).{8,}$/

  if (!emailRegex.test(email.value)) {
    alert('El correo no tiene un formato válido')
    return false
  }
  if (!passwordRegex.test(password.value)) {
    alert(
      'La contraseña debe tener al menos 8 caracteres, un número, una letra mayúscula y un carácter especial',
    )
    return false
  }
  return true
}

async function login() {
  if (validateLogin()) {
    const token = 'fakeToken123'
    auth?.login(token)
    router.push('/shop')
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">Inicia Sesión</h1>
        <form @submit.prevent="login" class="mt-4">
          <div class="mb-3">
            <label for="email" class="form-label">Correo</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control"
              placeholder="Introduce tu correo"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Introduce tu contraseña"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>
