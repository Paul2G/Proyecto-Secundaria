<?php
    include_once "../cors.php";
    include_once "../inactivitycheck.php";

    if (empty($_SESSION["usuario"])) {
        echo json_encode(array("action" => "editPerson", "session" => false));
    } else {
        $link = mysqli_connect("localhost", "admin", "root", "secundaria");

        $id = $_POST["id"];
        $style = $_POST['style'];
        $name = $_POST['name'];
        $lastname = $_POST['lastname'];
        $style = mysqli_real_escape_string($link, $style);
        $name = mysqli_real_escape_string($link, $name);
        $lastname = mysqli_real_escape_string($link, $lastname);
    
        $sql = "UPDATE personal SET style = '$style', name = '$name', last_name = '$lastname' WHERE pers_id = '$id';";
    
        mysqli_query($link, $sql);
    
        mysqli_close($link);

        echo json_encode(array("action" => "editPerson", "session" => true));
    }
?>