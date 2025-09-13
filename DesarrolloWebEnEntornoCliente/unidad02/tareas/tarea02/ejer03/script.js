/* Implementar una función que dados dos números, 
nos escriba el resultado de la suma con console.log usando 4 formas diferentes 
(lista de argumentos, concatenación de strings, marcadores de posición y plantillas). */

function sum() {
    // Obtener los valores ingresados por el usuario
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);

    // Verificar que sean números válidos
    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    // Lista de argumentos
    const result1 = a + b;
    // Concatenación de strings
    const result2 = 'La suma de ' + a + ' + ' + b + ' es igual a ' + (a + b);
    // Marcadores de posición (simulada para el navegador)
    const result3 = `La suma de ${a} + ${b} es igual a ${a + b}`;
    // Plantillas
    const result4 = `La suma de ${a} + ${b} es igual a ${a + b}`;

    // Mostrar los resultados en el HTML
    document.getElementById('result1').textContent = result1;
    document.getElementById('result2').textContent = result2;
    document.getElementById('result3').textContent = result3;
    document.getElementById('result4').textContent = result4;
}