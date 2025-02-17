<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required autocomplete="email" />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        autocomplete="current-password"
      />
      <button type="submit">Register</button>
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const email = ref('')
const password = ref('')
const errorMsg = ref('')
const authStore = useAuthStore()

const register = async () => {
  try {
    await authStore.register({
      username: username.value,
      email: email.value,
      password: password.value,
    })
  } catch (error) {
    errorMsg.value = (error as { msg: string }).msg || 'Error desconocido'
  }
}
</script>

<style scoped>
/* Add styles here */
</style>
