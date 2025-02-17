<script setup lang="ts">
import { useStore } from '@/stores/calendar';
import EventFormComp from '../components/EventFormComp.vue';

const store = useStore();

const deleteEvent = (index: number) => {
  store.removeEvent(index);
};
</script>

<template>
  <div class="gestion-view">
    <h1>{{ $t("manageEvents") }}</h1>
    <EventFormComp />
    <div class="event-list">
      <div v-for="(event, index) in store.events" :key="index" class="event-item">
        <span>{{ event.name }} - {{ event.date }}</span>
        <button @click="deleteEvent(index)">Delete</button>
      </div>
    </div>
  </div>
</template>
