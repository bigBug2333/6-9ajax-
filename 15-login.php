<?php

  header("content-type:text/html; charset=utf-8");

  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username === "admin" && $password === "123456") {
    $array = array(
      "status" => 1,
      "message" => "登录成功"
    );
  }else {
    $array = array(
      "status" => 0,
      "message" => "用户名或者密码错误"
    );
  }

  echo json_encode($array, JSON_UNESCAPED_UNICODE);

?>