<script setup>
    import { ref } from 'vue';
    
    let text = ref("")
    function change() {
        if (text.value == "") {
            text.value = "Hello World"
        } else {
            text.value = ""
        }
    }
</script>

<template>
    <h1>Example: Click para ejecutar método</h1>

    <div id="ejer6">
        <p>Click en la caja de abajo:</p>
        <div v-on:click="change">
            {{ text }}
        </div>
    </div>
</template>

<style scoped>
    #ejer6 {
      border: black dashed 1px;
      width: 200px;
      padding: 0 20px 20px 20px;
    }
    #ejer6 > div {
      width: 140px;
      height: 60px;
      background-color: lightgreen;
      padding: 20px;
      font-weight: bold;
      font-family: 'Courier New', Courier, monospace;
    }
</style>
