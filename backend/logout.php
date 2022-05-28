<?php
    include_once "cors.php";

    session_start();

    session_destroy();

    echo json_encode(array("action" => "logout", "session" => false));
?>