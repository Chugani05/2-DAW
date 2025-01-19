<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const auth = inject<{
  isAuthenticated: boolean
  validate: (email: string, password: string) => boolean
  createUser: (data: object) => void
}>('auth')
const router = useRouter()

async function register() {
  if (auth) {
    if (auth.validate(email.value, password.value)) {
      const userData = {
        username: username.value,
        email: email.value,
        password: password.value,
      }
      auth.createUser(userData)
      router.push('/login')
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">Registrate</h1>
        <form @submit.prevent="register" class="mt-4">
          <div class="mb-3">
            <label for="username" class="form-label">Usuario</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="form-control"
              placeholder="Introduce tu nombre de usuario"
              required
            />
          </div>
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
          <button type="submit" class="btn btn-primary w-100">Crear Cuenta</button>
        </form>
      </div>
    </div>
  </div>
</template>
