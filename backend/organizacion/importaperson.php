<?php 
    include_once "../cors.php";

    header("Content-type: application/json; charset=utf-8");
    $input = json_decode(file_get_contents("php://input"), true);

    $pers_id = $input["id"];

    $link = mysqli_connect("localhost", "admin", "root", "secundaria");
    
    $sql = "SELECT personal.* FROM personal WHERE pers_id = '$pers_id';";
    $result = mysqli_query($link, $sql);

    $fila = mysqli_fetch_assoc($result);
    $return = array("id" => $fila["pers_id"],
                    "style" => $fila["style"],
                    "name" => $fila["name"],
                    "lastname" => $fila["last_name"]);

    mysqli_close($link);

    echo json_encode($return);
?>
                            