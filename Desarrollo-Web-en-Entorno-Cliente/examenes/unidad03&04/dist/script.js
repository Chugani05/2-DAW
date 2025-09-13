"use strict";
// 1. Asignar un fondo diferente a la cabecera, a las filas pares y a las impares, y hacer que al pasar el ratón por una fila, el color de fondo cambie.
var BackgroundColor;
(function (BackgroundColor) {
    BackgroundColor["HEADER"] = "pink";
    BackgroundColor["ODD_ROW"] = "lightgreen";
    BackgroundColor["EVEN_ROW"] = "lightblue";
    BackgroundColor["HOVER"] = "lightgray"; //Color par el hover
})(BackgroundColor || (BackgroundColor = {}));
$(document).ready(function () {
    // Asignar color de fondo al encabezado
    $("thead").css("background-color", BackgroundColor.HEADER);
    // Asignar color de fondo a las filas pares e impares
    $("tbody tr:odd").css("background-color", BackgroundColor.ODD_ROW);
    $("tbody tr:even").css("background-color", BackgroundColor.EVEN_ROW);
    // Cambiar color de fondo al pasar el ratón por encima
    $("tbody tr").hover(function () {
        $(this).css("background-color", BackgroundColor.HOVER);
    }, 
    // Volver a asignar el color anterior dependiendo de la paridad de la fila
    function () {
        var isOddRow = $(this).index() % 2 !== 0;
        var originalColor = isOddRow ? BackgroundColor.ODD_ROW : BackgroundColor.EVEN_ROW;
        $(this).css("background-color", originalColor);
    });
});
// 2. Transformar las siguientes columnas:
// Función para capitalizar la primera letra de cada palabra
function capitalizeWords(text) {
    return text.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
// Función para transformar el valor de Sexo
function transformSex(sex) {
    return sex === 'M' ? 'Hombre' : 'Mujer';
}
// Aplicar transformaciones en las columnas
function transformColumns() {
    $('tbody tr').each(function () {
        var row = $(this);
        // Transformar columna de Nombre
        var nameCell = row.find('td').eq(1); // Ajustar el índice según el orden
        nameCell.text(capitalizeWords(nameCell.text()));
        // Transformar columna de Sexo
        var sexCell = row.find('td').eq(2); // Ajustar el índice según el orden
        sexCell.text(transformSex(sexCell.text()));
        // Transformar columna de Email
        var emailCell = row.find('td').eq(3); // Ajustar el índice según el orden
        var email = emailCell.text();
        emailCell.html("<a href=\"mailto:".concat(email, "\">").concat(email, "</a>"));
        // Cambiar fondo según color
        var colorCell = row.find('td').eq(4); // Ajustar el índice según el orden
        colorCell.css('background-color', colorCell.text());
        // Cambiar texto por SVG
        var recogerCell = row.find('td').eq(6); // Ajustar el índice según el orden
        var recogerText = recogerCell.text().toLowerCase();
        var recogerImage = '';
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
        var row = $(this);
        var cantidad = parseFloat($(this).children("td:eq(7)").text()); // Índice para Cantidad
        var precioUnid = parseFloat($(this).children("td:eq(8)").text().slice(1)); // Índice para Precio_unid
        if (!isNaN(cantidad) && !isNaN(precioUnid)) {
            var total = cantidad * precioUnid;
            row.append("<td>\u20AC".concat(total.toFixed(2), "</td>"));
        }
        else {
            row.append('<td>Error</td>');
        }
    });
}
addTotalPriceColumn();
// 4. Añadir una nueva FILA al final de la tabla para el Total (suma de Cantidad y CantidadPrecio_unid, dejando las otras casillas en blanco).
// Función para calcular la cantidad total
function totalQuantity() {
    var total = 0;
    $('tbody tr').each(function () {
        total += parseFloat($(this).children("td:eq(7)").text());
    });
    return total;
}
// Función para calcular el precio por unidad
function totalUnitPrice() {
    var total = 0;
    $('tbody tr').each(function () {
        total += parseFloat($(this).children("td:eq(8)").text().slice(1));
    });
    return total;
}
// Función para añadir la fila de totales al final de la tabla
function addTotalRow() {
    var totalRow = "<tr class=\"total-row\">\n        <td>Total</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td>".concat(totalQuantity(), "</td>\n        <td>\u20AC").concat(totalUnitPrice().toFixed(2), "</td>\n        <td>\u20AC").concat((totalQuantity() * totalUnitPrice()).toFixed(2), "</td>\n    </tr>");
    // Añadir la fila de totales al final del tbody
    $('tbody').append(totalRow);
}
addTotalRow();
// 5. Añadir un checkbox justo antes del ID y un botón "Borrar" debajo de la tabla. Al pulsar "Borrar", se eliminarán todas las filas con el checkbox marcado.
// Checkbox
function addCheckbox() {
    $("thead tr").prepend("<th>Select</th>");
    $('tbody tr').each(function () {
        $(this).prepend("<td><input type='checkbox' class='row-checkbox></td>'");
    });
}
addCheckbox();
// Botón de borrado
function addDeleteButton() {
    var deleteButton = $('<button>Borrar</button>').attr('id', 'deleteButton');
    $('table').after(deleteButton);
    // Evento click
    deleteButton.on('click', function () {
        $('tbody .row-checkbox:checked').each(function () {
            $(this).closest('tr').remove();
        });
    });
}
addDeleteButton();
