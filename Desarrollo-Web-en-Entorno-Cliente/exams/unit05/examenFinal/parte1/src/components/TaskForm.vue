<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const emit = defineEmits(['addingTask'])

const addTask = () => {
  if (!title.value || !description.value) {
    alert('No se puede crear una tarea sin contenido')
    return
  }
  const newTask = {
    id: Date.now(),
    title: title.value,
    description: description.value,
    status: 'pending'
  }
  emit('addingTask', newTask)
}
</script>

<template>
  <h3>Task form</h3>
  <form @submit.prevent="addTask">
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="title" placeholder="Titulo de la tarea">
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Descriptión</label>
      <div class="col-sm-10">
        <textarea class="form-control" v-model="description" placeholder="Descripción de la tarea" rows="3"></textarea>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <input class="btn btn-primary" type="submit" value="Crear tarea">
    </div>
  </form>
</template>

<style scoped></style>
