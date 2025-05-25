# Redireccionamiento entre páginas PHP.

<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="80%">
</div>

## Contenido
- [Introducción](#introducción)
- [Ejemplo Práctico de Redireccionamiento](#ejemplo-práctico-de-redireccionamiento)
- [Flujo de Ejecución Completo](#flujo-de-ejecución-completo)
- [Conclución](#conclusión)

## Introducción
El redireccionamiento entre páginas web es una técnica común utilizada en desarrollo web para guiar a los usuarios de una página a otra de manera automática. En PHP, esto se logra principalmente mediante la función `header()`, que envía encabezados HTTP al navegador para indicar que debe realizar una nueva solicitud a una URL específica. Este informe explora el uso del redireccionamiento con ejemplos prácticos que incluyen el envío de parámetros entre páginas utilizando el método **GET**.

## Ejemplo Práctico de Redireccionamiento
### Descripción del Archivo `redireccion.php`

Este archivo contiene un enlace simple que redirige al usuario a `pagina2.php`, pasando un parámetro llamado `name` a través de la URL mediante el método **GET**.

#### Código:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Redireccionamiento PHP</title>
</head>
<body>
    
<a href="pagina2.php?name=rashi">Redireccionar a Página 2</a>

</body>
</html>
```

#### Explicación:
- El enlace `<a>` dirige al usuario a `pagina2.php`, pasando el parámetro `name=rashi` en la URL.
- Cuando el usuario hace clic en el enlace, se envía una solicitud a `pagina2.php` con el valor `rashi` asociado al parámetro `name`.

### Descripción del Archivo `pagina2.php`

Este archivo recibe el parámetro `name` enviado desde `redireccion.php` y lo redirige a otra página (`pagina3.php`), adjuntando el mismo parámetro a la nueva URL.

#### Código:

```php
<?php

echo "Página 2<br>";

// Muestra los datos enviados por GET
print_r($_GET);

// Redirecciona a pagina3.php, enviando el parámetro 'name' a través de GET
header("Location: pagina3.php?name=" . $_GET['name']);

// Detener la ejecución después del redireccionamiento
exit();

?>
```

#### Explicación:
- `print_r($_GET);` muestra el contenido de los parámetros enviados mediante **GET**.
- La función `header("Location: ...")` redirige al usuario a `pagina3.php` y reenvía el valor del parámetro `name` recibido desde `redireccion.php`.
- Se utiliza `exit()` para detener la ejecución del script después del redireccionamiento, asegurando que no se procese más código.

#### Ejemplo de Salida:
Cuando se llega a esta página con la URL:
```
http://localhost/pagina2.php?name=rashi
```
El navegador mostrará:
```
Página 2
Array ( [name] => rashi )
```
Y luego redirigirá automáticamente a `pagina3.php` con el parámetro `name=rashi`.

### Descripción del Archivo `pagina3.php`

Este archivo es el destino final después de los redireccionamientos. Recibe el parámetro `name` y lo muestra al usuario.

#### Código:

```php
<?php

echo "Página 3<br>";

// Muestra los datos enviados por GET
print_r($_GET);

?>
```

#### Explicación:
- Al igual que en `pagina2.php`, `print_r($_GET)` muestra los parámetros enviados mediante **GET**.
- En este caso, muestra el valor del parámetro `name` que fue pasado desde `pagina2.php`.

#### Ejemplo de Salida:
Cuando se llega a esta página con la URL:
```
http://localhost/pagina3.php?name=rashi
```
El navegador mostrará:
```
Página 3
Array ( [name] => rashi )
```

## Flujo de Ejecución Completo
1. **Usuario hace clic en el enlace de `redireccion.php`**:
   - El enlace envía al usuario a `pagina2.php` con el parámetro `name=rashi`.
   - URL: `http://localhost/pagina2.php?name=rashi`

2. **`pagina2.php`**:
   - Muestra el valor del parámetro `name` en la página (`rashi`).
   - Redirige al usuario a `pagina3.php` con el mismo parámetro.
   - URL de redirección: `http://localhost/pagina3.php?name=rashi`

3. **`pagina3.php`**:
   - Muestra el valor del parámetro `name` que fue pasado desde `pagina2.php`.
   - Valor mostrado: `Array ( [name] => rashi )`

## Conclusión

El redireccionamiento en PHP utilizando la función `header()` es una herramienta eficaz para guiar a los usuarios a diferentes partes de un sitio web. El uso de parámetros GET permite transferir información de una página a otra, lo cual es muy útil para flujos de trabajo donde se necesita mantener cierta información a lo largo de la navegación del usuario.

Es esencial seguir buenas prácticas de validación y sanitización de datos para evitar vulnerabilidades de seguridad. Además, es recomendable utilizar **POST** o sesiones para el manejo de datos sensibles en lugar de **GET**.

Este ejemplo ha demostrado cómo pasar un parámetro desde una página a otra utilizando un redireccionamiento, y cómo manejar estos datos en el flujo de una aplicación web.