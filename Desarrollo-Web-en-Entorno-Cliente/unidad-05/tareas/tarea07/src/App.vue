<template>
  <div>
    <header class="bg-dark text-white text-center py-3">
      <h1>League of Legends Champions</h1>
    </header>
    <main class="container mt-4">
      <div class="mb-4" v-if="store.selectedChampion.id == 0">
        <h2 class="text-center">Selecciona un campeón</h2>
        <ul class="list-group">
          <li
            v-for="champion in store.champions"
            :key="champion.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ champion.name }} ({{ champion.role }})
            <button class="btn btn-primary btn-sm" @click="store.selectChampion(champion)">
              Ver detalles
            </button>
          </li>
        </ul>
      </div>
      <ChampionDetail :champion="store.selectedChampion" v-if="store.selectedChampion.id != 0" :power="store.power" :experience="store.experience">
        <button class="btn btn-success w-100 mt-3" @click="store.gainExperience">
          Ganar experiencia
        </button>
      </ChampionDetail>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { championStore } from './stores/championStore'
import ChampionDetail from '../src/components/ChampionDetail.vue'

const store = championStore()
</script>
