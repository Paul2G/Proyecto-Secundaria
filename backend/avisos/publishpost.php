<?php
    include_once "../cors.php";
    include_once "../inactivitycheck.php";

    if (empty($_SESSION["usuario"])) {
        echo json_encode(array("action" => "publishPost","session" => false));
    } else {
        $link = mysqli_connect("localhost", "admin", "root", "secundaria");

        $title = $_POST['title'];
        $content = $_POST['content'];
    
        $title = mysqli_real_escape_string($link, $title);
        $content = mysqli_real_escape_string($link, $content);
        
        $sql = "INSERT INTO anuncios (post_id, title, content, date) VALUES (NULL, '$title', '$content', current_timestamp());";
    
        mysqli_query($link, $sql);
        mysqli_close($link);

        echo json_encode(array("action" => "publishPost", "session" => true));
    }
?>