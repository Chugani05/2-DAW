/* El anillo único (DOM)
Crea una página web con una lista de personajes de El Señor de los Anillos. Al hacer clic en el
botón "Encontrar el Anillo", resalta el personaje de Frodo cambiando su color de fondo a amarillo.  */

// Selecciona el botón y el personaje de Frodo
const findRingBtn = document.getElementById('findRingBtn');
const frodo = document.getElementById('frodo');

// Añade un evento de clic al botón
findRingBtn.addEventListener('click', function() {
    // Cambia el fondo de Frodo a amarillo
    frodo.style.backgroundColor = 'yellow';
});