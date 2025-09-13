/* Los 9 Nazgûl (DOM)
Crea una lista de 9 elementos que representen a los Nazgûl. Al pasar el ratón sobre cada elemento,
cambia el texto a "Nazgûl" y cambia su color de fondo a negro. */

// Selecciona todos los elementos de la lista
const nazgulList = document.querySelectorAll('#nazgulList li');

// Itera sobre cada elemento de la lista y añade los eventos de mouse
nazgulList.forEach(function(nazgul) {
    // Evento cuando el ratón pasa sobre un elemento (hover)
    nazgul.addEventListener('mouseover', function() {
        nazgul.textContent = 'Nazgûl'; // Cambia el texto a "Nazgûl"
        nazgul.classList.add('nazgul'); // Aplica la clase que cambia el fondo y color
    });

    // Evento cuando el ratón sale del elemento
    nazgul.addEventListener('mouseout', function() {
        nazgul.textContent = 'Nazgûl'; // Mantiene el texto como "Nazgûl"
        nazgul.classList.remove('nazgul'); // Remueve la clase para volver al estilo original
    });
});