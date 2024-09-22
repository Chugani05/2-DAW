/* Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), devuelva la letra asociado al mismo. 
Esta letra se calcula como el módulo (resto) de la división del número del DNI entre 23, 
y a partir del resto se escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. 
Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene comor resto 14, 
por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z. */

function getDniLetter() {
    const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const dni = document.getElementById('dni').value;
    let resultado = '';

    // Verificar que el DNI es un número entre 0 y 99999999
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        const position = dni % 23;
        const letter = LETTERS.charAt(position);
        resultado = `El DNI completo es: ${dni}${letter}`;
    } else {
        resultado = 'ERROR: El DNI debe ser un número válido entre 0 y 99999999';
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = resultado;
}