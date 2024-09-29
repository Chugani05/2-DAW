/* Escribir una función que dados dos números, 
nos devuelva la división del primero entre el segundo si el resultado es un valor númerico, 
y, si no, que indique dónde está el problema 
(resultado es infinito, el númerador o el denominador no eran números, o estaban indefinidos, etc.) */

function divide() {
    // Obtener los valores ingresados por el usuario
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    let resultado = '';

    // Verificar si ambos son números
    if (typeof(numA) === 'number' && typeof(numB) === 'number') {
        if (isNaN(numA) || isNaN(numB)) {
            resultado = 'ERROR: Alguno de los argumentos no son números válidos';
        } else if (numB === 0) {
            resultado = 'ERROR: No puedes dividir por cero';
        } else {
            const division = numA / numB;
            resultado = `El resultado de ${numA} / ${numB} es ${division}`;
        }
    } else {
        resultado = 'ERROR: Alguno de los argumentos no son numéricos o no están definidos';
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = resultado;
}