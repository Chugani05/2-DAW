<script setup>
    import { ref } from 'vue';
    
    const colorVal = ref(128)
</script>

<template>
    <h1>Example: Cambia colorr</h1>

    <div id="ejer5">
        <p>Mueva el puntero del mouse sobre el cuadro a continuación para
            cambiar el color de fondo aleatoriamente con código de color
            hsl.</p>

        <div v-on:mousemove=" colorVal = Math.floor(Math.random()*360) "
            v-bind:style=" {backgroundColor: 'hsl('+colorVal+',60%,60%)'} "></div>

        <p><span>backgroundColor: hsl(<strong>{{ colorVal }}</strong>, 80%,
                80%)</span></p>

        <p>Para comprender cómo establecer un color en CSS con 'hsl()',
            consulte <a
                href="/css/css_colors_hsl.asp" target="_blank">nuestra
                pagina sobre esto</a>.</p>
    </div>
</template>

<style scoped>
    #ejer5 {
      border: dashed black 1px;
      width: 350px;
      padding: 0 20px;
    }
    #ejer5 > div {
      width: 200px;
      height: 80px;
    }
    #ejer5 span {
      font-weight: bold;
      font-family: 'Courier New', Courier, monospace;
    }
</style>
