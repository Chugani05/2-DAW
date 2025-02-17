<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/stores/calendar';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const eventType = ref<string>('holiday');
const eventName = ref<string>('');
const eventDate = ref<string>('');

const submitForm = () => {
  if (eventName.value && eventDate.value) {
    const newEvent = {
      type: eventType.value,
      name: eventName.value,
      date: eventDate.value,
    };
    store.addEvent(newEvent);
    router.push('/');
  }
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="mt-3">
      <div class="mb-3">
        <label for="eventType" class="form-label">{{ $t('eventType') }}</label>
        <select id="eventType" v-model="eventType" class="form-select" required>
          <option value="holiday">{{ $t('holiday') }}</option>
          <option value="task">{{ $t('task') }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="eventName" class="form-label">{{ $t('eventName') }}</label>
        <input type="text" id="eventName" v-model="eventName" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="eventDate" class="form-label">{{ $t('eventDate') }}</label>
        <input type="date" id="eventDate" v-model="eventDate" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
    </form>
  </div>
</template>
