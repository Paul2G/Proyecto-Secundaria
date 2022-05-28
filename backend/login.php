<?php
    include_once "cors.php";
    include_once "inactivitycheck.php";

    $link = mysqli_connect("localhost", "admin", "root", "secundaria");

    $correctUser = "";
    $correctPass = "";
    $user = $_POST["user"];             $user = mysqli_real_escape_string($link, $user);
    $password = $_POST["password"];     $password = mysqli_real_escape_string($link, $password);

    $sql = "SELECT usuarios.* FROM usuarios WHERE usuarios.name = '$user';";
    $result = mysqli_query($link, $sql);

    if (mysqli_num_rows($result) > 0) {
        $fila = mysqli_fetch_assoc($result);
        $correctUser = $fila["name"];
        $correctPass = $fila["password"];
    }

    mysqli_close($link);

    if(password_verify($password, $correctPass) && $correctUser === $user){
        $_SESSION["usuario"] = $user;

        echo json_encode(array("action" => "login", "session" => true));
    } else {
        session_destroy();
        echo json_encode(array("action" => "login", "session" => false));
    }
?>