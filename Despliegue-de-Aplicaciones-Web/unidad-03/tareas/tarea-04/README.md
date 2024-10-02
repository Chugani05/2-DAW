# Conexión a MySQL desde PHP.
<div align=center>
<img src="../../../../extras/vinilo.gif" alt="me" width="100%">
</div>

## Contenido
- [Creación de la conexión.](#creación-de-la-conexión)
- [Creación de la base de datos.](#creación-de-la-base-de-datos)
- [Inserción de datos en la base de datos.](#inserción-de-datos-en-la-base-de-datos)

## Creación de la conexión.
### Creamos la conexión a la base de datos, en este caso a una base de datos que llamaremos `prueba`.
```php
<?php

    $conn = mysqli_connect( 'localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

    echo "<pre>";
    print_r( $conn);

?>
```
## Creación de la base de datos.
### Con el `xampp` en marcha abrimos el `phpMyAdmin` en el navegador con la url `localhost/phpmyadmin/`.
<div align=center>
    <img src="./imgs/img01.png" alt="1"/>
</div>

### Ahora accedemos a la sección de `Database`, donde creamos una nueva base de datos a la que llamamos `prueba`.
<div align=center>
    <img src="./imgs/img02.png" alt="2"/>
</div>

### En la base de datos `prueba` creamos una tabla llamada `users`.
<div align=center>
    <img src="./imgs/img03.png" alt="3"/>
</div>

### Insertamos los datos correspondientes en la tabla.
<div align=center>
    <img src="./imgs/img04.png" alt="4"/>
</div>

### Al haber guardado los datos se nos crea la siguiente estructura de la tabla.
<div align=center>
    <img src="./imgs/img05.png" alt="5"/>
</div>

### Vemos que la conexión se conecta correctamente y no da ningun error.
<div align=center>
    <img src="./imgs/img06.png" alt="6"/>
</div>

## Inserción de datos en la base de datos.
### Cambiamos y añadimos contenido al documento de conexión.
```php
<?php

    echo "<pre>";

    $conn = mysqli_connect( 'localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

    // sentencia sql para incertar datos en la base de datos
    $insert = "insert into users( name, email) values( 'rashi', 'rcn02468@gmail.com')";

    // ejecuta una consulta en la base de datos
    $return = mysqli_query ( $conn, $insert);

    // muestra el valor de la sentencia por pantalla
    print_r( ( $return));

    // cerramos la conecion al servidor
    mysqli_close( $conn)

?>
```

### Comprobamos que los datos hayan sido insertado en `phpMyAdmin`.
<div align=center>
    <img src="./imgs/img07.png" alt="7"/>
</div>