<?php

$conn = mysqli_connect( 'sql113.infinityfree.com', 'if0_37615302', 'Tqhna29gAcOoOI', 'if0_37615302_tarea_07');

$queryType = key($_POST);
$query = "";

switch ($queryType) {
    case "insert":
        $name = mysqli_real_escape_string($conn, $_POST["name"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $query = "INSERT INTO users(name, email, password) VALUES('$name', '$email', '$hash')";
        break;
    case "update":
        $name = mysqli_real_escape_string($conn, $_POST["name"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $id = mysqli_real_escape_string($conn, $_POST["uid"]);
        $query = "UPDATE users SET name = '$name', email = '$email', password = '$hash' WHERE id = $id";
        break;
    case "delete":
        $id = mysqli_real_escape_string($conn, $_POST["uid"]);
        $query = "DELETE FROM users WHERE id = $id";
        break;
    default:
        die("Invalid query type");
}

$result = mysqli_query($conn, $query);
mysqli_close($conn);

header("refresh: 3; url=forms.php");
echo "Updating data...";