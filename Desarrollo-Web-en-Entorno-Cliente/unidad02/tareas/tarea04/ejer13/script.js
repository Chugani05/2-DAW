/* La máscara de Batman (DOM)
Crea un botón que al hacer clic muestre o esconda una imagen de Batman en la página. */

// Seleccionamos la imagen de Batman y el botón
const batmanImg = document.getElementById('batman');
const toggleButton = document.getElementById('toggleButton');

// Función para alternar la visibilidad de la imagen de Batman
toggleButton.addEventListener('click', function() {
    if (batmanImg.style.display === 'none') {
        batmanImg.style.display = 'block'; // Mostrar imagen
        toggleButton.textContent = 'Esconder Máscara de Batman'; // Cambiar el texto del botón
    } else {
        batmanImg.style.display = 'none'; // Esconder imagen
        toggleButton.textContent = 'Mostrar Máscara de Batman'; // Cambiar el texto del botón
    }
});