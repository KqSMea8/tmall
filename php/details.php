<?php
  require "conn.php";
// 传过来//item.taobao.com/item.htm?spm=875.7931836/B.2017039.6.66144265TZekjI&amp;id=12664780638&amp;scm=100
if(isset($_GET['spid'])){
  $spid=$_GET['spid'];
  $r=mysql_query("select * from detail where spid='$spid'");
  if($r){
      $arr=array();
      for($i=0;$i<mysql_num_rows($r);$i++){
        $arr[$i]=mysql_fetch_assoc($r);
      }
      echo json_encode($arr);
    }else{
      echo mysql_error();
    }
  // header('Location:http://10.31.164.68/tmall/dist/details.html?'.$spid);
}else{
    exit("非法操作");
  } 
?>