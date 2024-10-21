/* El sable láser (DOM)
Crea una imagen de un sable láser apagado. Al hacer clic sobre el sable, éste se enciende mostrando
una imagen diferente. */

// Seleccionar la imagen del sable láser
const lightsaber = document.getElementById('lightsaber');

// Estado inicial del sable láser (apagado)
let isOn = false;

// Función para alternar entre encender y apagar el sable
lightsaber.addEventListener('click', function() {
    if (isOn) {
        // Cambiar a la imagen del sable apagado
        lightsaber.src = './img/lightsaber.png';
        isOn = false;
    } else {
        // Cambiar a la imagen del sable encendido
        lightsaber.src = './img/saber.png';
        isOn = true;
    }
});