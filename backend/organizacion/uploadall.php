<?php
    include_once "cors.php";

    header("Content-type: application/json; charset=utf-8");
    $input = json_decode(file_get_contents("php://input"), true);

    $link = mysqli_connect("localhost", "admin", "root", "secundaria");

    $z=1;
    for ($i = 0 ; $i < count($input); $i++){
        $area = $input[$i];
        $area_name = mysqli_real_escape_string($link, $area["name"]);

        $sql = "INSERT INTO areas (area_id, name) VALUES(NULL, '$area_name');";
        mysqli_query($link, $sql);

        
        for($j = 0; $j < count($area["subareas"]); $j++){
            $subarea = $area["subareas"][$j];
            $subarea_name = mysqli_real_escape_string($link, $subarea["name"]);

            $sql = "INSERT INTO puestos (job_id, area_id, name) VALUES(NULL, $i+1, '$subarea_name');";
            mysqli_query($link, $sql);

            for($k = 0; $k < count($subarea["members"]); $k++){
                $member = $subarea["members"][$k];
                $member_name = $member["name"];

                $num_names = substr_count($member_name,' ') - 2;

                $style = substr($member_name, 0, strpos($member_name, ' '));
                $member_name = substr($member_name, strpos($member_name, ' ')+1, strlen($member_name)-1);

                $name = substr($member_name, 0, strpos($member_name, ' '));
                $member_name = substr($member_name, strpos($member_name, ' ')+1, strlen($member_name)-1);

                if($num_names === 2){
                    $name = $name." ".substr($member_name, 0, strpos($member_name, ' '));
                    $member_name = substr($member_name, strpos($member_name, ' ')+1, strlen($member_name)-1);
                }

                $last_name = $member_name;

                $style = mysqli_real_escape_string($link, $style);
                $name = mysqli_real_escape_string($link, $name);
                $last_name = mysqli_real_escape_string($link, $last_name);

                $sql = "INSERT INTO personal (pers_id, job_id, style, name, last_name) VALUES(NULL, $z, '$style', '$name', '$last_name');";
                
                mysqli_query($link, $sql);
            }
            $z = $z+1;
        }
    }

    mysqli_close($link);

    echo json_encode("a");

?>