<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title text-center">{{ champion.name }}</h2>
      <div class="container text-center my-3">
        <img :src="champion.image" alt="champion image" class="img-fluid mx-auto" />
      </div>
      <p class="card-text"><strong>Rol:</strong> {{ champion.role }}</p>
      <p class="card-text"><strong>Vida:</strong> {{ champion.stats.health }}</p>
      <p class="card-text"><strong>Ataque:</strong> {{ champion.stats.attack }}</p>
      <p class="card-text"><strong>Velocidad:</strong> {{ champion.stats.speed }}</p>
      <slot></slot>
      <div class="alert alert-info mt-3" role="alert">
        <strong>Experiencia:</strong> {{ experience }}/100
      </div>
      <div class="alert alert-primary mt-3" role="alert">
        <strong>Nivel:</strong> {{ champion.level }}
      </div>
      <div class="alert alert-secondary mt-3" role="alert"><strong>Poder:</strong> {{ power }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['champion', 'power', 'experience'])
</script>
