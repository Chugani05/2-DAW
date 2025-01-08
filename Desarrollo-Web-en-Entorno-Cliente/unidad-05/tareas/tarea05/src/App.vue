<template>
  <div id="app">
    <CrimeScene>
      <template v-slot:default>
        <p>Marcos abrió la puerta de la habitación 402 tras tocar dos veces sin respuesta. Al entrar, un olor metálico lo golpeó. Al rodear la cama, lo vio: el huésped estaba en el suelo, inmóvil, con los ojos abiertos y un charco oscuro bajo su cabeza.</p>
        <p>El carrito de limpieza tembló al soltarlo. Marcos retrocedió, tragando en seco.</p>
        <p>—Seguridad... —murmuró con la voz rota, buscando su radio mientras el silencio de la habitación lo envolvía.</p>
        <ClueList :clues="clues" @toggle-clue="toggleClue" />
        <DialogueBox>
          <template v-slot:header>
            <h2>Interrogatorio</h2>
          </template>
          <template v-slot:content>
            <p><strong>Detective:</strong> ¿Qué viste en la escena del crimen?</p>
            <p><strong>Testigo:</strong> No pude ver nada, pero escuché un vaso romperse.</p>
            <p><strong>Detective:</strong> ¿Te percataste de algo más?</p>
            <p><strong>Testigo:</strong> La verdad es que no me percaté de nada más, siento no ser de mucha ayuda.</p>
          </template>
          <template v-slot:footer>
            <button class="btn btn-primary" @click="resolveCase">Resolver el caso</button>
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
        { text: 'Unas huellas', importance: 80 },
        { text: 'Un vaso roto', importance: 70 },
        { text: 'Un sobre sospechoso', importance: 90 },
        { text: 'Un testigo', importance: 50 },
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
      // Filtrar pistas importantes
      const importantClues = this.clues.filter(clue => clue.importance > 60);
      const selectedImportantClues = this.selectedClues.filter(clue => clue.importance > 60);
        
      // Calcular el porcentaje de pistas importantes seleccionadas
      const percentage = (selectedImportantClues.length / importantClues.length) * 100;
        
      if (percentage > 60) {
        // Crear mensaje con las pistas principales seleccionadas y su importancia
        const cluesText = selectedImportantClues
          .map(clue => `- ${clue.text} (Importancia: ${clue.importance}%)`)
          .join('\n');
        alert(`¡Enhorabuena! Has resuelto el caso.\n\nHaz resuelto el caso con las siguientes pistas:\n${cluesText}`);
        this.resetGame();
      } else {
        alert('No has acertado, inténtalo de nuevo');
        this.resetGame();
      }
    },
    resetGame() {
      location.reload()
    },
  },
});
</script>