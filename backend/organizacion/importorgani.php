<?php
    include_once "../cors.php";

    $link = mysqli_connect("localhost", "admin", "root", "secundaria");
    
    $sql = "SELECT areas.* FROM areas ORDER BY area_id ASC;";
    $areas = mysqli_query($link, $sql);

    if (mysqli_num_rows($areas) > 0) {
        while($area = mysqli_fetch_assoc($areas)){
            $area_id = $area["area_id"];
            $sql = "SELECT puestos.* FROM puestos WHERE area_id='$area_id' ORDER BY area_id ASC;";
            $puestos = mysqli_query($link, $sql);

            if (mysqli_num_rows($puestos) > 0) {
                while($puesto = mysqli_fetch_assoc($puestos)){
                    $puesto_id = $puesto["job_id"];
                    $sql = "SELECT personal.* FROM personal WHERE job_id='$puesto_id' ORDER BY job_id ASC;";
                    $personal = mysqli_query($link, $sql);

                    if (mysqli_num_rows($personal) > 0) {
                        while($person = mysqli_fetch_assoc($personal)){
                            $_person = array("id" => $person["pers_id"],
                                            "style" => $person["style"],
                                            "name" => $person["name"],
                                            "last_name" => $person["last_name"]);

                            $_personal[] = $_person;
                        }
                    }
                    $_puesto = array("id" => $puesto["job_id"],
                                    "name" => $puesto["name"], 
                                    "personal" => $_personal);
                    $_puestos[] = $_puesto;
                    unset($_personal);
                }
            }
            $_area = array("id" => $area["area_id"],
                            "name" => $area["name"],
                            "puestos" => $_puestos);
            $_areas[] = $_area;
            unset($_puestos);
        }
    }

    mysqli_close($link);

    echo json_encode($_areas);
?>