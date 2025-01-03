<template>
  <div class="clue-list">
    <h2>Pistas encontradas:</h2>
    <ul>
      <li v-for="(clue, index) in sortedClues" :key="index">
        <input type="checkbox" :value="clue" @change="toggleClue(clue)" />
        <slot name="clue" :clue="clue">
          {{ clue.text }} (Importancia: {{ clue.importance }})
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Clue {
  text: string;
  importance: number;
}

export default defineComponent({
  name: 'ClueList',
  props: {
    clues: {
      type: Array as PropType<Clue[]>,
      required: true,
    },
  },
  computed: {
    sortedClues() {
      return this.clues.sort((a, b) => b.importance - a.importance);
    },
  },
  methods: {
    toggleClue(clue: Clue) {

      this.$emit('toggle-clue', clue);
    },
  },
});
</script>

<style scoped>
.clue-list {
  margin: 20px 0;
}
</style>