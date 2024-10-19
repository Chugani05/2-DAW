/* Encuentra a Groot (DOM)
Crea un juego donde haya varias imágenes y solo una de ellas sea Groot. Al hacer clic en Groot,
muestra una alerta que diga "¡Yo soy Groot!". */

// Función que verifica si se ha hecho clic en Groot
function verificarGroot(esGroot) {
    if (esGroot) {
        alert("¡Yo soy Groot!");
    } else {
        alert("Ese no es Groot, sigue buscando.");
    }
}