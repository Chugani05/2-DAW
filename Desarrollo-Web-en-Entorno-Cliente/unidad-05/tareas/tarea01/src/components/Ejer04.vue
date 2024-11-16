<script setup>
    const manyFoods = [
        {name: 'Burrito', url: 'img_burrito.svg'},
        {name: 'Salad', url: 'img_salad.svg'},
        {name: 'Cake', url: 'img_cake.svg'},
        {name: 'Soup', url: 'img_soup.svg'},
        {name: 'Fish', url: 'img_fish.svg'},
        {name: 'Pizza', url: 'img_pizza.svg'},
        {name: 'Rice', url: 'img_rice.svg'}
      ]
</script>

<template>
    <h1>Ejemplo: obtener el índice del elemento de la matriz con 'v-for'</h1>
    <p>La directiva 'v-for' se utiliza para obtener el índice de objetos dentro
      del matriz 'manyFoods', junto con el nombre y la URL de cada alimento
      objeto.</p>

    <div id="ejer4">
      <div>
        <p v-for="(food, index) in manyFoods">
          {{ index }}: "{{ food.name }}", url: "{{ food.url }}" <br>
        </p>
      </div>
    </div>
</template>

<style scoped>
    #ejer4 > div {
      display: inline-block;
      border: dashed black 1px;
      padding: 10px;
      background-color: lightgreen;
    }
    #ejer4 p {
      font-weight: bold;
      margin: 5px 0;
    }
</style>
