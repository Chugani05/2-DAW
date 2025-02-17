import { computed } from 'vue';
import { useStore } from '@/stores/calendar';

export function useCalendar() {
  const store = useStore();

  const generateCalendar = computed(() => {
    const firstDay = new Date(new Date().getFullYear(), store.selectedMonth, 1);
    const lastDay = new Date(new Date().getFullYear(), store.selectedMonth + 1, 0);
    const days = [];

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      days.push({
        date: new Date(new Date().getFullYear(), store.selectedMonth, day),
      });
    }
    return days;
  });

  const filterEventsByMonth = (month: number) => {
    return store.events.filter(event => new Date(event.date).getMonth() === month);
  };

  return {
    generateCalendar,
    filterEventsByMonth,
  };
}
