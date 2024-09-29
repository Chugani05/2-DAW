/* Realizar una función que dado un texto, lo convierta a minúscula y elimine los espacios iniciales y finales, y devuelva la suma de los siguientes puntos:
+1 si el texto empieza por "el" o por "la"
+10 si el texto finaliza en gerundio ("ando", "endo")
+100 si el texto contiene al menos una vez la preposición "con" directamente entre otras dos palabras. */

function lowerPlus() {
    const text = document.getElementById('textInput').value;
    let score = 0;
    let newText = text.toLowerCase().trim();

    // Verificar condiciones para sumar puntuación
    if (newText.search(/^(la|el)/) !== -1) {
        score += 1;
    }
    if (newText.search(/(ando|endo)$/) !== -1) {
        score += 10;
    }
    if (newText.search(/.+ con .+/) !== -1) {
        score += 100;
    }

    // Mostrar resultados
    document.getElementById('resultado').innerHTML = `Texto formateado: "${newText}"<br>Puntuación: ${score}`;
}