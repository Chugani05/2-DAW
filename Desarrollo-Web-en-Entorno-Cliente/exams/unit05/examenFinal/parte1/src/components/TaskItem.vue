<script setup lang="ts">
const prop = defineProps (['id', 'title', 'description', 'status'])
const emit = defineEmits(['delete'])
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="d-flex justify-content-between">
        <div>
          <button :disabled="status == 'pending'" class="btn btn-info">←</button>
          <button :disabled="status == 'completed'" class="btn btn-info">→</button>
        </div>
        <div>
          <button @click="$emit('delete')" class="btn btn-danger">X</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
