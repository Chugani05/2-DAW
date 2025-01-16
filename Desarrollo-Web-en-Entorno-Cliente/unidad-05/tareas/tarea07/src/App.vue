<template>
  <div>
    <header class="bg-dark text-white text-center py-3">
      <h1>League of Legends Champions</h1>
    </header>
    <main class="container mt-4">
      <div class="mb-4">
        <h2 class="text-center">Selecciona un campeón</h2>
        <ul class="list-group">
          <li
            v-for="champion in champions"
            :key="champion.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ champion.name }} ({{ champion.role }})
            <button class="btn btn-primary btn-sm" @click="selectChampion(champion)">
              Ver detalles
            </button>
          </li>
        </ul>
      </div>

      <div v-if="selectedChampion.id" class="card">
        <div class="card-body">
          <h2 class="card-title text-center">{{ selectedChampion.name }}</h2>
          <p class="card-text"><strong>Rol:</strong> {{ selectedChampion.role }}</p>
          <p class="card-text"><strong>Vida:</strong> {{ selectedChampion.stats.health }}</p>
          <p class="card-text"><strong>Ataque:</strong> {{ selectedChampion.stats.attack }}</p>
          <p class="card-text"><strong>Velocidad:</strong> {{ selectedChampion.stats.speed }}</p>
          <button class="btn btn-success w-100 mt-3" @click="gainExperience">
            Ganar experiencia
          </button>
          <div class="alert alert-info mt-3" role="alert">
            <strong>Nivel de poder:</strong> {{ powerLevel }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useChampionStore } from './stores/useChampionStore';

export default defineComponent({
  setup() {
    const store = useChampionStore();

    watch(
      () => store.powerLevel,
      (newPowerLevel, oldPowerLevel) => {
        if (newPowerLevel > oldPowerLevel) {
          alert('¡Nivel de poder incrementado!');
        }
      }
    );

    return {
      champions: store.champions,
      selectedChampion: store.selectedChampion,
      experience: store.experience,
      selectChampion: store.selectChampion,
      gainExperience: store.gainExperience,
      powerLevel: store.powerLevel,
    };
  },
});
</script>
