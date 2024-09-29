# Métodos GET y POST en PHP
<div align=center>
<img src="../../../../extras/vinilo.gif" alt="me" width="100%">
</div>

## Contenido
- [Introducción](#introducción)
- [Metodo GET](#método-get)
- [Metodo POST](#método-post)
- [Comparación entre GET y POST](#comparación-entre-get-y-post)
- [Conclución](#conclusión)

## Introducción
Los formularios web son una de las formas más comunes de interactuar con los usuarios en aplicaciones web. Para enviar los datos de los formularios al servidor, se utilizan los métodos **GET** y **POST**, que son dos tipos de solicitudes HTTP. En PHP, se pueden procesar estos datos mediante las superglobales `$_GET` y `$_POST`, dependiendo del método utilizado para enviar la información.

Este informe tiene como objetivo explicar cómo funcionan los métodos **GET** y **POST**, cuándo utilizarlos, las ventajas y desventajas de cada uno, y ejemplos prácticos de su uso en PHP.

## Método GET
El método **GET** envía los datos del formulario como parte de la URL de la solicitud. Esto significa que los datos son visibles en la barra de direcciones del navegador y se adjuntan a la URL como una cadena de consulta. PHP recibe estos datos en la superglobal `$_GET`.

### Características:
- **Visibilidad**: Los datos son visibles en la URL.
- **Limitación de tamaño**: Existe una limitación en la cantidad de datos que se pueden enviar debido a la longitud máxima de la URL (generalmente alrededor de 2048 caracteres).
- **Uso recomendado**: Para búsquedas, filtros o cuando los datos no son sensibles.
- **Facilidad para compartir enlaces**: Los datos quedan en la URL, lo que permite que las páginas puedan ser compartidas fácilmente.

### Ejemplo de Código PHP con GET:

#### Archivo `index.php` (Formulario):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario GET</title>
</head>
<body>
    <form action="get_post.php" method="get">
        Nombre: <input type="text" name="usuario">
        <br>
        <input type="submit" name="Enviar" value="Enviar">
    </form>
</body>
</html>
```

#### Archivo `get_post.php` (Procesamiento de datos con GET):
```php
<?php
    if (isset($_GET['usuario'])) {
        // Obtener y sanitizar el dato enviado por el formulario
        $nombre = htmlspecialchars($_GET['usuario']);
        echo "Hola, " . $nombre . "!";
    } else {
        echo "No se ha enviado ningún nombre.";
    }
?>
```

#### Explicación:
- El formulario envía el valor del campo `usuario` a `get_post.php` mediante el método **GET**.
- En `get_post.php`, la superglobal `$_GET['usuario']` accede al valor enviado.
- La función `htmlspecialchars()` se utiliza para evitar vulnerabilidades de seguridad, como el Cross-Site Scripting (XSS).

#### Ejemplo de URL:
Si el usuario ingresa "Rashi" en el campo de texto, la URL se verá de la siguiente manera:
```
http://localhost/get_post.php?usuario=Rashi
```
En la página, se mostrará el mensaje: `Hola, Rashi!`.

## Método POST

El método **POST** envía los datos del formulario en el cuerpo de la solicitud HTTP, lo que significa que no son visibles en la URL. Este método es más seguro para enviar información sensible, como contraseñas o datos personales. PHP recibe los datos enviados mediante **POST** a través de la superglobal `$_POST`.

### Características:
- **Seguridad**: Los datos no son visibles en la URL, por lo que es más seguro para enviar información sensible (aunque siempre se recomienda usar HTTPS).
- **No limitado por la longitud de la URL**: No hay restricciones significativas en cuanto a la cantidad de datos que se pueden enviar.
- **Uso recomendado**: Para formularios de inicio de sesión, registros o cualquier situación en la que se necesite enviar grandes cantidades de información o datos sensibles.

### Ejemplo de Código PHP con POST:

#### Archivo `index.php` (Formulario):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario POST</title>
</head>
<body>
    <form action="get_post.php" method="post">
        Nombre: <input type="text" name="usuario">
        <br>
        <input type="submit" name="Enviar" value="Enviar">
    </form>
</body>
</html>
```

#### Archivo `get_post.php` (Procesamiento de datos con POST):
```php
<?php
    if (isset($_POST['usuario'])) {
        // Obtener y sanitizar el dato enviado por el formulario
        $nombre = htmlspecialchars($_POST['usuario']);
        echo "Hola, " . $nombre . "!";
    } else {
        echo "No se ha enviado ningún nombre.";
    }
?>
```

#### Explicación:
- El formulario envía el valor del campo `usuario` a `get_post.php` mediante el método **POST**.
- En `get_post.php`, la superglobal `$_POST['usuario']` accede al valor enviado.
- La función `htmlspecialchars()` sigue siendo necesaria para prevenir vulnerabilidades XSS.

## Comparación entre GET y POST

| Característica         | GET                                          | POST                                          |
|------------------------|----------------------------------------------|-----------------------------------------------|
| **Visibilidad de datos** | Los datos son visibles en la URL             | Los datos no son visibles en la URL            |
| **Límite de datos**     | Limitado por la longitud de la URL           | No tiene límite significativo en el tamaño     |
| **Seguridad**           | Menos seguro para datos sensibles            | Más seguro para información sensible, pero se recomienda HTTPS |
| **Uso típico**          | Parámetros de búsqueda, filtros, navegación  | Formularios de autenticación, envío de datos confidenciales |
| **Método de acceso**    | `$_GET['variable']`                          | `$_POST['variable']`                          |
| **Facilidad de compartir** | Fácil de compartir, ya que los datos están en la URL | No permite compartir los datos a través de la URL |

## Conclusión

Tanto **GET** como **POST** son métodos útiles para enviar datos en aplicaciones web, pero cada uno tiene su propósito específico:
- **GET** es ideal para situaciones donde los datos no son sensibles, se requiere que los parámetros estén en la URL, y no se necesita enviar grandes volúmenes de información.
- **POST** es más adecuado para enviar datos sensibles, información grande o cuando se busca ocultar los datos del usuario en la URL.

Es importante seleccionar el método adecuado según el tipo de datos que se maneje, además de asegurar siempre que los datos recibidos sean validados y sanitizados correctamente para proteger la aplicación de posibles vulnerabilidades.