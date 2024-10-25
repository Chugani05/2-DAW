$(document).ready(function () {
    let productosSeleccionados = {};

    // Botón para cargar subcategorías
    $('.menu-btn').click(function () {
        const categoria = $(this).data('category');
        cargarSubcategorias(categoria);
    });

    // Función para cargar subcategorías
    function cargarSubcategorias(categoria) {
        // Limpiar
        $('.sub-menu').empty();
        $('.product-list').empty();
       
        // Definir las subcategorías
        const subcategorias = {
            'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
            'primer-plato': ['Sopa', 'Ensalada'],
            'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
            'postres': ['Dulces', 'Frutas']
        };

        // Cargar subcategorías
        subcategorias[categoria].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });

        // Evento para cargar los productos de la subcategoría
        $('.sub-menu-btn').click(function () {
            const subcategoria = $(this).data('subcategory');
            cargarProductos(subcategoria);
        });
    }
})