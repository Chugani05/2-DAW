<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title text-center">{{ champion.name }}</h2>
      <p class="card-text"><strong>Rol:</strong> {{ champion.role }}</p>
      <p class="card-text"><strong>Vida:</strong> {{ champion.stats.health }}</p>
      <p class="card-text"><strong>Ataque:</strong> {{ champion.stats.attack }}</p>
      <p class="card-text"><strong>Velocidad:</strong> {{ champion.stats.speed }}</p>
      <button class="btn btn-success w-100 mt-3" @click="gainExperience">Ganar experiencia</button>
      <div class="alert alert-info mt-3" role="alert">
        <strong>Nivel de poder:</strong> {{ champion.level }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['champion'])
</script>

<!-- <div class="alert alert-info mt-3" role="alert" v-if="powerLevelMessage">
      <strong>{{ powerLevelMessage }}</strong>
</div> -->
