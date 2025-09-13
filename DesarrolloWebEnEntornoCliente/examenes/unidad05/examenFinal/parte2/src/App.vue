<template>
  <div id="app" class="container mt-4">
    <NavbarComp />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavbarComp from './components/NavbarComp.vue'
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
