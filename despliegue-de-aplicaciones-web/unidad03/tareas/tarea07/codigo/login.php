<?php

$conn = mysqli_connect( 'sql113.infinityfree.com', 'if0_37615302', 'Tqhna29gAcOoOI', 'if0_37615302_tarea_07');

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "select email, password from users";
$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_all($result);

for ($i = 0; $i < count($rows); $i++) {
    $row = mysqli_fetch_array($result);
    $db_email = $rows[$i][0];
    $db_password = $rows[$i][1];
    if ($db_email == $email and password_verify($password, $db_password)) {
        if ($email == "admin@example.com") {
            header("Location:forms.php");
            die();
        } else {
            echo "No tienes credenciales para acceder a esta página";
            die();
        }
    }
}

header("Location:index.html");

    
mysqli_close($conn);

?>