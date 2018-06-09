<?php

    $username = $_GET['username'];
    
    $array = ["hcc", "hucc", "hucongcong"];

    //1:表示存在  0表示不存在
    if(in_array($username, $array)) {
        echo "1";
    }else {
        echo "0";
    }

?>