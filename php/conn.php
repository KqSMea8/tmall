<?php
    header('content-type:text/html;charset=utf-8');
    // define('HOST','10.31.164.68');
    define('HOST','localhost');
    define('USER','root');
    define('PWD','');
    
    $conn=@mysql_connect(HOST,USER,PWD);
    if(!$conn){
        die('连接错误'.mysql_error());
    }
    mysql_select_db('tmall');
    mysql_query('SET NAMES UTF8');
    
?>
