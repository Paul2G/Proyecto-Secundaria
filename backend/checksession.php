<?php
    include_once "cors.php";
    include_once "inactivitycheck.php";

    if (empty($_SESSION["usuario"])) {
        echo json_encode(array("action" => "checkSession", "session" => false));
    } else {
        echo json_encode(array("action" => "checkSession", "session" => true));
    }
?>