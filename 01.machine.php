<?php
  header('content-type:text/html;charset=utf-8');
  $results = array(
    "吃了没",
    "我们不约！！！",
    "爱过",
    "你今天长得好帅",
    "这你也信？",
    "曾经有一份真挚的爱情摆在我面前，我却没有珍惜",
    "情不知所以，一往而深",
    "陪伴是最长情的告白"
  );


  //求一个随机， 0-length-1
  $index = array_rand($results);
  echo $results[$index];

  sleep(1);

?>