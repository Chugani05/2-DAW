/* Escribir una función que busque la cadena "arriba" en un texto. 
La función deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, 
nos deberá mostrar el texto reemplazando "arriba" por "abajo". */

function replaceArriba() {
    const text = document.getElementById('textInput').value;
    const searchTerm = 'arriba';
    let resultado = '';

    if (text.search(new RegExp(searchTerm, 'i')) !== -1) {
        resultado += `Se ha encontrado la palabra "${searchTerm}" en la frase.<br>`;
        resultado += `Se modifica la frase: ${text.replace(/arriba/gi, 'abajo')}`;
    } else {
        resultado = `No se ha encontrado la palabra "${searchTerm}" en la frase.`;
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = resultado;
}