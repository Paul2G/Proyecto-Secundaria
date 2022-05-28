<?php
    include_once "../cors.php";
    include_once "../inactivitycheck.php";

    if (empty($_SESSION["usuario"])) {
        echo json_encode(array("action" => "deletePerson", "session" => false));
    } else {
        header("Content-type: application/json; charset=utf-8");
        $input = json_decode(file_get_contents("php://input"), true);
    
        $id = $input['id'];
    
        $link = mysqli_connect("localhost", "admin", "root", "secundaria");
        $sql = "DELETE FROM personal WHERE personal.pers_id = '$id'";
    
        mysqli_query($link, $sql);
        mysqli_close($link);

        echo json_encode(array("action" => "deletePerson", "session" => true));
    }
?>