<script setup lang="ts">
import AuthProvider from './components/AuthProvider.vue'
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AuthProvider>
    <div>
      <NavBar />
      <div class="container mt-4">
        <RouterView />
      </div>
    </div>
  </AuthProvider>
</template>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}
</style>
