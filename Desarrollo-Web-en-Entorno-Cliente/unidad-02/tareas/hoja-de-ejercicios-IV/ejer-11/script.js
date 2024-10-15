/* El vuelo de Superman (DOM y POO)
Crea una clase Superman con un método volar(). Usa el DOM para hacer que una imagen de
Superman se desplace hacia arriba cuando se invoque el método volar(). */

// Definición de la clase Superman
class Superman {
    constructor(elemento) {
        this.elemento = elemento;
    }

    // Método para volar (mover hacia arriba)
    volar() {
        this.elemento.style.top = "10px"; // Mueve a Superman hacia la parte superior
    }

    // Método para volver a la posición inicial
    aterrizar() {
        this.elemento.style.top = "300px"; // Restablece la posición original
    }
}

// Seleccionar la imagen de Superman y el botón
const supermanImg = document.getElementById('superman');
const volarBtn = document.getElementById('volarBtn');

// Crear una instancia de Superman
const superman = new Superman(supermanImg);

// Estado para controlar si Superman está en el aire
let volando = false;

// Evento al hacer clic en el botón
volarBtn.addEventListener('click', function() {
    if (!volando) {
        superman.volar(); // Superman vuela
        volarBtn.textContent = "Aterriza, Superman"; // Cambiar texto del botón
        volando = true;
    } else {
        superman.aterrizar(); // Superman aterriza
        volarBtn.textContent = "¡Vuela, Superman!"; // Cambiar texto del botón
        volando = false;
    }
});