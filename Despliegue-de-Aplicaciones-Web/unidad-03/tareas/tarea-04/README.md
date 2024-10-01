# Conexión a MySQL desde PHP.
<div align=center>
<img src="../../../../extras/vinilo.gif" alt="me" width="100%">
</div>

## Contenido
- [Creación de la conexión.](#creación-de-la-conexión)
- [Creación de la base de datos.](#creación-de-la-base-de-datos)

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
<div align=center>
    <img src="./imgs/img01.png" alt="1"/>
</div>
<div align=center>
    <img src="./imgs/img02.png" alt="2"/>
</div>
<div align=center>
    <img src="./imgs/img03.png" alt="3"/>
</div>
<div align=center>
    <img src="./imgs/img04.png" alt="4"/>
</div>
<div align=center>
    <img src="./imgs/img05.png" alt="5"/>
</div>
<div align=center>
    <img src="./imgs/img06.png" alt="6"/>
</div>