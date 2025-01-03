<script lang="ts">
import { ref, computed } from "vue";

export default {
  name: "DerryCurse",
  setup() {
    const eventType = ref("");
    const selectedEvent = ref(null);

    const events = ref([
      {
        type: "Desapariciones",
        description: "Una joven desapareció mientras caminaba a casa al anochecer.",
        date: "18/10/1994",
        victims: "1 persona",
      },
      {
        type: "Muertes",
        description: "Un misterioso asesinato en la ciudad.",
        date: "12/03/1991",
        victims: "5 personas",
      },
      {
        type: "Desapariciones",
        description: "Desaparecen niños sin dejar rastro.",
        date: "15/08/1995",
        victims: "7 niños",
      },
      {
        type: "Fenómenos Paranormales",
        description: "Extrañas luces en el cielo.",
        date: "22/06/1993",
        victims: "Ninguna",
      },
      {
        type: "Muertes",
        description: "Una familia entera encontrada sin vida en su hogar.",
        date: "14/02/1990",
        victims: "4 personas",
      },
      {
        type: "Desapariciones",
        description: "Un grupo de excursionistas desapareció en el bosque.",
        date: "09/07/1992",
        victims: "6 excursionistas",
      },
    ]);

    const filteredEvents = computed(() => {
      if (!eventType.value) return events.value;
      return events.value.filter((event) => event.type === eventType.value);
    });

    const viewDetails = (event: any) => {
      selectedEvent.value = event;
    };

    const clearSelectedEvent = () => {
      selectedEvent.value = null;
    };

    const resetFilters = () => {
      eventType.value = "";
      selectedEvent.value = null;
    };

    return {
      eventType,
      selectedEvent,
      events,
      filteredEvents,
      viewDetails,
      clearSelectedEvent,
      resetFilters,
    };
  },
};
</script>

<template>
  <div class="container text-center">
    <h2 class="mb-4">La maldición de Derry</h2>

    <div class="mb-4">
      <label for="eventType" class="form-label">Filtrar Eventos</label>
      <select v-model="eventType" id="eventType" class="form-select" @change="clearSelectedEvent">
        <option value="">Todos</option>
        <option value="Muertes">Muertes</option>
        <option value="Desapariciones">Desapariciones</option>
        <option value="Fenómenos Paranormales">Fenómenos Paranormales</option>
      </select>
    </div>

    <div class="mb-3">
      <div
        v-for="(event, index) in filteredEvents"
        :key="index"
        class="card mb-3"
        v-if="!selectedEvent"
      >
        <div class="card-body" @click="viewDetails(event)">
          <h5 class="card-title">{{ event.type }}</h5>
          <p class="card-text">{{ event.description }}</p>
        </div>
      </div>
    </div>

    <button @click="resetFilters" class="btn btn-danger mt-4">
      Reiniciar Filtros
    </button>

    <div v-if="selectedEvent" class="mt-4">
      <h3>Detalles del Evento</h3>
      <p><strong>Tipo:</strong> {{ selectedEvent.type }}</p>
      <p><strong>Descripción:</strong> {{ selectedEvent.description }}</p>
      <p><strong>Fecha:</strong> {{ selectedEvent.date }}</p>
      <p><strong>Víctimas:</strong> {{ selectedEvent.victims }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
