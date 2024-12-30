<template>
  <CrimeSceneApp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CrimeSceneApp from '../src/components/CrimeSceneApp.vue';

export default defineComponent({
  name: 'App',
  components: {
    CrimeSceneApp,
  },
});
</script>
