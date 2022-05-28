<?php
    include_once "../cors.php";
    include_once "../inactivitycheck.php";

    if (empty($_SESSION["usuario"])) {
        echo json_encode(array("action" => "editPost", "session" => false));
    } else {
        $link = mysqli_connect("localhost", "admin", "root", "secundaria");

        $id = $_POST["id"];
        $title = $_POST['title'];
        $content = $_POST['content'];
        $title = mysqli_real_escape_string($link, $title);
        $content = mysqli_real_escape_string($link, $content);
    
        $sql = "UPDATE anuncios SET title = '$title', content = '$content' WHERE post_id = '$id';";
    
        mysqli_query($link, $sql);
    
        mysqli_close($link);

        echo json_encode(array("action" => "editPost", "session" => true));
    }
?>