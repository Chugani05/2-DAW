<?php

    echo "<pre>";

    $conn = mysqli_connect( 'localhost', 'root', 'DPLr2005', 'prueba');

    // sentencia sql para incertar datos en la base de datos
    $insert = "insert into users(name, email) values('rashi', 'rcn02468@gmail.com')";

    // ejecuta una consulta en la base de datos
    $return = mysqli_query( $conn, $insert);

    // muestra el valor de la sentencia por pantalla
    print_r( $return);

    // cerramos la conecion al servidor
    mysqli_close( $conn);

?>