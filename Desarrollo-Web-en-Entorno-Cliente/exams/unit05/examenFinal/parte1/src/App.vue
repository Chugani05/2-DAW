<script setup lang="ts">
import KanbanBoard from './components/KanbanBoard.vue'
</script>

<template>
  <div class="app-container">
    <h1 class="text-center fw-bold">Kanban Board</h1>
    <KanbanBoard />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-between;
  height: 100vh; /* Ocupa toda la pantalla */
  padding-top: 20px; /* Espacio superior para el título */
}

h1 {
  margin-bottom: 20px; /* Espacio entre el título y el tablero */
}
</style>
