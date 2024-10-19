/* Asigna un poder (DOM)
Crea una lista desplegable con los nombres de diferentes superhéroes. Al seleccionar un superhéroe,
muestra su poder en un párrafo debajo. */

// Obtenemos los elementos del DOM
const superheroeSelect = document.getElementById('superheroeSelect');
const poderParrafo = document.getElementById('poder');

// Función para mostrar el poder del superhéroe seleccionado
function mostrarPoder() {
    const seleccion = superheroeSelect.value;

    // Mostramos el poder correspondiente al superhéroe seleccionado
    switch (seleccion) {
        case "fuerza":
            poderParrafo.textContent = "Superman tiene fuerza sobrehumana.";
            break;
        case "agilidad":
            poderParrafo.textContent = "Spider-Man tiene agilidad extraordinaria.";
            break;
        case "tecnología":
            poderParrafo.textContent = "Iron Man tiene una inteligencia y tecnología avanzada.";
            break;
        case "velocidad":
            poderParrafo.textContent = "Flash puede correr a velocidades increíbles.";
            break;
        case "habilidad":
            poderParrafo.textContent = "Batman tiene habilidades de combate y estrategia excepcionales.";
            break;
        default:
            poderParrafo.textContent = "";
    }
}

// Evento al cambiar la selección
superheroeSelect.addEventListener('change', mostrarPoder);