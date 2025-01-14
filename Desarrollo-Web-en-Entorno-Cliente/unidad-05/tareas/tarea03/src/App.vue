<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center">Lista de Tareas</h1>
    <form @submit.prevent="addTask" class="mb-4">
      <div class="input-group">
        <input v-model="newTaskName" class="form-control" placeholder="Nombre de la tarea" required />
        <input v-model="newTaskDeadline" type="date" class="form-control" required />
        <button type="submit" class="btn btn-primary">Agregar Tarea</button>
      </div>
    </form>

    <ul class="list-group">
      <li v-for="(task, index) in filteredTasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        <span :class="{ completed: task.completed }">{{ task.name }} - Fecha límite: {{ task.deadline }}</span>
        <div>
          <button @click="toggleComplete(index)" class="btn btn-sm" :class="task.completed ? 'btn-warning' : 'btn-success'">
            {{ task.completed ? 'Desmarcar' : 'Completar' }}
          </button>
          <button @click="deleteTask(index)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>

    <p class="mt-3">Total de tareas pendientes: {{ pendingTasksCount }}</p>

    <div class="btn-group mt-3">
      <button @click="toggleFilter('all')" class="btn btn-secondary">Mostrar Todas</button>
      <button @click="toggleFilter('completed')" class="btn btn-secondary">Mostrar Completadas</button>
      <button @click="toggleFilter('pending')" class="btn btn-secondary">Mostrar Pendientes</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// Lista reactiva de tareas
const tasks = reactive([]);

// Datos para la nueva tarea
const newTaskName = ref('');
const newTaskDeadline = ref('');
const filter = ref('all'); // Estado del filtro

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

// Filtrar tareas según el estado
const filteredTasks = computed(() => {
  switch (filter.value) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'pending':
      return tasks.filter(task => !task.completed);
    case 'all':
    default:
      return tasks;
  }
});

// Alternar entre mostrar tareas completadas y pendientes
const toggleFilter = (selectedFilter) => {
  filter.value = selectedFilter;
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>