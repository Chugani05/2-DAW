# Unidad 03 - jQuery

<div align=center>
    <img src="../../extras/data.gif" alt="data" width="100%">
</div>

## Content
- [Introducción](#introducción)
- [Selectores](#selectores)
- [Atributos](#atributos)
- [Manipulación del DOM](#manipulación-del-dom)
- [Eventos](#eventos)
- [Efectos](#efectos)
- [Delegación](#delegación)
- [AJAX](#ajax)
- [Funciones Útiles](#funciones-útiles)

----

### Introducción
- jQuery es una biblioteca de JavaScript diseñada para simplificar la manipulación del DOM, el manejo de eventos, la creación de animaciones y la realización de solicitudes AJAX.
- Es compatible con todos los navegadores principales, lo cual soluciona problemas de compatibilidad que surgen al escribir JavaScript puro.

Para incluir jQuery en tu proyecto, usa el siguiente enlace al CDN en tu archivo HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

----

### Selectores
Los selectores en jQuery funcionan de manera similar a los selectores de CSS, permitiendo acceder y manipular elementos HTML de manera sencilla.

Ejemplos de selectores:

```javascript
$("p") // Selecciona todos los elementos <p>
$(".miClase") // Selecciona todos los elementos con la clase 'miClase'
$("#miID") // Selecciona el elemento con el id 'miID'
```
   - **Selector de atributo**: selecciona elementos en función de atributos específicos.
     ```javascript
     $("a[target='_blank']") // Selecciona todos los enlaces con target='_blank'
     ```
   - **Selección múltiple**:
     ```javascript
     $("p, .miClase, #miID") // Selecciona todos los <p>, elementos con clase 'miClase', y elemento con id 'miID'
     ```

----

### Atributos
jQuery permite manipular atributos HTML mediante el método `.attr()`, útil para acceder y cambiar atributos dinámicamente.

   - **Obtener el valor de un atributo**:
     ```javascript
     let src = $("img").attr("src"); // Obtiene el valor del atributo 'src' de la imagen
     ```

   - **Establecer el valor de un atributo**:
     ```javascript
     $("img").attr("src", "nueva_imagen.jpg"); // Cambia el 'src' de todas las imágenes
     ```

   - **Eliminar un atributo**:
     ```javascript
     $("img").removeAttr("alt"); // Elimina el atributo 'alt' de todas las imágenes
     ```

   - **Propiedades**: `.prop()` se usa para propiedades como `checked`, `selected`, `disabled`.
     ```javascript
     $("input").prop("checked", true); // Marca todas las checkboxes
     ```

----

### Manipulación del DOM
jQuery facilita la manipulación del contenido y la estructura del DOM.

   - **Cambiar contenido**:
     - `.text()`: establece o devuelve el texto de un elemento.
     - `.html()`: establece o devuelve el HTML de un elemento.
     - `.val()`: establece o devuelve el valor de un campo de formulario.

     ```javascript
     $("#miElemento").text("Nuevo texto"); // Cambia el texto
     $("#miElemento").html("<b>Texto en negrita</b>"); // Cambia el contenido HTML
     $("#miInput").val("Nuevo valor"); // Cambia el valor de un campo de entrada
     ```

   - **Añadir o eliminar elementos**:
     - `.append()` y `.prepend()` agregan contenido dentro de un elemento, al final y al principio, respectivamente.
     - `.after()` y `.before()` insertan contenido fuera del elemento, después y antes, respectivamente.

     ```javascript
     $("#miDiv").append("<p>Texto añadido al final</p>");
     $("#miDiv").prepend("<p>Texto añadido al principio</p>");
     ```

   - **Eliminar elementos o contenido**:
     - `.remove()`: elimina el elemento del DOM.
     - `.empty()`: elimina el contenido interno de un elemento.

     ```javascript
     $(".miClase").remove(); // Elimina elementos con clase 'miClase'
     $("#miDiv").empty(); // Elimina todo el contenido de #miDiv
     ```

----

### Eventos
jQuery simplifica la asignación de eventos a los elementos de la página. Algunos eventos comunes incluyen `click`, `dblclick`, `hover`, `focus`, y `blur`.

```javascript
$("#miBoton").click(function() {
    alert("Botón clickeado");
});
```

   - **Delegación de eventos**:
     - La delegación de eventos se realiza con `.on()`, permitiendo asignar eventos a elementos que aún no existen en el DOM.

     ```javascript
     $(document).on("click", ".boton-dinamico", function() {
         alert("Botón dinámico clickeado");
     });
     ```

----

### Efectos
jQuery incluye varios efectos para manipular visualmente los elementos.

   - **Mostrar y ocultar**:
     ```javascript
     $("#miElemento").hide(1000); // Oculta el elemento en 1 segundo
     $("#miElemento").show(1000); // Muestra el elemento en 1 segundo
     ```

   - **Efectos de desvanecimiento**:
     ```javascript
     $("#miElemento").fadeIn(500); // Aparece con desvanecimiento
     $("#miElemento").fadeOut(500); // Desaparece con desvanecimiento
     ```

   - **Efectos de deslizamiento**:
     ```javascript
     $("#miElemento").slideUp(400); // Desliza hacia arriba y oculta
     $("#miElemento").slideDown(400); // Desliza hacia abajo y muestra
     ```

   - **Animaciones personalizadas**: con `.animate()`, puedes cambiar las propiedades CSS de un elemento.
     ```javascript
     $("#miElemento").animate({ opacity: 0.5, height: "50px" }, 1000);
     ```

----

### Delegación
La delegación es clave cuando trabajamos con elementos dinámicos. En vez de asignar un evento directamente al elemento, lo asignamos a un contenedor o al `document`.

```javascript
$(document).on("click", ".item-dinamico", function() {
    alert("Elemento dinámico clickeado");
});
```

Este enfoque es útil para agregar eventos a elementos generados después de cargar la página.

----

### AJAX
jQuery facilita la realización de solicitudes AJAX con métodos como `$.ajax()`, `$.get()`, y `$.post()`.

   - **Uso de `$.ajax()`**:
     ```javascript
     $.ajax({
         url: "datos.json", // URL del recurso
         method: "GET", // Método de la solicitud
         success: function(data) { // Función si la solicitud tiene éxito
             console.log(data);
         },
         error: function(error) { // Función si ocurre un error
             console.error("Error:", error);
         }
     });
     ```

   - **Métodos abreviados**:
     ```javascript
     $.get("datos.json", function(data) {
         console.log(data); // Maneja la respuesta de la solicitud GET
     });

     $.post("guardar.php", { nombre: "Juan", edad: 30 }, function(respuesta) {
         console.log(respuesta); // Maneja la respuesta de la solicitud POST
     });
     ```

----

### Funciones Útiles
   - **each()**: recorre cada elemento de una selección.
     ```javascript
     $("li").each(function() {
         console.log($(this).text());
     });
     ```
   - **attr()**: obtiene o establece el valor de un atributo.
     ```javascript
     $("img").attr("src", "nueva_imagen.jpg");
     ```
