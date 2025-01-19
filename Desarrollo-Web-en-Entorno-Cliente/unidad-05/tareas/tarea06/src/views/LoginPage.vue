<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = inject<{
  isAuthenticated: boolean
  validate: (email: string, password: string) => boolean
  loginWithGeneratedToken: () => void
  // getUser: (email: string, password: string) => void
}>('auth')
const router = useRouter()

async function login() {
  if (auth) {
    if (auth.validate(email.value, password.value)) {
      auth.loginWithGeneratedToken()
      // auth.getUser(email.value, password.value)
      router.push('/shop')
    }
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
