<script setup>
    import { ref } from 'vue';

    let count = ref(0)
    function add(number) {
        count.value += number
    }
</script>

<template>
    <h1>Ejemplo: pasar argumentos con métodos</h1>

    <div id="ejer7">
      <img src="../assets/img/pizza.jpeg" width="670">
      <p>{{ "Moose count: " + count }}</p>
      <button v-on:click="add(1)">+1</button>
      <button v-on:click="add(5)">+5</button>
      <button v-on:click="add(-1)">-1</button>
    </div>
</template>

<style scoped>
    #ejer7 {
      border: dashed black 1px;
      width: 250px;
      padding: 10px;
    }
    img {
      width: 100%;
    }
    button {
      margin: 10px;
      padding: 5px 10px;
    }
</style>
