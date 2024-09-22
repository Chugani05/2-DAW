/* Escribir una función que acepte al menos un argumento 
(el primer argumento debe ser obligatorio, mostrar un mensaje de error si no se indica, 
luego se pueden indicar tantos argumentos como desee el usuario) 
y que devuelva la suma y la media de todos los elementos. 
Comprobar que todos los argumentos sean números e ignorar los que no lo sean, mostrando un aviso 
(por ejemplo: ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos"). */

function sum_and_avg(...numbers) {
    let sum = 0, avg = 0, count = 0
    let output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior

    if (numbers.length < 1) {
        output.innerHTML = '<p class="error">ERROR: El primer argumento debe ser obligatorio</p>';
        return;
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (typeof(numbers[i]) == 'number') {
                sum += numbers[i];
                count += 1;
            } else {
                output.innerHTML += '<p class="warning">¡AVISO! El argumento número ' + i + ' "' + numbers[i] + '" no es un número, lo ignoramos.</p>';
            }
        }
        if (count > 0) {
            avg = sum / count;
            output.innerHTML += '<p class="result">Suma: ' + sum + '</p>';
            output.innerHTML += '<p class="result">Media: ' + avg.toFixed(2) + '</p>';
        } else {
            output.innerHTML += '<p class="error">No se ingresaron números válidos.</p>';
        }
    }
}