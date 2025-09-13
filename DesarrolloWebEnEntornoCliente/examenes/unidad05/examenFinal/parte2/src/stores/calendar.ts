import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('calendar', () => {
  const selectedMonth = ref<number>(new Date().getMonth()); // Mes seleccionado
  const events = ref<any[]>([]); // Lista de eventos

  // Acción para cambiar el mes seleccionado
  const setSelectedMonth = (month: number) => {
    selectedMonth.value = month;
  };

  // Acción para actualizar la lista de eventos
  const setEvents = (newEvents: any[]) => {
    events.value = newEvents;
  };

  // Acción para agregar un nuevo evento
  const addEvent = (event: any) => {
    events.value.push(event);
    saveToLocalStorage();
  };

  // Acción para eliminar un evento
  const removeEvent = (index: number) => {
    events.value.splice(index, 1);
    saveToLocalStorage();
  };

  // Cargar los datos iniciales desde localStorage
  const loadInitialData = () => {
    const savedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(savedEvents);
    const savedMonth = localStorage.getItem('selectedMonth');
    if (savedMonth) {
      setSelectedMonth(parseInt(savedMonth));
    }
  };

  // Guardar los datos en localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem('events', JSON.stringify(events.value));
    localStorage.setItem('selectedMonth', selectedMonth.value.toString());
  };

  return {
    selectedMonth,
    events,
    setSelectedMonth,
    setEvents,
    addEvent,
    removeEvent,
    loadInitialData,
    saveToLocalStorage,
  };
});
