/* Implementar una función que dado un texto, nos indique si todas las letras son minúsculas o mayúsculas, o una combinación de ambas. */

function identifyLetterCase() {
    const text = document.getElementById('textInput').value;
    let resultado = '';
    const lowercaseText = text.toLowerCase();
    const uppercaseText = text.toUpperCase();

    if (text === lowercaseText) {
        resultado = 'Todas las letras del texto dado son minúsculas.';
    } else if (text === uppercaseText) { 
        resultado = 'Todas las letras del texto dado son mayúsculas.';
    } else {
        resultado = 'Hay letras mayúsculas y minúsculas en el texto dado.';
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = resultado;
}