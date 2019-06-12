<?php
  require "conn.php";
  if(isset($_GET['typeid'])){
    $typeid=$_GET['typeid'];
    $n=0;
    if($typeid=='J_FloorTMGJ'){
      $n=7;
    }else if($typeid=='J_FloorTMCS'){
      $n=6;
    }else{
      $n=8;
    }
    $r=mysql_query("select * from content where typeid='$typeid' order by rand() limit $n");
    if($r){
      $arr=array();
      for($i=0;$i<mysql_num_rows($r);$i++){
        $arr[$i]=mysql_fetch_assoc($r);
      }
      echo json_encode($arr);
    }else{
      echo mysql_error();
    }
  }else{
    exit("非法操作");
  }
?>