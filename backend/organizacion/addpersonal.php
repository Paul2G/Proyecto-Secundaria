<?php
    include_once "../cors.php";
    include_once "../inactivitycheck.php";

    if (empty($_SESSION["usuario"])) {
        echo json_encode(array("action" => "addPersonal","session" => false));
    } else {
        $link = mysqli_connect("localhost", "admin", "root", "secundaria");

        $style = $_POST['style'];
        $name = $_POST['name'];
        $lastname = $_POST['lastname'];
        $job_id = $_POST['puesto'];

        $name = mysqli_real_escape_string($link, $name);
        $lastname = mysqli_real_escape_string($link, $lastname);
        $style = mysqli_real_escape_string($link, $style);
        
        $sql = "INSERT INTO personal (pers_id, job_id, style, name, last_name) VALUES (NULL, '$job_id', '$style', '$name', '$lastname')";

        mysqli_query($link, $sql);
        mysqli_close($link);

        echo json_encode(array("action" => "addPersonal", "session" => true));
    }


