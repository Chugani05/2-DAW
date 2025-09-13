# Unidad 05 - Vue.js  

<div align=center>
    <img src="../../extras/data.gif" alt="data" width="100%">
</div>

## Content
- [¿Qué es Vue.js?](#qué-es-vuejs)  
- [Crear un Proyecto con Vue](#crear-un-proyecto-con-vue)  
- [Estructura de un Componente](#estructura-de-un-componente)  
- [Reactividad: `ref` y `reactive`](#reactividad-ref-y-reactive)  
- [Propiedades Computadas (`computed`)](#propiedades-computadas-computed)  
- [Observadores (`watch`)](#observadores-watch)  
- [Comunicación entre Componentes (`props` y `emit`)](#comunicación-entre-componentes-props-y-emit)  
- [Directivas Básicas](#directivas-básicas)  
- [Manejo de Eventos](#manejo-de-eventos)  
- [Estilos en Componentes](#estilos-en-componentes)  
- [Pinia (Estado Global)](#pinia-estado-global)  

---

### ¿Qué es Vue.js?  
- Es un **framework progresivo** para construir interfaces de usuario.  
- Se basa en un **DOM virtual** y un sistema de **reactividad** muy eficiente.  
- Permite trabajar con **componentes reutilizables** que contienen HTML, CSS y JS/TS en un solo archivo (`.vue`).  

---

### Crear un Proyecto con Vue  
1. Instala el CLI de Vue (si no lo tienes):  
    ```bash
    npm install -g @vue/cli
    ```

2. Crea un nuevo proyecto:

   ```bash
   vue create mi-proyecto
   ```

   (O con Vite, recomendado:)

   ```bash
   npm create vite@latest mi-proyecto
   ```
3. Ejecuta el proyecto:

   ```bash
   npm run dev
   ```

---

### Estructura de un Componente

Un componente `.vue` típico se divide en tres partes:

```vue
<script setup lang="ts">
import { ref } from "vue";

const mensaje = ref("Hola Vue 3 🚀");
</script>

<template>
  <h1>{{ mensaje }}</h1>
</template>

<style scoped>
h1 {
  color: #42b883;
}
</style>
```

---

### Reactividad: `ref` y `reactive`

* **`ref`**: crea una variable reactiva (para valores primitivos).
* **`reactive`**: crea un objeto reactivo (ideal para objetos/arrays).

```typescript
import { ref, reactive } from "vue";

const contador = ref(0);
const usuario = reactive({ nombre: "Ana", edad: 25 });

function incrementar() {
  contador.value++;
}
```

---

### Propiedades Computadas (`computed`)

Se usan para valores **derivados** de otros datos reactivos.

```typescript
import { ref, computed } from "vue";

const precio = ref(100);
const iva = computed(() => precio.value * 0.21);
```

```vue
<p>Total con IVA: {{ precio + iva }}</p>
```

---

### Observadores (`watch`)

Sirven para **reaccionar a cambios** en variables reactivas.

```typescript
import { ref, watch } from "vue";

const nombre = ref("Juan");

watch(nombre, (nuevo, viejo) => {
  console.log(`Cambio de ${viejo} a ${nuevo}`);
});
```

---

### Comunicación entre Componentes (`props` y `emit`)

* **Props**: datos **del padre al hijo**.
* **Emit**: eventos **del hijo al padre**.

```vue
<!-- Hijo.vue -->
<script setup lang="ts">
defineProps<{ titulo: string }>();
const emit = defineEmits<{
  (e: "clicked"): void;
}>();
</script>

<template>
  <button @click="emit('clicked')">{{ titulo }}</button>
</template>
```

```vue
<!-- Padre.vue -->
<template>
  <Hijo titulo="Presióname" @clicked="alert('Botón presionado!')" />
</template>
```

---

### Directivas Básicas

* `v-model`: enlace bidireccional.
* `v-if`, `v-else`, `v-else-if`: condicionales.
* `v-for`: bucles.
* `v-bind` (`:`): enlazar atributos.
* `v-on` (`@`): escuchar eventos.

```vue
<input v-model="nombre" placeholder="Escribe tu nombre" />
<p v-if="nombre">Hola, {{ nombre }}</p>
```

---

### Manejo de Eventos

```vue
<button @click="contador++">Incrementar</button>
<button @dblclick="resetear">Resetear</button>
```

---

### Estilos en Componentes

* **Scoped**: aplica los estilos solo al componente actual.
* **Globales**: sin `scoped`, afectan a toda la app.

```vue
<style scoped>
button {
  background: #42b883;
  color: white;
}
</style>
```

---

### Pinia (Estado Global)

Pinia es la librería oficial de Vue para manejar **estado global**.

```typescript
// store/counter.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});
```

Uso en componentes:

```vue
<script setup lang="ts">
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();
</script>

<template>
  <button @click="counter.increment">Contador: {{ counter.count }}</button>
</template>
```