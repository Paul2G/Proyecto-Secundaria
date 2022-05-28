<?php
    session_start();

    $maxSessionTime = 60;

    if (!isset($_SESSION['tiempo'])) {
        $_SESSION['tiempo']=time();
    }
    else if (time() - $_SESSION['tiempo'] > $maxSessionTime) {
        session_destroy();

        echo json_encode(array("action" => "inactivityCheck", "session" => false));
        exit();  
    }

    $_SESSION['tiempo']=time(); 