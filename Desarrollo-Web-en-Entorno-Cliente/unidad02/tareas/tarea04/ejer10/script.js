/* La Batiseñal (DOM)
Crea un botón que al hacer clic cambie la imagen del fondo por una con la Batiseñal. */

// Seleccionar el botón
const batiseñalBtn = document.getElementById('batiseñalBtn');

// Variable para controlar si la Batiseñal está activada o no
let batiseñalActiva = false;

// Función para cambiar la imagen de fondo
function activarBatiseñal() {
    if (!batiseñalActiva) {
        // Cambiar el fondo a la imagen de la Batiseñal
        document.body.style.backgroundImage = "url('./img/signal.webp')";
        batiseñalBtn.textContent = "Desactivar Batiseñal";
        batiseñalActiva = true;
    } else {
        // Restaurar el fondo original
        document.body.style.backgroundImage = "url('./img/gotham.jpg')";
        batiseñalBtn.textContent = "Activar Batiseñal";
        batiseñalActiva = false;
    }
}

// Evento al hacer clic en el botón
batiseñalBtn.addEventListener('click', activarBatiseñal);