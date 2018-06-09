<?php
  //如果后端需要返回xml数据， 需要指定content-type:text/xml
  header("content-type:text/xml;charset=utf-8");
  $result = file_get_contents("02.data.xml");
  echo $result;
?>