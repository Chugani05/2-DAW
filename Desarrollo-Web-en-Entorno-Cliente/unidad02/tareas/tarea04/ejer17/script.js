/* Misión X-Men (DOM)
Crea una lista de misiones para los X-Men. Al hacer clic en una misión, debe marcarse como
completada, cambiando su estilo (por ejemplo, tachando el texto). */

// Obtener todos los elementos de la lista
const misiones = document.querySelectorAll("#listaMisiones li");

// Agregar evento de clic a cada misión
misiones.forEach(mision => {
    mision.addEventListener("click", () => {
        // Alternar la clase "completada" para marcar o desmarcar la misión
        mision.classList.toggle("completada");
    });
});