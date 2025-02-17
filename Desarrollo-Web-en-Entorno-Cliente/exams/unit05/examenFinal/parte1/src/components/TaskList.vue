<script setup lang="ts">
import TaskItem from './TaskItem.vue';

const { tasks } = defineProps(['tasks'])

const emit = defineEmits(['deletingTask'])
</script>

<template>
  <TaskItem v-for="task in tasks"
  :id="task.id"
  :title="task.title"
  :description="task.description"
  :status="task.status"
  @delete="$emit('deletingTask', task)"
  />
</template>

<style scoped></style>
