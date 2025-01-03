<template>
  <div class="crime-scene">
    <h1>Escena del Crimen</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CrimeScene',
});
</script>

<style scoped>
.crime-scene {
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
}
</style>