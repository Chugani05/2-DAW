<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['day', 'event', 'holiday'])
</script>

<template>
  <div class="calendar-day">
    <span class="day-number">{{ day.number }}</span>
    <div v-if="event" class="event">{{ day.event }}</div>
    <div v-if="holiday" class="holiday">{{ day.holiday }}</div>
  </div>
</template>

<style scoped>
.calendar-day {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  text-align: center;
}
.day-number {
  font-weight: bold;
}
.event, .holiday {
  margin-top: 5px;
  font-size: 0.9em;
}
</style>
