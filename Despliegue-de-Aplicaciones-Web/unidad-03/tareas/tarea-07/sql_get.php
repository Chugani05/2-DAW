<?php

$conn = mysqli_connect( 'sql113.infinityfree.com', 'if0_37615302', 'Tqhna29gAcOoOI', 'if0_37615302_tarea_07');

$query = "select * from users";
$result = mysqli_query($conn, $query);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
print json_encode($rows);

mysqli_close($conn);

?>