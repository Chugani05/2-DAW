<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import CalendarDayComp from '../components/CalendarDayComp.vue';
import { useStore } from '@/stores/calendar';
import { useCalendar } from '../composables/useCalendar';
import type { Day } from '@/components/classes/day'

const dayMonth = ref<Day[]>([])
const store = useStore();
const { generateCalendar, filterEventsByMonth } = useCalendar();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = ref(store.selectedMonth);

const changeMonth = (month: number) => {
  store.setSelectedMonth(month);
};

const calendarDays = computed(() => {
  const days = generateCalendar.value;
  
  return days.map(day => ({
    ...day,
    event: filterEventsByMonth(store.selectedMonth).find(e => {
      const eventDate = new Date(e.date);
      return eventDate.getDate() === day.date.getDate() &&
             eventDate.getMonth() === day.date.getMonth() &&
             eventDate.getFullYear() === day.date.getFullYear();
    }),
  }));
});

onMounted(() => {
  store.loadInitialData();
});
</script>

<template>
  <div class="container mt-4">
    <div class="row mb-3">
      <div class="col">
        <label for="monthSelect" class="form-label">{{ $t('selectMonth') }}</label>
        <select id="monthSelect" class="form-select" v-model="month" @change="changeMonth(month)">
          <option v-for="(monthName, index) in months" :key="index" :value="index">{{ monthName }}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-2" v-for="(day, index) in calendarDays" :key="index">
        <CalendarDayComp :day="day" :event="day.event" :holiday="day.holiday" />
      </div>
    </div>
  </div>
</template>
