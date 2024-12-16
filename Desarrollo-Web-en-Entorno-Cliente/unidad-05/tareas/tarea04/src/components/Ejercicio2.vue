<template>
    <div class="container text-center">
      <h2 class="mb-4">La casa flotante de los globos rojos</h2>
      <div class="mb-3">
        <label for="balloonSlider" class="form-label">Cantidad de Globos</label>
        <input
          v-model="balloonCount"
          type="range"
          min="1"
          max="20"
          id="balloonSlider"
          class="form-range"
        />
        <div class="mt-2">
          <span class="badge bg-danger">{{ balloonCount }} globos</span>
        </div>
      </div>
  
      <div class="balloon-container mb-4">
        <div v-for="n in balloonCount" :key="n" class="balloon"></div>
      </div>
  
      <button @click="revealMessage" class="btn btn-danger">
        Mostrar Mensaje Espeluznante
      </button>
  
      <div v-if="showMessage" class="mt-4">
        <h4>¡Todos flotan aquí!</h4>
        <p v-if="balloonCount < 10">¿Te atreves a ver más?</p>
        <p v-else>¿Estás listo para un terror aún mayor?</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        balloonCount: 1,
        showMessage: false
      };
    },
    methods: {
      revealMessage() {
        if (this.balloonCount >= 10) {
          this.showMessage = true;
        } else {
          alert("Necesitas al menos 10 globos para ver el mensaje.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .balloon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .balloon {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    margin: 5px;
  }
  </style>