<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import TaskForm from './TaskForm.vue';
import TaskList from './TaskList.vue';
import type { Task } from '@/components/classes/Task'

const defaultTasksPending = [
  {
    id: Date.now(),
    title: 'Tarea 1',
    description: 'Descripción de la tarea 1',
    status: 'pendiente',
  },
  {
    id: Date.now() + 1,
    title: 'Tarea 2',
    description: 'Descripción de la tarea 2',
    status: 'pendiente',
  },
]

const defaultTasksInProgress = [
  {
    id: Date.now() + 2,
    title: 'Tarea 3',
    description: 'Descripción de la tarea 3',
    status: 'en progreso',
  },
  {
    id: Date.now() + 3,
    title: 'Tarea 4',
    description: 'Descripción de la tarea 4',
    status: 'en progreso',
  },
]

const defaultTasksCompleted = [
  {
    id: Date.now() + 4,
    title: 'Tarea 5',
    description: 'Descripción de la tarea 5',
    status: 'completado',
  },
  {
    id: Date.now() + 5,
    title: 'Tarea 6',
    description: 'Descripción de la tarea 6',
    status: 'completado',
  },
]

// declaración de tasks con reactive
const tasks = reactive({
  pending: [] as Array<{ id: number; title: string; description: string; status: string }>,
  inProgress: [] as Array<{ id: number; title: string; description: string; status: string }>,
  completed: [] as Array<{ id: number; title: string; description: string; status: string }>,
})

// función que añade una nueva tarea al estado pending
function addNewTask (task: Task) {
  tasks.pending.push(task)
  updateLocalStorage()
}

// función que elimina una tarea filtrando aquellas cuya id no coincide con la proporcionada (error)
function deleteTask (task: Task, status: string) {
  if (status === 'pending') {
    tasks.pending = tasks.pending.filter(t => t.id !== task.id);
  } else if (status === 'inProgress') {
    tasks.inProgress = tasks.inProgress.filter(t => t.id !== task.id);
  } else if (status === 'completed') {
    tasks.completed = tasks.completed.filter(t => t.id !== task.id);
  }
  updateLocalStorage();
}

// función que guarda las tareas en el localStorage
function updateLocalStorage() {
  localStorage.setItem('tasksPending', JSON.stringify(tasks.pending))
  localStorage.setItem('tasksInProgress', JSON.stringify(tasks.inProgress))
  localStorage.setItem('tasksCompleted', JSON.stringify(tasks.completed))
}

// carga de datos al montar el componente
onMounted(() => {
  if (!localStorage.getItem('tasksPending')) {
    localStorage.setItem('tasksPending', JSON.stringify(defaultTasksPending))
    localStorage.setItem('tasksInProgress', JSON.stringify(defaultTasksInProgress))
    localStorage.setItem('tasksCompleted', JSON.stringify(defaultTasksCompleted))
  }

  tasks.pending = JSON.parse(localStorage.getItem('tasksPending') || '[]')
  tasks.inProgress = JSON.parse(localStorage.getItem('tasksInProgress') || '[]')
  tasks.completed = JSON.parse(localStorage.getItem('tasksCompleted') || '[]')
})
</script>

<template>
  <div class="kanban-board container">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <TaskForm @adding-task="addNewTask"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0">
          <div class="card-header text-center bg-primary text-white">
            <h2>Pendiente</h2>
          </div>
          <TaskList :tasks="tasks.pending" status="pending" @removing-task="deleteTask"/>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0">
          <div class="card-header text-center bg-warning text-dark">
            <h2>En curso</h2>
          </div>
          <TaskList :tasks="tasks.inProgress" status="inprogress" @removing-task="deleteTask"/>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0">
          <div class="card-header text-center bg-success text-white">
            <h2>Terminado</h2>
          </div>
          <TaskList :tasks="tasks.completed" status="completed" @removing-task="deleteTask"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kanban-board {
  width: 80vw; /* Ocupa el 80% del ancho de la pantalla */
  max-width: 1200px;
  margin: 0 auto; /* Centra el tablero horizontalmente */
}

.card {
  margin-bottom: 20px; /* Espacio entre las tarjetas */
}
</style>
