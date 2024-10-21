/* El código secreto de los Vengadores (DOM)
Crea un input donde el usuario pueda escribir una contraseña. Si la contraseña es "Vengadores",
cambia el texto de un párrafo a "Assemble!". */

// Función que verifica si la contraseña es "Vengadores"
function verificarCodigo() {
    const inputCodigo = document.getElementById("codigoSecreto").value;
    const mensaje = document.getElementById("mensaje");

    if (inputCodigo === "Vengadores") {
        mensaje.textContent = "Assemble!!";
        mensaje.style.color = "green"; // Cambia el color del texto si es correcto
    } else {
        mensaje.textContent = "Código incorrecto. Inténtalo de nuevo.";
        mensaje.style.color = "red"; // Cambia el color del texto si es incorrecto
    }
}