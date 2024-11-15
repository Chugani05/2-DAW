// 1. Asignar un fondo diferente a la cabecera, a las filas pares y a las impares, y hacer que al pasar el ratón por una fila, el color de fondo cambie.
enum BackgroundColor {
    HEADER = "pink",     //Color de fondo par el encabezado
    ODD_ROW = "lightgreen",     //Color de fondo par las filas impares
    EVEN_ROW = "lightblue",     //Color de fondo par las filas pares
    HOVER = "lightgray"     //Color par el hover
}

$(document).ready(() => {
    // Asignar color de fondo al encabezado
    $("thead").css("background-color", BackgroundColor.HEADER);

    // Asignar color de fondo a las filas pares e impares
    $("tbody tr:odd").css("background-color", BackgroundColor.ODD_ROW);
    $("tbody tr:even").css("background-color", BackgroundColor.EVEN_ROW);

    // Cambiar color de fondo al pasar el ratón por encima
    $("tbody tr").hover(
        function() {
            $(this).css("background-color", BackgroundColor.HOVER);
        },
        // Volver a asignar el color anterior dependiendo de la paridad de la fila
        function() {
            const isOddRow = $(this).index() % 2 !== 0;
            const originalColor = isOddRow ? BackgroundColor.ODD_ROW : BackgroundColor.EVEN_ROW;
            $(this).css("background-color", originalColor);
        }
    );
});


// 2. Transformar las siguientes columnas:
// Función para capitalizar la primera letra de cada palabra
function capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

// Función para transformar el valor de Sexo
function transformSex(sex: string): string {
    return sex === 'M' ? 'Hombre' : 'Mujer';
}

// Aplicar transformaciones en las columnas
function transformColumns() {
    $('tbody tr').each(function () {
        const row = $(this);
       
        // Transformar columna de Nombre
        const nameCell = row.find('td').eq(1); // Ajustar el índice según el orden
        nameCell.text(capitalizeWords(nameCell.text()));

        // Transformar columna de Sexo
        const sexCell = row.find('td').eq(2); // Ajustar el índice según el orden
        sexCell.text(transformSex(sexCell.text()));

        // Transformar columna de Email
        const emailCell = row.find('td').eq(3); // Ajustar el índice según el orden
        const email = emailCell.text();
        emailCell.html(`<a href="mailto:${email}">${email}</a>`);

        // Cambiar fondo según color
        const colorCell = row.find('td').eq(4); // Ajustar el índice según el orden
        colorCell.css('background-color', colorCell.text());

        // Cambiar texto por SVG
        const recogerCell = row.find('td').eq(6); // Ajustar el índice según el orden
        const recogerText = recogerCell.text().toLowerCase();
        let recogerImage = '';

        switch (recogerText) {
            case 'domicilio':
                recogerImage = '<img src="../assets/domicilio.svg" alt="Domicilio" title="Domicilio">';
                break;
            case 'paquete':
                recogerImage = '<img src="../assets/paquete.svg" alt="Paquete" title="Paquete">';
                break;
            case 'tienda':
                recogerImage = '<img src="../assets/tienda.svg" alt="Tienda" title="Tienda">';
                break;
        }
        recogerCell.html(recogerImage);
    });
}
transformColumns();


// 3. Añadir una nueva COLUMNA al final con la cabecera "Precio_total" que indique el total de cada fila (Cantidad * Precio_unid).
function addTotalPriceColumn() {
    // Agregar la cabecera de la columna
    $('thead tr').append('<th>Precio_total</th>');

    // Calcular el total y agregarlo a cada fila
    $('tbody tr').each(function () {
        const row = $(this);
       
        const cantidad = parseFloat($(this).children("td:eq(7)").text()); // Índice para Cantidad
        const precioUnid = parseFloat($(this).children("td:eq(8)").text().slice(1)); // Índice para Precio_unid

        if (!isNaN(cantidad) && !isNaN(precioUnid)) {
            const total = cantidad * precioUnid;
            row.append(`<td>€${total.toFixed(2)}</td>`);
        } else {
            row.append('<td>Error</td>');
        }
    });
}
addTotalPriceColumn();


// 4. Añadir una nueva FILA al final de la tabla para el Total (suma de Cantidad y CantidadPrecio_unid, dejando las otras casillas en blanco).
// Función para calcular la cantidad total
function totalQuantity() {
    let total = 0;
    $('tbody tr').each(function () {
        total += parseFloat($(this).children("td:eq(7)").text())
    });
    return total;
}

// Función para calcular el precio por unidad
function totalUnitPrice() {
    let total = 0;
    $('tbody tr').each(function () {
        total += parseFloat($(this).children("td:eq(8)").text().slice(1))
    });
    return total;
}

// Función para añadir la fila de totales al final de la tabla
function addTotalRow() {
    const totalRow = `<tr class="total-row">
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>${totalQuantity()}</td>
        <td>€${totalUnitPrice().toFixed(2)}</td>
        <td>€${(totalQuantity() * totalUnitPrice()).toFixed(2)}</td>
    </tr>`;

    // Añadir la fila de totales al final del tbody
    $('tbody').append(totalRow);
}
addTotalRow();


// 5. Añadir un checkbox justo antes del ID y un botón "Borrar" debajo de la tabla. Al pulsar "Borrar", se eliminarán todas las filas con el checkbox marcado.
// Checkbox
function addCheckbox() {
    $("thead tr").prepend("<th>Select</th>");

    $('tbody tr').each(function () {
        $(this).prepend("<td><input type='checkbox' class='row-checkbox></td>'")
    });
}
addCheckbox();

// Botón de borrado
function addDeleteButton() {
    const deleteButton = $('<button>Borrar</button>').attr('id', 'deleteButton');
    $('table').after(deleteButton);

    // Evento click
    deleteButton.on('click', function () {
        $('tbody .row-checkbox:checked').each(function () {
            $(this).closest('tr').remove();
        });
    });
}
addDeleteButton();