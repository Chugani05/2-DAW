<script setup>
    const message = "Hello World!"
</script>

<template>
    <h1>Ejemplo de javascript dentro de {{ }}</h1>
    
    <p>El texto del 'message' de la instancia de Vue se junta con otro
        texto y una expresión JavaScript. La expresión JavaScript crea
        un número entero aleatorio entre 1 y 6.</p>
        
    <div id="ejer1">
        {{ message }} <br>
        {{'Random number: ' + Math.ceil(Math.random()*6) }}
    </div>
</template>

<style scoped>
    #ejer1 {
        display: inline-block;
        padding: 10px;
        font-size: x-large;
        background-color: lightgreen;
    }
</style>
