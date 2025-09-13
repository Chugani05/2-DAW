<script setup>
    const text = 'Me gusta la pizza, el burrito, la ensalada de ternera Thai, la sopa Pou y el Tagin.'
</script>

<template>
    <h1>Ejemplo con 'v-if', 'v-else-if' y 'v-else'</h1>

    <p>
      En este ejemplo todas las directivas 'v-if', 'v-else-if' and 'v-else' son
      usadas juntas.
    </p>

    <div id="ejer2">
      <div v-if="text.includes('pizza')">
        <p>El texto incluye la palabra 'pizza'.</p>
        <img src="../assets/img/pizza.jpeg" />
        </div>

      <div v-else-if="text.includes('burrito')">
        <p>El texto in cluye la pala burrito 'burrito', pero no 'pizza'.</p>
        <img src="../assets/img/pizza.jpeg" >
      </div>

      <p v-else>
        Las palabras 'pizza' o 'burrito' no se encuentran en el texto.
      </p>
    </div>
</template>

<style scoped>
    #ejer2 {
        border: dashed black 1px;
        width: 130px;
        padding: 0 20px 20px 20px;
        font-weight: bold;
        background-color: lightgreen;
    }
    img {
      width: 100%;
    }
</style>
