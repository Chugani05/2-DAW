<template>
  <div class="crime-scene-app">
    <CrimeScene>
      <ClueList :clues="clues">
        <template #default="{ clue }">
          <div>
            <strong>{{ clue.description }}</strong> (Importancia: {{ clue.importance }})
          </div>
        </template>
      </ClueList>
    </CrimeScene>

    <DialogueBox>
      <template #header>
        <h3>Detective y Testigo</h3>
      </template>
      <template #content>
        <p>Detective: ¿Qué sucedió aquí?</p>
        <p>Testigo: Todo fue muy rápido. Solo recuerdo un sonido fuerte y...</p>
      </template>
      <template #footer>
        <button @click="resolveCase">Resolver el caso</button>
      </template>
    </DialogueBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClueList from './ClueList.vue';
import CrimeScene from './CrimeScene.vue';
import DialogueBox from './DialogueBox.vue';

interface Clue {
  id: number;
  description: string;
  importance: number;
}

export default defineComponent({
  name: 'CrimeSceneApp',
  components: { ClueList, CrimeScene, DialogueBox },
  data() {
    return {
      clues: [
        { id: 1, description: 'Huellas', importance: 80 },
        { id: 2, description: 'Vaso roto', importance: 60 },
        { id: 3, description: 'Sobre sospechoso', importance: 90 },
        { id: 4, description: 'Llave rota', importance: 30 },
      ] as Clue[],
    };
  },
  methods: {
    resolveCase() {
      const importantClues = this.clues.filter((clue) => clue.importance > 70);
      const selectedClues = importantClues.length;
      const totalClues = this.clues.length;

      if (selectedClues / totalClues > 0.6) {
        alert('¡Enhorabuena! Has resuelto el caso.');
      } else {
        alert('No has acertado, inténtalo de nuevo.');
        this.resetGame();
      }
    },
    resetGame() {
      this.clues = [
        { id: 1, description: 'Huellas', importance: 80 },
        { id: 2, description: 'Vaso roto', importance: 60 },
        { id: 3, description: 'Sobre sospechoso', importance: 90 },
        { id: 4, description: 'Llave rota', importance: 30 },
      ];
    },
  },
});
</script>

<style scoped>
.crime-scene-app {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
  