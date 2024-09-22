/* Implementar una función que procese una línea CSV (Comma-Separated Values). 
El primer parámetro es el texto (por defecto vacío) y el segundo es el separador o delimitador 
(por defecto una coma ",", pero el usuario podría indicar cualquier otro). 
Por ejemplo, la salida de la línea "coche|rojo|10 años|diesel|5 puertas" usando como delimitador "|", sería similar a la siguiente:
    Se han detectado 5 elementos:
    Elemento 1: coche
    Elemento 2: rojo
    Elemento 3: 10 años
    Elemento 4: diesel
    Elemento 5: 5 puertas */

function csvSplit() {
    const text = document.getElementById('csvInput').value;
    const delimiter = document.getElementById('delimiterInput').value || ',';
    let resultado = '';

    // Dividir el texto según el delimitador
    let textSplitted = text.split(delimiter);
    resultado += `Se han detectado ${textSplitted.length} elementos:<br>`;

    // Formatear los elementos
    textSplitted.forEach((element, index) => {
        resultado += `Elemento ${index + 1}: ${element.trim()}<br>`;
    });

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = resultado;
}