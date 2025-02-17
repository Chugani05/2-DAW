<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'LoginView' }"> Login </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'RegisterView' }"> Register </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Espaciado para evitar que el contenido quede detrás del navbar -->
    <div class="mt-5 pt-3"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Ajustar el espaciado superior para el contenido dinámico */
.mt-5 {
  margin-top: 4rem; /* Ajusta el valor según la altura del navbar */
}
</style>
