<?php
    include_once "../cors.php";

    $link = mysqli_connect("localhost", "admin", "root", "secundaria");

    $sql = 'SELECT anuncios.* FROM anuncios ORDER BY date DESC;';

    $result = mysqli_query($link, $sql);

    if (mysqli_num_rows($result) > 0) {
        while($fila = mysqli_fetch_assoc($result)){
            $array = array(
                "id" => $fila["post_id"],
                "title" => $fila["title"],
                "content" => $fila["content"],
                "date" => $fila["date"]);

            $return[] = $array;
        }
    }
    
    mysqli_close($link);

    echo json_encode($return);
?>