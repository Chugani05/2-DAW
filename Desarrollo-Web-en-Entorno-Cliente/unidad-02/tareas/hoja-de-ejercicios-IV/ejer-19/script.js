/* La elección del Anillo (DOM)
Crea tres imágenes de anillos (uno de Sauron, uno de Gandalf y uno de Frodo). Al hacer clic en el
anillo de Frodo, cambia el texto de la página a "Has elegido correctamente". */

// Función para verificar cuál anillo fue elegido
function verificarAnillo(anillo) {
    const mensaje = document.getElementById("mensaje");

    if (anillo === 'Frodo') {
        mensaje.textContent = "¡Has elegido correctamente!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Has fallado, intenta de nuevo.";
        mensaje.style.color = "red";
    }
}