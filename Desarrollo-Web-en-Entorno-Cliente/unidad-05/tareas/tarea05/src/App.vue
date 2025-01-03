<template>
  <div id="app">
    <CrimeScene>
      <template v-slot:default>
        <ClueList :clues="clues" @toggle-clue="toggleClue" />
        <DialogueBox>
          <template v-slot:header>
            <h2>Interrogatorio</h2>
          </template>
          <template v-slot:content>
            <p>Detective: ¿Qué viste en la escena del crimen?</p>
            <p>Testigo: No pude ver nada, pero escuche un vaso romperse.</p>
            <p>Detective: ¿Te percataste de algo más?</p>
            <p>Testigo: La verdad es que no me percate de nada más, siento no ser de mucha ayuda.</p>
          </template>
          <template v-slot:footer>
            <button @click="resolveCase">Resolver el caso</button>
          </template>
        </DialogueBox>
      </template>
    </CrimeScene>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CrimeScene from './components/CrimeScene.vue';
import ClueList from './components/ClueList.vue';
import DialogueBox from './components/DialogueBox.vue';

export default defineComponent({
  components: {
    CrimeScene,
    ClueList,
    DialogueBox,
  },
  data() {
    return {
      clues: [
        { text: 'huellas', importance: 80 },
        { text: 'un vaso roto', importance: 70 },
        { text: 'un sobre sospechoso', importance: 90 },
        { text: 'un testigo', importance: 50 },
      ],
      selectedClues: [] 
    };
  },
  methods: {
    toggleClue(clue) {
      const index = this.selectedClues.indexOf(clue);
      if (index === -1) {

        this.selectedClues.push(clue);
      } else {

        this.selectedClues.splice(index, 1);
      }
    },
    resolveCase() {

      const importantClues = this.clues.filter(clue => clue.importance > 60);
      const selectedImportantClues = this.selectedClues.filter(clue => clue.importance > 60);


      const percentage = (selectedImportantClues.length / importantClues.length) * 100;

      if (percentage > 60) {
        alert('¡Enhorabuena! Has resuelto el caso');
      } else {
        alert('No has acertado, inténtalo de nuevo');
        this.resetGame();
      }
    },
    resetGame() {
      this.selectedClues = [];

    },
  },
});
</script>