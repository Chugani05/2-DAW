/* El escudo del Capitán América (DOM)
Crea una página con una imagen del escudo del Capitán América. Al hacer clic sobre el escudo, éste
debe moverse hacia la derecha en intervalos usando JavaScript. */

// Seleccionar el escudo y el botón de reinicio
const escudo = document.getElementById('escudo');
const reiniciarBtn = document.getElementById('reiniciarBtn');

// Posición inicial
let posicionX = 0;

// Función para mover el escudo hacia la derecha
function moverEscudo() {
    // Incrementa la posición en píxeles
    posicionX += 10;
    // Aplica la transformación de la posición
    escudo.style.transform = `translateX(${posicionX}px)`;
}

// Evento al hacer clic en el escudo
escudo.addEventListener('click', moverEscudo);

// Función para reiniciar el escudo a la posición original
function reiniciarPosicion() {
    posicionX = 0;
    escudo.style.transform = `translateX(${posicionX}px)`;
}

// Evento al hacer clic en el botón de reinicio
reiniciarBtn.addEventListener('click', reiniciarPosicion);