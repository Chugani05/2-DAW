<?php
// echo "<pre>";

$conn = mysqli_connect('localhost', 'root', 'DPLr2005', 'prueba');

$sql = 'select id, name, email, created from users';
$result = mysqli_query($conn, $sql);
// print_r($result);

$rows = mysqli_fetch_array($result, MYSQLI_NUM);
// print_r($rows);

do {
    $data[] = $rows;
} while ($rows = mysqli_fetch_array($result, MYSQLI_NUM));

echo "<pre>";
print_r($data);
?>