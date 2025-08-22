<?php
date_default_timezone_set('Asia/Jakarta');

$db_host = "localhost";
// $db_host = "localhost";
$db_user = "root";
// $db_user = "rfitscom_rfitness";
$db_pass = "";
// $db_pass = "D3vAdm!n";
$db_name = "rfitscom_rfitness";

$db_conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
mysqli_set_charset($db_conn, 'utf8mb4');


if (mysqli_connect_errno()) {

    //Ubah url blog
    $home = 'http://' . $_SERVER['HTTP_HOST'] . '/';
}
