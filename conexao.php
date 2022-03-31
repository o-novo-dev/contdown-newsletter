<?php

$dsn = 'mysql:host=localhost;port=3306;dbname=contador';
$username = 'root';
$password = '';
$options = array(
  PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 

try{    
  $dbh = new PDO($dsn, $username, $password, $options);
}catch (PDOException $e){
   die ('DB Error conection. Error: ' . $e->message);
}