<?php
 
//Define your host here.
$HostName = "ec2-54-255-208-140.ap-southeast-1.compute.amazonaws.com";
// $HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "dbmTestPublic";
// $DatabaseName = "dbamooba";
 
//Define your database username here.
$HostUser = "dev_admin";
// $HostUser = "dev_admin";
 
//Define your database password here.
$HostPass = "D3vAdm!n";
// $HostPass = "Admin123!";


$db_conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
?>