<template>
  <div id="app">
    <h1>Lista de Tareas</h1>
    <form >
      <input placeholder="Nombre de la tarea" required />
      <input  type="date" required />
      <button type="submit">Agregar Tarea</button>
    </form>

    <ul>
      <li v-for …….>
        <span :class="{ completed: task.completed }">{{ task.name }} - Fecha límite: {{ task.deadline }}</span>
        <button @click="toggleComplete(index)">
          {{ task.completed ? 'Desmarcar' : 'Completar' }}
        </button>
        <button @click="deleteTask(index)">Eliminar</button>
      </li>
    </ul>

    <p>Total de tareas pendientes: {{ pendingTasksCount }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// Lista reactiva de tareas


// Datos para la nueva tarea


// Agregar una nueva tarea
const addTask = () => {
  if (newTaskName.value.trim() && newTaskDeadline.value) {
    tasks.push({
      name: newTaskName.value,
      deadline: newTaskDeadline.value,
      completed: false,
    });
    newTaskName.value = '';
    newTaskDeadline.value = '';
  }
};

// Cambiar el estado de completado de una tarea
const toggleComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
};

// Eliminar una tarea de la lista
const deleteTask = (index) => {
  tasks.splice(index, 1);
};

// Contar tareas pendientes
const pendingTasksCount = computed(() => tasks.filter((task) => !task.completed).length);
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>