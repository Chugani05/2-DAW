/* Elige tu bando (Star Wars, DOM)
Crea dos botones: "Lado Oscuro" y "Lado Luminoso". Al hacer clic en uno de ellos, cambia el color
de fondo de la página según el bando elegido: negro para el lado oscuro y blanco para el lado
luminoso. */

// Selección de los botones por su id
const darkSideBtn = document.getElementById('darkSide');
const lightSideBtn = document.getElementById('lightSide');

// Evento para el botón del Lado Oscuro
darkSideBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

// Evento para el botón del Lado Luminoso
lightSideBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});