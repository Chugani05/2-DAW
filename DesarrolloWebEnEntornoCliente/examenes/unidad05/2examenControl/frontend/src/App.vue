<template>
  <Navbar></Navbar>
  <!-- Semuestra la navegación de router -->
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style>
/* Estilos adicionales si se requieren */
#app {
  font-family: Arial, sans-serif;
  margin: 16px;
}
</style>
