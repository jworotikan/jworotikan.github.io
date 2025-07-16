<?php
require 'conndb.php';


if (isset($_POST['btnReg'])) {
    if (isset($_POST['usrName'])) {
        $usrName = $db_conn->real_escape_string($_POST['usrName']);
        $classID = $db_conn->real_escape_string($_POST['classID']);
        $regSql = "INSERT INTO dbmUsersReg (usrName, classID) VALUES ('$usrName', '$classID')";

        $regInput = $db_conn->query($regSql);

        if ($regInput) {
            $usrID = $db_conn->insert_id;
            header('location:../home.php?usr='.$usrID.'&p=qst');
        }
    }
}

?>