$(document).ready(function () {
    // Función para agregar una nueva misión a la lista
    $('#agregar-tarea').click(function () {
        let nuevaTarea = $('#nueva-tarea').val().trim();
        if (nuevaTarea !== '') {
            let tareaHtml = `
                <li>
                    <input type="checkbox" class="completar-tarea"> 
                    <span class="tarea-texto">${nuevaTarea}</span>
                    <button class="editar">Editar</button>
                    <button class="eliminar">Eliminar</button>
                </li>
            `;
            $('#lista-tareas').append(tareaHtml);
            $('#nueva-tarea').val(''); // Limpiar el input
        }
    });

    // Marcar tarea como completada
    $(document).on('change', '.completar-tarea', function() {
        const tareaText = $(this).siblings('.tarea-texto');
        tareaText.toggleClass('.completed', this.checked);
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
        $('#lista-tareas input[type="checkbox"]:checked').each(function () {
            $(this).parent().remove(); // Remueve solo las tareas que están marcadas
        });
    });
});
