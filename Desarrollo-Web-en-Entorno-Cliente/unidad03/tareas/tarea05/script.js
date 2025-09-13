$(document).ready(function () {
    // Función para agregar una nueva misión a la lista
    $('#agregar-tarea').click(function () {
        let nuevaTarea = $('#nueva-tarea').val().trim();
        if (nuevaTarea !== '') {
            let tareaHtml = `
                <li>
                    <p class="tarea-texto">${nuevaTarea}</p>
                    <div style="display: flex; gap: 5px;">
                        <button class="editar">Editar</button>
                        <button class="eliminar">Eliminar</button>
                    </div>
                </li>
            `;
            $('#lista-tareas').append(tareaHtml);
            $('#nueva-tarea').val(''); // Limpiar el input
        }
    });

    // Función para eliminar una tarea
    $('#lista-tareas').on('click', '.eliminar', function () {
        $(this).parent().remove(); // Remueve el elemento <li> completo
    });

    // Función para editar una tarea
    $('#lista-tareas').on('click', '.editar', function () {
        let tareaTexto = $(this).siblings('.tarea-texto').text();
        let nuevoTexto = prompt('Editar misión:', tareaTexto);
        if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
            $(this).siblings('.tarea-texto').text(nuevoTexto);
        }
    });

    // Función para limpiar las tareas completadas
    $('#limpiar-tareas').click(function () {
        $('#lista-tareas').empty()
    });
});
