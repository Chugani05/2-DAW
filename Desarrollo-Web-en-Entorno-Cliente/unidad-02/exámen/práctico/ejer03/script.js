let lanzamientos = 0;
let intervalId;

function lanzadorDeDados(inputValue) {
    // Verifica que el valor del input sea un número natural entre 0 y 20
    if (/^[1-9]|20$/.test(inputValue)) {
        // Si el valor es válido, hacemos lo siguiente:
        lanzamientos = parseInt(inputValue);

        // Bloquea el input
        document.getElementById('dado').disabled = true;

        // Deshabilita el botón "Lanzar" y habilita el botón "Parar"
        document.getElementById('boton-lanzar').disabled = true;
        document.getElementById('boton-parar').disabled = false;

        // Si el valor es 0, no lanza nada
        if (inputValue === '0') {
            mostrarMensaje('No lanzaremos dados.');
            return;
        }

        // Inicia la función de tiempo para realizar los lanzamientos
        iniciarLanzamiento();
    } else {
        alert('El valor del input no es un número natural entre 0 y 20. Por favor, verifíquelo.');
    }
}

function iniciarLanzamiento() {
    // Si el botón "Parar" se pulsa o ya no quedan lanzamientos, detiene la función de tiempo
    if (document.getElementById('boton-parar').disabled || lanzamientos === 0) {
        clearInterval(intervalId);
        // Deshabilita el botón "Parar" y permite modificar el input
        document.getElementById('boton-parar').disabled = true;
        document.getElementById('dado').disabled = false;
    } else {
        // Cambia el mensaje en el div de información
        mostrarMensaje(`Lanzando... (${lanzamientos} Ɵradas restantes)`);

        // Decrementa el valor de lanzamientos
        lanzamientos--;

        // Espera 3 segundos y genera un número aleatorio X entre 1 y 6
        setTimeout(() => {
            const x = Math.floor(Math.random() * 6) + 1;
            mostrarMensaje(`El valor obtenido al lanzar en el dado es ${x}, quedan ${lanzamientos} Ɵradas`);
            iniciarLanzamiento();
        }, 3000);
    }
}
