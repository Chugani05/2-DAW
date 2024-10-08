<?php

echo "<pre>";
$conn = mysqli_connect('localhost', 'root', 'DPLr2005', 'prueba');

$sql = 'UPDATE users SET name = "vivian" WHERE id = 2';
$result = mysqli_query($conn, $sql);
print_r($result);

mysqli_close($conn);

?>