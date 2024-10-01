<?php

    $conn = mysqli_connect( 'localhost', 'root', 'DPLr2005', 'prueba');

    echo "<pre>";
    print_r( $conn);

    $insert = "insert into users( name, email) values( 'rashi', 'rcn02468@gmail.com')";

    $return = mysqli_query ( $conn, $insert);

    print_r( ( $return));

    mysqli_close( $conn)

?>