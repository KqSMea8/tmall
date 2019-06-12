<?php
  require "conn.php";
  if(isset($_GET['typeid'])){
    $typeid=$_GET['typeid'];
    if($typeid=='brand-list'){
      $r=mysql_query("select * from brand");
    }
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