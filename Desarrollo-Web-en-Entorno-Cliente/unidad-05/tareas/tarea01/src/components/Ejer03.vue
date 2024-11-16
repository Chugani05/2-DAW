<script setup>
    const showDiv = true
</script>

<template>
    <h1>Example: v-show vs. v-if</h1>

    <div id="ejer3">
      <p>Establezca la propiedad de datos 'showDiv' en 'falso' y ejecute el
        código de nuevo. Haga clic derecho en este elemento p verde, elija
        'Inspeccionar' o 'Inspeccionar elemento' y podrá ver que el elemento
        div con v-show todavía existe, es sólo la propiedad de visualización
        CSS la que se se establece en 'ninguno' y el div con v-if se
        destruye.</p>

      <div v-show="showDiv">Div tag with v-show</div>
      <div v-if="showDiv">Div tag with v-if</div>
    </div>
</template>

<style scoped>
    #ejer3 {
      border: black dashed 1px;
      width: 80%;
      padding: 0 20px 20px 20px;
    }
    #ejer3 div {
      padding: 20px;
      margin: 10px;
      display: inline-block;
      font-weight: bold;
      border: solid black 1px;
    }
    #ejer3 p {
      padding: 10px;
      background-color: rgb(200, 246, 200);
    }
</style>
